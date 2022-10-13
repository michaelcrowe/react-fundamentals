// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)
  const handleSubmit = event => {
    event.preventDefault()
    console.dir(event.target) // !
    onSubmitUsername(inputRef.current.value)
  }
  const handleChange = event => {
    const {value} = event.target // destructuring of property into a variable of the same name!
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lowercase')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          id="username"
          type="text"
          onChange={handleChange}
        />
        <div role={'alert'} style={{color: 'red', padding: '10px 0'}}>
          {error}
        </div>
      </div>
      <button type="submit" disabled={Boolean(error) ? true : false}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
