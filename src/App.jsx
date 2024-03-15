import ConditionRendering from "./ConditionRendering"
import Greet from "./Greet"
import { Name3 } from "./Greet"
import JsWithCurlyBraces from "./JsWithCurlyBraces"
import PlayWithProps from "./PlayWithProps"
import Props from "./Props"
import Pure_Function from "./Pure_Function"
import Rendering_List from "./Rendering_List"
//this method is ok for using compoents but it this file will crowded with lots of compnents with heavy data
//then i can always move components like (Name1,Name2,Name3,..)to seperate files
// import React from "react"
// function Name1()
// {
//   return (
//     <p>Radhika</p>
//   )
// }
// function Name2()
// {
//   return (
//     <p>Radhika</p>
//   )
// }
// function Name3()
// {
//   return (
//     <p>Vinay</p>
//   )
// }
//*****in a component you can use or nest other components but cannot define a component in other component or parent component


// 👎 replacing passing props from spread operator 
// function PropsInApp({person})
function PropsInApp(props)
{
  return(
   <div>
   {/* resolving my mistake 👇👇👇👇 in this line that pass person as prop to JsWithCurlyBraces component */}
    {/* name={JsWithCurlyBraces(person)} */}
    {/* 👆👆👆👆 */}
    {/* <p>name=<JsWithCurlyBraces person={person}/></p> */}
    <p>name=<JsWithCurlyBraces {...props}/></p>
    {/* 👍 replacing passing props from spread operator */}
   </div>
  )
}
export default function App()
{
  return(
    <>

    <Greet 
      person={{name:"alies",
      age:20}}
      size={200}
    />
    I am from named export 👇
    <Name3/>
    {/* 👇 just commented out after the funtion propsInApp declaration bcz it is used in the function */}
    {/* <JsWithCurlyBraces/> */}
    {/* props in external file or component */}
    <PlayWithProps 
    //{{}} -> an object in JSX curlies
      person = {
        {
          name:"khushi",
          age:21,
          dept:"CSE"
      }
      }
      size = {100}
    />
    {/* props in same file */}
<PropsInApp  person={{ name:"Bob",sheet_size:25 }} desc = "interesting personality" />
<Props/>
<ConditionRendering/>
<Rendering_List/>
<Pure_Function/>
    </>
  )

}




