import React from 'react'
import logo from '../utility/logo.jpeg'
import user from '../utility/user.png'

const HeaderComponent = () =>
{
    return(
        <div className="header">
         <Logo></Logo>
         <SearchBar></SearchBar>
         <User></User>
        </div>
    )
}

const Logo = () =>
{
    return(
        <div className="wrapper_logo">
        <img className = "header_logo" src= {logo}></img>
        </div>
    )
}

const SearchBar = () =>
{
    return(
        <div className="wrapper_search">
            <input
            type="text"
            id="header-search"
            placeholder="Search" 
            />
            <button type="submit">Search</button>
        </div>
    )
}

const User = () =>
{
    return(
        <div className="wrapper_user">
        <img className = "header_user" src= {user}></img>
        </div>
    )
}

export default HeaderComponent;