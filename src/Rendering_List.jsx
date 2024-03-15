import React from 'react'
// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];
const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'spaceflight calculations',
  }, {
    id:3,
    name: 'Percy Lavon Julian',
    profession: 'chemist', 
    accomplishment: 'discovery of Arctic ozone hole', 
  }, {
    id:4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'discovery of Arctic ozone hole',
  }];
function Rendering_List() {
    // map() method to render list of components
    // const mappingPerson = people.map(item=><li>{item}</li>)

    // ****filter metho**** //
    const chemist = people.filter(person=>person.profession === 'chemist');
    const listItems = chemist.map(person=>
        //we can use <Fragment></Fragment> tag also it will creata a list of tags mentioned in this tag
      ( <li key={person.id}>
        <p>{person.name}(chemist):</p>
        <p>{person.accomplishment}</p>
       </li> )
        );
  return (
    // map
    // <ol> {mappingPerson}</ol>
    <ol>{listItems}</ol>
  );
}

export default Rendering_List
