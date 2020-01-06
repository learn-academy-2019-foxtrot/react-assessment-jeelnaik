// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React , { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Calling the component Board here, returning the Board class: */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) defining states, 
    //  1. gameBoard: array of length 9 with all the values null. [null,null,null,null,null,null,null,null,null]
    //  2. currentPlayer: keeps track of the current player who is playing the game
    //  3. winner: keeps track of the player who is winning.
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Here: destructuring the state value.
    const { gameBoard, currentPlayer, winner } = this.state
    // 4) Here: when player clicks the box, if the winner is not declared and box is not already clicked,
    //          set the states with the updated index value and  switch the player.
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
      })
    }
    if(winner === null){
      // 5) Here: check the winning conditions, it winner is not already declared.
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: check the winning conditions by mapping through the winning condiditons and checking the          gameboards, if is is met set the winner state to current player.
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: structuring the game board, by structuring the squares one by one. Passing the index and value.
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          /* 8) Here: passing the gameplay function, so that it can be called when the box is clicked*/
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here: displaying the current player on board */}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here:  displaying the winner */}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here:display the squares. */}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: call the gameplay function when the box is clicked
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here:  displaying the value on the square board. */}
        { this.props.value }
      </div>
    )
  }
}

export default App
