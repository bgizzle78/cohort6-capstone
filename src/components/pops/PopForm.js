import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PopForm.css"


export const PopForm = () => {

    // Add the correct default properties to the
    //     initial state object

    const [pop, update] = useState({
        name: "",
        genre: "",
        boxNumber: "",
        rarity: "",
        releaseDate: "",
        imageURL: "",
        userId: 0
    })

    // Use the useNavigation() hook so you can redirect
    //     the user to the pop list

    const navigate = useNavigate()
    const localFunkoUser = localStorage.getItem("funko_user")
    const funkoUserObject = JSON.parse(localFunkoUser)

    const saveButtonClick = (event) => {
        event.preventDefault()

        // Create the object to be saved to the API
        const popToSendToAPI = {
            userId: funkoUserObject.id,
            name: pop.name,
            genre: pop.genre,
            boxNumber: pop.boxNumber,
            rarity: pop.rarity,
            releaseDate: pop.releaseDate,
            imageURL: pop.imageURL,
        }

        // Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/pops`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(popToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            })
    }
    return (

        <form className="popForm">
            <li className="navbar__item navbar__home">
                <Link className="navbar__link" to="/"
                >Home Page</Link>
            </li>
            <h2 className="popForm__title">Pop Details</h2>
            <fieldset>
                <div className="">
                    <label htmlFor="popName">Pop Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of pop"
                        value={pop.name}
                        onChange={
                            (evt) => {
                                const copy = { ...pop }
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="genre">Genre:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Pop Genre"
                        value={pop.genre}
                        onChange={
                            (evt) => {
                                const copy = { ...pop }
                                copy.genre = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="boxNumber">Box Number:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Box Number"
                        value={pop.boxNumber}
                        onChange={
                            (evt) => {
                                const copy = { ...pop }
                                copy.boxNumber = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rarity">Rarity:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Rarity"
                        value={pop.rarity}
                        onChange={
                            (evt) => {
                                const copy = { ...pop }
                                copy.rarity = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="releaseDate">Release Date:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Release Date"
                        value={pop.releaseDate}
                        onChange={
                            (evt) => {
                                const copy = { ...pop }
                                copy.releaseDate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageURL">Image URL:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Image URL"
                        value={pop.imageURL}
                        onChange={
                            (evt) => {
                                const copy = { ...pop }
                                copy.imageURL = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => saveButtonClick(clickEvent)}
                className="btn btn-primary">
                Add Pop
            </button>
        </form>
    )
}