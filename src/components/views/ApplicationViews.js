import { Outlet, Route, Routes } from "react-router-dom"



export const ApplicationViews = () => {

    return <Routes>
        <Route path="/" element={
            <>
                <h1 className="mainTitle">Funko Tracker</h1>
                <section className="mainContainer">
                    <div className="news">
                        <h2>Pops</h2>
                       
                        </div>
                    


                </section>


                <Outlet />
            </>
        } />
       
       
    </Routes>
}