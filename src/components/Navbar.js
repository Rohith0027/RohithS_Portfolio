import { Component } from 'react';
import React from 'react'
import './nav.css'
import MenuData from './MenuData';

class Navbar extends Component {
    state = {clicked: false};
    handleClick = ()=>{
        this.setState({clicked :!this.state.clicked})
    }
    render(){
  return (
    <div className='navbar'>
        <h1 className='logo'>
            Rohith<span>'S</span> Portfolio
        </h1>
        <div className='menu-icons' onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuData.map((item,index)=>{
                return(
                <li key={index}>
                    <a href={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</a>
                </li>
                );
            })}
        </ul>
    </div>
  )
}
}

export default Navbar