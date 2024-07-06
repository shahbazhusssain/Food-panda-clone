import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
        <h1 style={{
            color:'#d0295e'
        }}>Food panda</h1>
        <h2>location <span className='note'>Islamabad</span></h2>
        <button className='dew'>link</button>
        <button className='search page'>search </button>
    </div>
  )
}

export default Header