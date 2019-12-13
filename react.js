// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.

import React, {Component} from 'react'

class First extends Component{
  
  render(){
    return(
      <div>
        <h1> I am component! </h1>
      </div>
      
      
    )
  }
}

export default First;

// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

for(let i=0; i<names.length; i++){
  console.log(`${names[i]} is ${names[i].length} characters long.`)
}

let name = names.map((value,index)=>{
  return `${value} is ${value.length} characters long.`
})
console.log(name)

// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

const {name,home,dislikes} = this.state


// 4. Write a React method that would add one and update the state of the count each time the method is called.

this.state = {
  count: 0
}

updateCount= () => {
  let newCount = this.state.count +  1
  this.setState({count:newCount})
}



// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

// Commenting because it is already defined in the first line.
// import React, { Component } from 'react';

class Recipes extends Component{
  constructor(props){
    super(props)
    this.state = {
      recipes: ['Meatballs',
        'Mac & Cheese']
    }
  }

  render() {
    return(
      this.state.recipes.map(recipe => {
        return(
          <ul>
          <li>{recipe}</li>
          </ul>
        )
      })

    )
  }
}
export default Recipes
