import { Outlet, Route, Routes } from "react-router-dom"
import { PopContainer } from "../pops/PopContainer.js"
// import { PopEdit } from "../pops/PopEdit.js"
import { PopForm } from "../pops/PopForm.js"
import "./AppViews.css"



export const ApplicationViews = () => {

    return <Routes>
        <Route path="/" element={
            <>
                <h1 className="mainTitle">Funko Pop Collection</h1>
                <section className="mainContainer">
                    <div className="collection_view">
                        <h2>Showcase</h2>
                        <PopContainer />
                    </div>
                </section>

                <Outlet />
            </>
        } />
        {/* <Route path="pops/create" element={<PopEdit />} /> */}
        <Route path="/pops" element={<PopForm />} />

    </Routes>
}