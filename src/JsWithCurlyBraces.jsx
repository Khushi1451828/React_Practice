import React from 'react'
const today = new Date();

//Intl.DatetimeFormat is a built-in object 
// that provide language-sensitive date and time formatting. 
//.format() is a method 
//used to format a Date object according to the options provided when creating the Intl.DateTimeFormat object.
function formatDay(today)
{
    return Intl.DateTimeFormat(
     'en-US',
     {weekday:'long'}
    ).format(today)
}
//photo -> javascript object
//contains 1.->country string 2.->style object
const photo={
    country:"India",
    style : { 
        backgroundColor:"yellow",
        text:"red",
        border:"1px solid blue"
    }
}
export default function JsWithCurlyBraces({person,desc}) {
    const link = "https://cdn.pixabay.com/photo/2016/07/08/23/17/woman-1505407_1280.jpg"
    // const desc = "Rajasthan culture"
    const about="rajasthan"
  return (
    <div>
      <img 
      src={link}
      alt={desc}
      style={{width:"20%",height:"20%"}}
    //   put javaScript in JSX
      />
    <h2>the above 👆 image is about {about}</h2>
    <h2>Today is 💮{formatDay(today)}</h2>
    <div style={photo.style}>
    <img 
    src={link}
    style={{width:"20%",height:"20%"}}
    />
        <p>state rajasthan is in {photo.country} and the above pic is all about {desc} which is cliked by photographer {person.name}</p>
    </div>
    </div>
  )
}

