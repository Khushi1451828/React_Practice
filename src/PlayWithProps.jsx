import React from 'react'

function PlayWithProps({person,size}) {
  return (
    <div>
      <h1>Hello this is {person.name}</h1>
      <p>this sheet size is {size} in Cms</p>
      <i>hello this is {person.name} from the propfunda within same file (app.jsx)</i>
    </div>
  )
}

export default PlayWithProps
