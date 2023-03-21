import { type } from 'os'
import React from 'react'
import stye from './profile.module.css'

type Profile = {
  name: String
  image: any
}

export default function ProfileCard({name, image}: Profile) {
  return (
    <div className={stye.profile}>
      <img src={image} alt='profile-image' />
      <p>{name}</p>
    </div>
  )
}