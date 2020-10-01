import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
//import App from '../App'

const Navbar = (props)=>{
    setTimeout(()=>{
        props.history.push('/about')
    },100000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)

//npm install react-router-dom 
//link and navlink have only one difference that is navlink create a 'active' class to the a tag but link doesn't

//withRouter allows to pass higher order components and also add router props to elements like here in navbar which doesn't have Route path (see in app.js)

//npm install axios is used to to fetch data from an external source