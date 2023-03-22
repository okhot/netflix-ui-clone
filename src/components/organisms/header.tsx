import React from 'react'
import style from './header.module.css'
import { FiBell, FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <div className={style.header}>
        <div className={style.header_left}>
            <img src='/Netflix-Logo.wine.svg' alt='logo' />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>My List</li>
                <li>Browse By Language</li>
            </ul>
        </div>
        <div className={style.heder_right}>
            <FiSearch />
            <FiBell />
        </div>
    </div>
  )
}
