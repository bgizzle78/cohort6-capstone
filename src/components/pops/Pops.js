import { useNavigate } from "react-router-dom";
import "./PopList.css"

export const Pops = ({ getPops, popObject }) => {

    const navigate = useNavigate()
    const deleteButton = () => {
        return <button onClick={() => {
            fetch(`http://localhost:8088/pops/${popObject.id}`, {
                method: "DELETE"
            })
                .then(() => {
                    getPops()
                })
        }} className="btn-delete">Delete Pop</button>

    }

    const editButton = () => {
        return <button onClick={() => {
            navigate(`pops/edit/${popObject.id}`)

        }} className="btn">Edit Pop</button>
    }

    return <>
        <section className="pop-container">
            <div className="popcard">
                <header>{popObject.name}<br></br>
                    Genre: {popObject.genre}<br></br>
                    Box Number: {popObject.boxNumber}<br></br>
                    Rarity: {popObject.rarity}<br></br>
                    Release Date: {popObject.releaseDate}<br></br>
                    <img className="img" src={popObject.imageURL} alt={popObject.name}></img>
                </header>
                <footer>
                    {
                        editButton()
                    }
                    {
                        deleteButton()
                    }
                </footer>
            </div>
        </section>
    </>
}