import css from './Profile.module.css'
import { ProfileDesc } from "components/ProfileDesc/ProfileDesc";
import { ProfileStat } from "components/ProfileStat/ProfileStat"

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
        <div className={css.profile}>
            <ProfileDesc username={username} tag={tag} location={location} avatar={avatar} />
            <ProfileStat followers={stats.followers} views={stats.views} likes={stats.likes} />
        </div>
    )
}

