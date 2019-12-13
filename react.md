# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true/false)
- React will only render on the server using Node.js (true/false)
- React is a full stack framework for modern web applications (true/false)
- React is a flexible library that plays the role of V in an MVC framework (true/false)
- You should always update a component's state directly using this.state (true/false) false
- React is made up of encapsulated components that manage their own state (true/false)
- React components render HTML (true/false) true


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: Components that manage their own state are called smart components. 
  Components that do not have their own states are dumb components.

  Researched answer:
  Smart components includes-
  1. fetch, capture changes and pass down application data.
  2. They are responsible for calling libraries and functionality.
  3. Responsible for managing state and knowing when to re-render a component.
  Dumb components: 
  1. Almost all basic UI components should be considered dumb components. Examples include loaders, modals, buttons, inputs, etc.
  2. Dumb components accept props to allow them to be dynamic and reusable

Separating smart and dumb components 
 1. allows flexibility to make both small and large changes to the app without a great deal of tedious work.
 2. provides flexibility and avoid duplication.

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: "yarn add ..." will add all the packages that we need to run yarn,in the folder.

  Researched answer:
  When you want to use another package, you first need to add it to your dependencies. Run yarn add [package-name] to install it into project.
  This will also update your package.json and your yarn.lock


4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: State: When react webpage changes the contain, components maintain their own 

  Researched answer:



5. How would you explain state to a friend who doesn't know code?

  Your answer:
