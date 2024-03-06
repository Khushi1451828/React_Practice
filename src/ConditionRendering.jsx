import React from 'react'
// function Item({isPacked,name})
// {
//      if(isPacked)
//    { 
//     return <li>{name} ✅ </li>
//    }
//     return <li>{name} ❎ </li>

   
// }

// **** return null ****//
// function Item({isPacked,name})
// {
//     if(isPacked)
//     {
//         return null;
//     }
//     return <li>{name} 😥</li>
// }

// **** using ternary Operator****//
// function Item({isPacked,name})
// {
//     return(
//         <li>
//         {isPacked ? 
//         <del>
//         {name +'✅' }
//         </del>
//         : name+'❎'}
//     </li>
//     )
    
// }


// ****using Logical AND operator(&&)****//
// function Item({isPacked,name})
// {
//     return(
//         // You can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.
//         <li>{name}{isPacked && '✅'}</li>
//     )
// }


//****conditionally assigining JSX to variable ****//
function Item({isPacked,name})
{
    let itemName=name;
    if(isPacked){
        
            { itemName = <del>
                {name+'✅'}
            </del>
               }
       
    }
    else{
        itemName = name+'❎'
    }
    return(
    <li>
    {itemName}
    </li>
    )
}
function ConditionRendering() {
  return (
    <div style={{border:"5px solid green",padding:"20px",margin:"10px"}}>
            <h1>Items below is listed</h1>
        <ul>
        <Item
            isPacked={true}
            name="tomato 1kg"
        />
        <Item
            isPacked={true}
            name="Honey 1box"
        />
        <Item
            isPacked={false}
            name="Olive oil"
        />
        <Item
            isPacked={false}
            name="Shampoo 1bottle"
        />

        </ul>
        </div>
        
  )
}

export default ConditionRendering
