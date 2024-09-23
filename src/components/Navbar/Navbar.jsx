import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import logo from "../../assets/finalProject assets/images/freshcart-logo.svg"
import { useContext } from 'react';
import { CounterContext } from '../../Context/CounterContext';


export default function Navbar() {
let x=useContext(CounterContext)


  return (
    <nav className=' p-1 fixed left-0 right-0  top-0'>
      <div className='container mx-auto justify-between items-center flex flex-col lg:flex-row bg-slate-400 p-2 rounded-md'>
        <div className='left-side flex flex-col lg:flex-row'>
          <img width={100} src={logo} className='mr-7' alt="" />
          <ul className='flex flex-col lg:flex-row gap-5 text-xl'>
            <li className=''>
              <NavLink to="home">Home</NavLink>

            </li>
            <li>
              <NavLink to="cart">Cart</NavLink>

            </li>
            <li>
              <NavLink to="brands">Brands</NavLink>

            </li>
            <li>
              <NavLink to="categories">Categories {x.Counter}</NavLink>
            </li>


            <li>

              <i className='fa-brands  mx-1 fa-facebook'></i>
              <i className='fa-brands mx-1 fa-instagram'></i>
              <i className='fa-brands mx-1 fa-tiktok'></i>
              <i className='fa-brands mx-1  fa-twitter'></i>
              <i className='fa-brands mx-1  fa-youtube'></i>
            </li>

<button className='bg-red-400' onClick={()=>x.setCounter(Math.random)}>Update</button>

          </ul>



        </div>
        <div className='left-side flex flex-col lg:flex-row' >
          <ul className='flex justify-between gap-4 font-semibold'>
            <li>
              <NavLink to="register">Register</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="sign out">SignOut</NavLink>
            </li>
          </ul>




        </div>


      </div>

    </nav >
  )
}
