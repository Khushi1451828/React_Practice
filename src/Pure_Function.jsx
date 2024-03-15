import React from 'react'
function Double({num})
{
    return 2*num;
}
function Receipe({drinkers})
{
    return(
    <ol>
    <li>Boil {drinkers} cups of Milk</li>
    <li>Add {drinkers} spoon of coffee and {0.5*drinkers} spoon of sugar</li>
    <li>Add {0.5*drinkers} spoon of chocolate power on each one</li>
    </ol>
    );
}
// let guest=0;
function Cup({guest})
{
    // guest=guest+1;
    return <h2>Tea cup for guest *{guest}</h2>
}
export default function Pure_Function() {
    let cups = [];
    for(let i=1 ; i <= 12 ; i++){
      cups.push(<Cup key={i} guest={i}/>) }
  return (
   
      <>
      
        <div style={{backgroundColor:"pink",padding:"5px",margin:"5px"}}>
    I am double of my input(5) = <Double num={5}/>
    </div>
    <section>
        <h1 style={{color:"red"}}>Coffee recipe</h1>
        <h2>for two</h2>
        <Receipe drinkers={2}/>
        <h2>for gathering</h2>
        <Receipe drinkers={5}/>
    </section>
    {/* 👇 it will not pure because calling this component multiple times will produce different JSX !!!!! */}
    {/* <Cup/>
    <Cup/>
    <Cup/> */}
    <div style={{backgroundColor:'pink',padding:'10px'}}>{cups}</div>
    
    </>
    
  );
}
