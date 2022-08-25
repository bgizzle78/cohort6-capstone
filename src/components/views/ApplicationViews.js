import { Outlet, Route, Routes } from "react-router-dom"
import { PopList } from "../pops/PopList.js"
import "./AppViews.css"



export const ApplicationViews = () => {

    return <Routes>
        <Route path="/" element={
            <>
                <h1 className="mainTitle">Your Funko Collection</h1>
                <section className="mainContainer">
                    <div className="collection_view">
                        <h2>Showcase</h2>
                        <PopList />
                    </div>
                </section>


                <Outlet />
            </>
        } />
       <Route path="/pops" element={<PopList />} /> 

    </Routes>
}