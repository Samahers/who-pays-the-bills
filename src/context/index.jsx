import { useState, createContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const MyContext = createContext();

const MyProvider = (props) => {
  const [stage, setStage] = useState(1);
  const [players, setPlayers] = useState([]);
  const [result, setResult] = useState("");

  const addPlayerHandler = (name) => {
    setPlayers((prevState) => [...prevState, name]);
  };

  //removing from list requires the index (the key)
  const removePlayerHandler = (idx) => {
    let newArray = [...players];
    newArray.splice(idx,1); // the 1 means remove only one player

    setPlayers(newArray);
  }

  const nextHandler = () => {

    if (players.length < 2){
      toast.error('تحتاج الى شخصين على الاقل...', {    

      })

    }
    else {
      setStage(2);
      //basically creates a suspension (?) after 2 sec
      setTimeout(()=>{
        generateloser();

      },1000)
    }
  }

  const generateloser = () =>{
    let result = players[Math.floor(Math.random()*players.length)];
    setResult(result);

  }

  const resetGameHandler = () => {
    setStage(1);
    setPlayers([]);
    setResult('');
  }

  

  return (
    <>
    <MyContext.Provider
      value={{
        // states
        stage: stage,
        players: players,
        result: result,
        //methods
        addPlayer:addPlayerHandler,
        removePlayer:removePlayerHandler,
        next:nextHandler,
        resetGame: resetGameHandler,
        getNewLoser:generateloser
      }}
    >
      {props.children}
    </MyContext.Provider>
    <ToastContainer
    position="top-right"
    autoClose="2000"
    />
    </>
  );
};

export { MyContext, MyProvider };
