import { useNavigate } from "react-router-dom";

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
        }} className="pop__delete">Delete Pop</button>

    }

    const editButton = () => {
        return <button onClick={() => {
            navigate(`pops/edit/${popObject.id}`)

        }} className="pop__edit">Edit Pop</button>
    }

    return <>
        <section className="pops">
            <div className="popcard">
                <header>{popObject.name}<br></br>
                    Genre: {popObject.genre}<br></br>
                    Number: {popObject.boxNumber}<br></br>
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