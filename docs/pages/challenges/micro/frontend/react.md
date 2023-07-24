# React Challenge

In this React coding challenge, you are tasked with building a simplified chess game. The purpose of this challenge is
not to create a fully operational chess game but to demonstrate your understanding of React, to show your
problem-solving skills, your ability to plan and structure an application, and to write clean, readable, maintainable
code.

## Requirements

1. **Chess Board**: The game should consist of a chess board with 64 squares arranged in an 8x8 grid. Each square should
   be represented by an HTML element. It is not necessary for you to implement elaborate styling; a simple checkerboard
   pattern will suffice.

2. **Game Players**: The game should facilitate two players: white and black. A player should be able to select one of
   their own pieces and move it to a valid square on the board. For simplicity, a square occupied by an opponent's piece
   should be considered invalid for movement.

3. **Chess Pieces**: Only two types of chess pieces should be used in the game: knights and queens.

4. **Movement**: Once a player selects a piece, they should be presented with all valid squares that piece can move to.
   Traditional chess movement rules should apply — i.e., a queen can move horizontally, vertically, or diagonally, and a
   knight can move in an L-shape. After being presented with the valid squares, a player can then select one of those
   squares to move their piece to.

5. **Turns**: The game should implement turns, with players alternating back and forth. After a player moves a piece,
   control should automatically switch to the other player.

6. **No Animations or Drap-and-Drop**: There is no need to implement animations or drag-and-drop functionality. Simple
   clicking actions to select a piece and its destination square are acceptable.

7. **Initial Set-Up**: You are not required to have a random initial setup for the pieces. The board can be set up with
   the black pieces on the second row from the top and white pieces on the second row from the bottom. Queens should be
   on the left and knights should be on the right.

## Bonus (Optional):

If you are up for an extra challenge:

1. **Check on Queen**: Implement a simple check logic in which the game can detect if a queen is under threat from a
   knight.

2. **End Game**: Implement an end game scenario. The game should end if a queen is removed from the board.

3. **Board Flip**: Implement a feature that allows players to flip the board at will. This could be helpful for
   providing different perspectives and gauging potential moves better. Flipping the board should accurately reflect the
   current state of the game from the opposite perspective.

While the bonus challenge does not contribute directly to your score, it will underscore your command of the React
ecosystem.

## Definition of Done

For completing this challenge, please ensure that you meet the following requirements:

- Your React application fulfills all described functional requirements.
- A `README.md` file explains how to install any necessary dependencies and how to run your application.

## Evaluation Criteria 🪄

We will evaluate your work based on the following:

- **Functional fit**: How well the functional requirements are fulfilled.
- **Responsive design**: How well your page adapts to different screen sizes.
- **Code quality**: we're looking for clean, readable, and well-structured code.
- **Documentation quality**: We're looking for a well-structured `README.md` file that contains all necessary
  information as well as well-documented code.

Good luck with your coding — and remember to enjoy the process! 🚀
