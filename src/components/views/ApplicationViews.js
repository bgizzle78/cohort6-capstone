import { Outlet, Route, Routes } from "react-router-dom"
import "./AppViews.css"



export const ApplicationViews = () => {

    return <Routes>
        <Route path="/" element={
            <>
                <h1 className="mainTitle">Your Funko Collection</h1>
                <section className="mainContainer">
                    <div className="collection_view">
                        <h2>Showcase</h2>
                    </div>
                </section>


                <Outlet />
            </>
        } />


    </Routes>
}