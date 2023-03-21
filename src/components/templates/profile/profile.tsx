import ProfileCard from '@/components/molecules/profile-card/profile-card'
import { userProfile } from '@/data'
import React from 'react'
import style from './profiles.module.css'

export default function Profile() {
    return (
        <div className={style.profiles}>
            <div className={style.profile_sect}>
                <h1>Who's Watching?</h1>
                <div className={style.profile_users}>
                    {userProfile.map((user) => (
                        <ProfileCard name={user.user} image={user.userprofile} />
                    ))}
                </div>
                <button>Manage Profiles</button>
            </div>

        </div>
    )
}
