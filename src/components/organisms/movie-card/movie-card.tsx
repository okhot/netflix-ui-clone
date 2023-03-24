import React from 'react'
import style from './moviecard.module.css'

export default function MovieCard({backdrop}: any) {
  return (
    <div className={style.card}>
        <div className={style.displayedSect}>
            <img src={"https://image.tmdb.org/t/p/w500"+backdrop} alt='' />
        </div>
        <div></div>
    </div>
  )
}
