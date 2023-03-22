import MovieCard from '@/components/organisms/movie-card/movie-card'
import { Movie } from '@/domains'
import React, { useEffect, useState } from 'react'
import style from './moviesection.module.css'

export default function MovieSection() {

    const [popular, setPopular] = useState<Movie[]>([])

    const url = "https://api.themoviedb.org/3/trending/all/day?api_key=77acd801b597c4084ac360528aebf8aa&language=en-US"

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        const data = await fetch(url)
        const movies = await data.json()
        setPopular(movies.results)
        console.log(movies.results)
    }

    return (
        <div className={style.movie_section}>
            <h2>Popular on Netflix</h2>
            <div className={style.popular}>
            {popular.map((movie, id) => (
                <MovieCard key={movie.id} backdrop={movie.backdrop_path} />
            ))}
            </div>
        </div>
    )
}
