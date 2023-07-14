import PropTypes from "prop-types";
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
   
    return (
        <ul className={css.friendList}>
            {
                friends.map(friend => {
                    return (
                        <li className={css.item} key={friend.id} style={{boxShadow: friend.isOnline ? '0px 0px 12px 1px #04bd20' : '0px 0px 12px 1px #a80808'}}>
                            <span className={css.status} style={{backgroundColor: friend.isOnline ? '#04bd20' : '#a80808'}}></span>
                            <img className={css.avatar} src={friend.avatar} alt={friend.name} width="60" />
                            <p className={css.name}>{friend.name}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    )
}