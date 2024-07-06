import React from 'react'

const Content = () => {
  return (
    <div className='Content'>
    <form>
      <div>
      <label for='username'>username</label>
      <input type='text' id='username ' name='usernmae' required></input>
      </div>

      <div>
        <label for='password'>password</label>
        <input type='text' id='password' name='password' required></input>
      </div>
      <div>
        <button className='submit'>login</button>
      </div>
    </form>

    </div>
  )
}

export default Content