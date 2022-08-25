import React, { useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom";
import "./PopList.css"

export const PopList = () => {
    const [pops, setPops] = useState([])
    // const navigate = useNavigate()

    // const getAllPops = () => {
    //     fetch('http://localhost:8088/pops')
    //         .then(response => response.json())
    //         .then((popArray) => {
    //             setPops(popArray)
    //         })
    // }

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
                pops.map(
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