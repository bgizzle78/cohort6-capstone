import { Outlet, Route, Routes } from "react-router-dom"
import { PopContainer } from "../pops/PopContainer.js"
import { PopList } from "../pops/PopList.js"
import { PopSearch } from "../pops/PopSearch.js"
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

    </Routes>
}