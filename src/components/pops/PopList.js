import React, { useState, useEffect } from "react"
import "./PopList.css"

export const PopList = ({ searchTermState }) => {
    const [pops, setPops] = useState([])
    const [filteredPops, setFiltered] = useState([])

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
                            return <div className="popcard">
                                <header>{pop.name}<br></br>
                                    Genre: {pop.genre}<br></br>
                                    Number: {pop.boxNumber}<br></br>
                                    Rarity: {pop.rarity}<br></br>
                                    Release Date: {pop.releaseDate}<br></br>
                                    <img className="img" src={pop.imageURL} alt={pop.name}></img>
                                </header>
                            </div>
                        })
                    : pops.map(
                        (pop) => {
                            return <div className="popcard">
                                <header>{pop.name}<br></br>
                                    Genre: {pop.genre}<br></br>
                                    Number: {pop.boxNumber}<br></br>
                                    Rarity: {pop.rarity}<br></br>
                                    Release Date: {pop.releaseDate}<br></br>
                                    <img className="img" src={pop.imageURL} alt={pop.name}></img>
                                </header>
                            </div>
                        }
                    )
            }
        </section>
    </>
}