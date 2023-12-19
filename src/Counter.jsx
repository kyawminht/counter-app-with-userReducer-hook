import React, { useReducer } from 'react'

const Counter = () => {
    const reducer=(state,action)=>{
        switch (action.type){
            case "increase":{
                return state + action.payload;
            }

            default:
                return state;
        }
    }

    const initialState=0;
    const [count,dispatch]=useReducer(reducer,initialState);
   
  return (
    <div>
      <h3>Counter app with use reducer</h3>
        <p>Count {count}</p>
      <button className=' bg-rose-400 p-3' onClick={()=>{dispatch({type:"increase",payload: 5})}}>increase 5</button>

      <button className=' bg-rose-400 p-3' onClick={()=>{dispatch({type:"increase",payload: 1})}}>increase 1</button>
    </div>
  )
}

export default Counter
