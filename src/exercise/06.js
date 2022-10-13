// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, updateInputValue] = React.useState('')
  const handleSubmit = event => {
    event.preventDefault()
    console.dir(event.target) // !
    onSubmitUsername(inputValue) // we can just grab our input value from state instead of checking the input
  }
  const handleChange = event => {
    const {value} = event.target // destructuring of property into a variable of the same name!
    updateInputValue(value.toLowerCase())
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
