import React, { useState } from 'react'

function StateCard({ state }) {

  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState('lightblue');

  // console.log(like, setLikes)
  // console.log(useState)

  function handleClick() {
    // setLikes(likes + 1)
    // do this way if the value is dependant on its previous value
    setLikes(likes => likes + 1)
  }

  function handleColor() {
    setColor( color === 'lightblue' ? 'orange' : 'lightblue' )
  }

  return (
    <div className="state-card">

       <h2>{ state }</h2>

      <button onClick={ handleClick }>{ likes } Like Me!</button>

      <button onClick={ handleColor } style={{background: color }} >Change Color</button>

    </div>
  )
}

export default StateCard
