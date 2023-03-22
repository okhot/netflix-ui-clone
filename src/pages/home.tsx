import Header from '@/components/organisms/header'
import style from '../styles/home.module.css'
import React, { useEffect, useState } from 'react'
import { FiPlay, FiInfo } from "react-icons/fi";
import MovieCard from '@/components/organisms/movie-card/movie-card';
import MovieSection from '@/components/templates/movie-section/movie-section';

export default function HomePage() {

    return (
        <div className={style.home}>
            <Header />
            <div className={style.home_body} style={{ backgroundImage: `url('https://www.themoviedb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg')` }}>
                <div className={style.gradient}></div>
                <div className={style.movie_details}>
                    <img src='https://www.themoviedb.org/t/p/original/8moCzlpkwSjUA7IdrQGPh7BrWVZ.png' alt='image_title' />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quos saepe non animi deleniti vitae explicabo excepturi quia, odio culpa mollitia fugit quam accusamus doloremque harum voluptate. Nemo, sunt fugit.</p>
                </div>
                <div className={style.buttons}>
                    <div className={style.button_left}>
                        <button className={style.button_play}> <FiPlay style={{ fill: 'black' }} /> Play</button>
                        <button className={style.button_info}> <FiInfo /> More Info</button>
                    </div>
                </div>
                <MovieSection />
            </div>
        </div>
    )
}
