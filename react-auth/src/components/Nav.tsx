import React from "react";
import { Link } from "react-router-dom";

const Nav = (props: { name: string, setName: (name: string) => void }) => {

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });

        props.setName("");
    }

    let menu;

    if (props.name==="") {
        menu = (
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>)
    } else {
        menu = (
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <Link to="/" className="navbar-brand m-1 ms-5">Home</Link>             
                <div>
                    {menu}
                </div>
            </nav>
        </div>
    );

}

export default Nav;