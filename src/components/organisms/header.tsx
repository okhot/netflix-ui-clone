import React from 'react'
import style from './header.module.css'
import { FiBell, FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

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
        <div className={style.yk}>
          <FiSearch style={{ fontSize: '23px' }} />
          <FiBell style={{ fontSize: '23px' }} />
        </div>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='profile' />
        <IoMdArrowDropdown style={{ fontSize: '23px' }} />
      </div>
    </div>
  )
}
