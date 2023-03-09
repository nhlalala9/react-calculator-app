import { useReducer } from "react";
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"
import "./styles.css"

export const ACTIONS ={
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

function reducer(state, {type,payload}){
  
}

function App() {
  

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
