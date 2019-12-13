# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true/false) True
- React will only render on the server using Node.js (true/false) True
- React is a full stack framework for modern web applications (true/false) True
- React is a flexible library that plays the role of V in an MVC framework (true/false) True
- You should always update a component's state directly using this.state (true/false) False
  component's state is updated using this.setState
- React is made up of encapsulated components that manage their own state (true/false)True
- React components render HTML (true/false) True


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: Components that manage their own state are called smart components. 
  Components that do not have their own states are dumb components.

  Researched answer:
  Smart components includes-
  -fetch, capture changes and pass down application data.
  -They are responsible for calling libraries and functionality.
  -Responsible for managing state and knowing when to re-render a component.
  Dumb components: 
  -Almost all basic UI components should be considered dumb components. Examples include loaders, modals, buttons, inputs, etc.
  -Dumb components accept props to allow them to be dynamic and reusable

Separating smart and dumb components 
  -allows flexibility to make both small and large changes to the app without a great deal of tedious work.
  -provides flexibility and avoid duplication.
  
3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: "yarn add ..." will add all the packages that we need to run yarn,in the folder.

  Researched answer:
  When you want to use another package, you first need to add it to your dependencies. Run yarn add [package-name] to install it into project.
  This will also update your package.json and your yarn.lock


4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: State: When react webpage changes the contain, components maintain their own 

  Researched answer:
  Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child.
  Props
    -are immutable 
    -which lets React do fast reference checks
    -are used to pass data down from your view-controller 

  State
    -should be managed in your view-controller 
    -your top level component
    -is mutable
    -pass it down with props instead

5. How would you explain state to a friend who doesn't know code?

  Your answer: state is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this. state
