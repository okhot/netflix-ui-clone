import Header from '@/components/organisms/header'
import style from '../styles/home.module.css'
import React, { useEffect, useState } from 'react'
import { FiPlay, FiInfo } from "react-icons/fi";
import MovieCard from '@/components/organisms/movie-card/movie-card';
import MovieSection from '@/components/templates/movie-section/movie-section';
import InTheathers from '@/components/templates/in-theater/in-theaters';

export default function HomePage() {

    return (
        <div className={style.home}>
            <Header />
            <div className={style.home_body} style={{ backgroundImage: `url('https://www.themoviedb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg')` }}>
                <div className={style.grad}></div>
                <div className={style.gradient}></div>
                <div className={style.movie_details}>
                    <img src='https://www.themoviedb.org/t/p/original/24dIhRKjLnYRanA2Mo0ycZfObUp.png' alt='image_title' />
                   <p>With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</p>
                </div>
                <div className={style.buttons}>
                    <div className={style.button_left}>
                        <button className={style.button_play}> <FiPlay style={{ fill: 'black' }} /> Play</button>
                        <button className={style.button_info}> <FiInfo /> More Info</button>
                    </div>
                </div>
                <MovieSection />
                <InTheathers />
            </div>
        </div>
    )
}
