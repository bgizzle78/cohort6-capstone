import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__pops">
                <Link className="navbar__link" to="/pops"
                >Add New Pop</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    //sessionStorage.removeItem("activeUser")
                    localStorage.removeItem("funko_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>

        </ul>
    )
}