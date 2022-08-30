import React, { useState, useEffect } from "react"
import "./PopList.css"
import { Pops } from "./Pops"

export const PopList = ({ searchTermState }) => {
    const [pops, setPops] = useState([])
    const [filteredPops, setFiltered] = useState([])

    const getPops = () => {
        fetch(`http://localhost:8088/pops`)
            .then(response => response.json())
            .then((popArray) => {
                setPops(popArray)
            })
    }

    useEffect(
        () => {
            const searchedPops = pops.filter(pop => {
                return pop.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchedPops)
        },
        [searchTermState]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/pops`)
                .then(response => response.json())
                .then((popArray) => {
                    setPops(popArray)
                })
        },
        []
    )
    return <>
        <section className="pops">
            {
                filteredPops.length > 0
                    ? filteredPops.map(
                        (pop) => {
                            return <Pops key={pop.id}
                                getPops={getPops}
                                popObject={pop} />
                        }

                    )
                    : pops.map(
                        (pop) => {
                            return <Pops key={pop.id}
                                getPops={getPops}
                                popObject={pop} />
                        }
                    )
            }
        </section>
    </>
}