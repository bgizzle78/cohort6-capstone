import { Outlet, Route, Routes, Link } from "react-router-dom"
import { PopContainer } from "../pops/PopContainer.js"
import { PopEdit } from "../pops/PopEdit.js"
import { PopForm } from "../pops/PopForm.js"
import "./AppViews.css"

export const ApplicationViews = () => {

    return <Routes>
        <Route path="/" element={
            <>
                <li className="navbar__item navbar__pops">
                    <Link className="navbar__link" to="/pops"
                    >Add New Pop</Link>
                </li>
                <h1 className="mainTitle">Funko Pop Collection Tracker</h1>
                <section className="mainContainer">
                    <div className="collection-view">
                        <h2 className="collection-title">Collection Showcase</h2>
                        <PopContainer />
                    </div>
                </section>

                <Outlet />
            </>
        } />
        <Route path="/pops/edit/:popId" element={<PopEdit />} />
        <Route path="/pops" element={<PopForm />} />

    </Routes>
}