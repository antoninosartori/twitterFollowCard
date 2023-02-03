import React from 'react'
import { useState } from 'react'
import './TwitterFollowCard.css'
const TwitterFollowCard = ( { name, userName, initialIsFollowing, isFollowingYou } ) => {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const btnText = isFollowing ? 'Siguiendo' : 'Seguir';
    const btnClassName = isFollowing 
        ? 'twitter-followCard-info--btn --isFollowing'
        : 'twitter-followCard-info--btn'

    

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className='twitter-followCard-article'>
            <img
                className='twitter-followCard-avatar'
                src={`https://unavatar.io/${userName}`}
                alt={name} />

                <div className="twitter-followCard-info">
                    <div className='twitter-followCard-infoUser'>
                        <h4 className='twitter-followCard--name'> {name} </h4>
                        
                            {isFollowingYou 
                                ?   <div className='twitter-followCard-userNameFollowingYou'>
                                        <span className='twitter-followCard--userName'> {`@${userName}`} </span>
                                        <span className='twitter-followCard-isFollowingYou'>Te sigue</span>
                                    </div>
                                :
                                <span className='twitter-followCard--userName'> {`@${userName}`} </span>
                            }
                        
                    </div>
                    <button className={btnClassName} onClick={handleFollow}> 
                        <span className='twitter-btnText'>{btnText}</span>
                        <span className='twitter-unfollowText'>Dejar de seguir</span>
                    </button>
                </div>

        </article>
    )
}

export default TwitterFollowCard