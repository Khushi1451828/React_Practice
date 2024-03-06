function Name1()
{
  return (
    <p>Radhika</p>
  )
}
function Name2()
{
  return (
    <p>khushi</p>
  )
}
export function Name3()
{
  return (
    <p>Vinay</p>
  )
}

export default function Greet({person,size})
{
  return(
    <>
      <h3>Hello {person.name} with {size}</h3>
    <Name1/>
      <h3>Hello</h3>
    <Name2/>
      <h3>Hello {person.name} with {size}</h3>
    <Name3/>
    </>
    
  )
}