import React from 'react'
import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

const App = () => {
  const users = 
  [
    {
      name: 'Antonino',
      userName: 'AntoninoS27',
      initialIsFollowing: true,
      isFollowingYou: true
    },
    {
      name: 'MarciEsteban',
      userName: 'marciesteban',
      initialIsFollowing: false,
      isFollowingYou: false
    },
    {
      name: 'Jesss',
      userName: 'JesicaMaitt',
      initialIsFollowing: false,
      isFollowingYou: true
    },
  ]

  return(
    <section className='home'>
      <div className="twitterFollowCard-container">
        <h3 className='twitterFollowCard-title'> A quien seguir </h3>
        { users.map(({ name, userName, initialIsFollowing, isFollowingYou }) => (
          
          <TwitterFollowCard 
            key={userName}
            name={name}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
            isFollowingYou={isFollowingYou} />

          ))}
      </div>
    </section>
  )
}

export default App