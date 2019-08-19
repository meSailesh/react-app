import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
const [personsState, setPersons] = useState({
  persons:[
    { name: 'Max', age:28 },
    { name: 'Manu', age:26 },
    { name: 'Sailesh', age:23 }
  ],
  showPersons: false
});
// const [otherState, setOtherState] = useState('some other value')
// console.log(personsState, otherState);

const switchNameHandler = () => {
  //Check commit
  setPersons({
    persons:[
      { name: 'Maximilian', age:28 },
      { name: 'Manu', age:28 },
      { name: 'Sailesh', age:23 }
  ],
  showPersons : personsState.showPersons 
  });
}

const nameChangedHandler = (event) => {
  setPersons ({
    persons:[
      { name: 'Maximilian', age:28 },
      { name: event.target.value, age:28 },
      { name: 'Sailesh', age:23 }
    ],
    showPersons : personsState.showPersons
  })
}

const togglePersonHandler = () => {
  const doesShow = personsState.showPersons;
  setPersons({
    persons:[
      { name: 'Max', age:28 },
      { name: 'Manu', age:28 },
      { name: 'Sailesh', age:23 }
  ], 
    showPersons: !doesShow
  })

}

const deletePersonHandler = (personIndex) => {
  const persons = [...personsState.persons];
  persons.splice(personIndex, 1);
  setPersons ({
    persons: persons,
    showPersons : personsState.showPersons
  });
}



const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};

  let persons = null;
  if(personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person 
          clicked = {() => {
            deletePersonHandler(index)
          }}
          name = {person.name}
          age = {person.age}/>
        })}
      </div>
    );

  }
  return (
    <div className="App">
     <h1>Hi, I'am a React App</h1>
     <p>This is really working!</p>
     <button
     style = {style}
     onClick = {togglePersonHandler}>Toggle Names</button>
     {persons}
    </div>
  );
}

export default App;



