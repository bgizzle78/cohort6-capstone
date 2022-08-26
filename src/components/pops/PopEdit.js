// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export const PopEdit = () => {
//     const [popDetails, editPopDetails] = useState({
//         name: "",
//         genre: "",
//         boxNumber: "",
//         rarity: "",
//         releaseDate: "",
//         imageURL: ""
//     })

//     const { popId } = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         fetch(`http://localhost:8088/pops/${popId}`)
//             .then(response => response.json())
//             .then((data) => {
//                 editPopDetails(data)
//             })
//     }, [popId])

//     const editButtonClick = (clickEvent) => {
//         clickEvent.preventDefault()

//         return fetch(`http://localhost:8088/pops/${pop.id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(popDetails)
//         })
//             .then(response => response.json())
//             .then(() => {
//                 navigate("/")
//             })
//     }
//     return (
//         <form className="popForm">
//             <h2 className="popForm__title">Edit Details</h2>
//             <fieldset>
//                 <div className="">
//                     <label htmlFor="name">Pop Name:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Name of Pop"
//                         value={pop.name}
//                         onChange={
//                             (evt) => {
//                                 const copy = { ...pop }
//                                 copy.name = evt.target.value
//                                 editPopDetails(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="genre">Genre:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Pop Genre"
//                         value={pop.genre}
//                         onChange={
//                             (evt) => {
//                                 const copy = { ...pop }
//                                 copy.genre = evt.target.value
//                                 editPopDetails(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="boxNumber">Box Number:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Box Number"
//                         value={pop.boxNumber}
//                         onChange={
//                             (evt) => {
//                                 const copy = { ...pop }
//                                 copy.boxNumber = evt.target.value
//                                 editPopDetails(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="rarity">Rarity:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Rarity"
//                         value={pop.rarity}
//                         onChange={
//                             (evt) => {
//                                 const copy = { ...pop }
//                                 copy.rarity = evt.target.value
//                                 editPopDetails(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="releaseDate">Release Date:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Release Date"
//                         value={pop.releaseDate}
//                         onChange={
//                             (evt) => {
//                                 const copy = { ...pop }
//                                 copy.releaseDate = evt.target.value
//                                 editPopDetails(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="imageURL">Image URL:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Image URL"
//                         value={pop.imageURL}
//                         onChange={
//                             (evt) => {
//                                 const copy = { ...pop }
//                                 copy.imageURL = evt.target.value
//                                 editPopDetails(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <button
//                 onClick={(clickEvent) => editButtonClick(clickEvent)}
//                 className="btn btn-primary">
//                 Update Pop
//             </button>
//         </form>
//     )
// }