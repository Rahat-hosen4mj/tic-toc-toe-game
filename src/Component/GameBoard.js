import React, { useEffect, useState } from "react";
import SingleSqure from "./SingleSqure";


const initialState = ['','','','','','','','','']

const GameBoard = () => {
    const [gameState, setGameState] = useState(initialState);
    const [isXchange, setIsXChange] = useState(false);

    const handleClick = index =>{
        
        let strings = [...gameState];
       
        strings[index] = isXchange ? "x" : "0";
        setGameState(strings);
        setIsXChange(!isXchange)
    }

    useEffect( () => {
        const winner = checkWinner();
        if(winner){
           alert(`hey ${winner} has won the game`)
        }
    },[gameState])

    const checkWinner = () =>{
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
              return gameState[a];
            }
          }
          return null;
    }
  return (
    <div className="flex flex-col h-screen border-2 border-red-500 justify-center items-center bg-[#131A28] text-white">
      <h2 className="text-3xl font-medium text-white mb-6">React tic toc toe</h2>
      <div className="flex">
        <SingleSqure state={gameState[0]} onClick={() => handleClick(0)} className="border-r-4 border-b-4 border-indigo-500" />
        <SingleSqure state={gameState[1]} onClick={() => handleClick(1)} className="border-r-4 border-b-4 border-indigo-500"  />
        <SingleSqure state={gameState[2]} onClick={() => handleClick(2)} className="border-b-4 border-indigo-500" />
      </div>
      <div className="flex">
        <SingleSqure state={gameState[3]} onClick={() => handleClick(3)} className="border-r-4 border-b-4 border-indigo-500" />
        <SingleSqure state={gameState[4]} onClick={() => handleClick(4)} className="border-r-4 border-b-4 border-indigo-500" />
        <SingleSqure state={gameState[5]} onClick={() => handleClick(5)} className="border-b-4 border-indigo-500" />
      </div>
      <div className="flex">
        <SingleSqure state={gameState[6]} onClick={() => handleClick(6)} className="border-r-4 border-indigo-500" />
        <SingleSqure state={gameState[7]} onClick={() => handleClick(7)} className="border-r-4 border-indigo-500" />
        <SingleSqure state={gameState[8]} onClick={() => handleClick(8)} />
      </div>
      <button onClick={() => setGameState(initialState)} className="mt-10 border-2 py-2 px-4 rounded-lg bg-purple-400">Reset</button>
    </div>
  );
};

export default GameBoard;
