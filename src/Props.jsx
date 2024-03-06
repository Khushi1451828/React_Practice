import React from 'react'
import PlayWithProps from './PlayWithProps'

function Card({children}){
return (
    <div>
        {children}
    </div>
)
}

export default function Props() {
  return (
    <div>
      <Card>
        <PlayWithProps size={200} person={{college:"Jaipur Engg College" , branch:"CSE"}}
        />
      </Card>
    </div>
  )
}


