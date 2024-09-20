import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount,subtractCount } from './redux-toolkit/counter';
import { fetchAllData,deleteUser} from './redux-toolkit/apis';
import MicRecorder from './MicRecorder';
// import MicRecorder from "./MicRecorder.js"



function App() {
  const dispatch=useDispatch();

  const counter=useSelector(state=>state.counter)
  const data=useSelector(state=>state.api)
  

  console.log("counter",counter)
  console.log("data",data);


  const handleCount=(userId)=>{
dispatch(addCount({count:1}))
dispatch(deleteUser(userId));
  }
  const handleDecCount=()=>{

  }

  // useEffect(()=>{
  //   dispatch(fetchAllData())
  // },[dispatch])
  return (
    <div className="App">
      <p>welcome to my app</p>
       {counter?.count??counter}
    <button onClick={()=>handleCount(1)}>inc count</button>
    <button onClick={handleDecCount}>dec count</button>

    <div>
      <MicRecorder/>
    </div>

    </div>
  );
}

export default App;
