
import React from "react";
import './../styles/App.css';
import {Provider,useSelector,useDispatch} from "react-redux";
import actionType from "../store/Action"

const App = () => {
  const count=useSelector(state=>state.count);
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch({type:actionType.INCREMENT});
  }
  const decrement=()=>{
    dispatch({type:actionType.DECREMENT});
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <Provider store={store}>
            <button onClick={decrement}>-</button>
            <b>{count}</b>
            <button onClick={increment}>+</button>
        </Provider>
    </div>
  )
}

export default App
