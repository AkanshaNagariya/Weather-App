import React from 'react'
import Restaurant from './component/Basics/Restaurant'
import UseState from './component/Hooks/useState'
import UseEffect from './component/Hooks/useEffect'
import UseReducer from './component/Hooks/useReducer'
import Todo from './component/todoreact/todo'
import Temp from './component/Weather/temp'

  const App = () => { // react functional component
  return ( // this must return something ,   <> </> shortcut for react fragment
    <>  
    <div>
      <h1 className='Myclass'>Welcome to React Channel {2 + 7}</h1> {/* in html wwe use class to apply css , in jsx use myClass*/}
    <MyName/>  {/* we created MyNmae functional component and called it here like a tag*/}
    </div>
    </> 
     
  // in jsx onclick or others inbuilt are camel case i.e onClick , 2nd word letter capital 
  // in jsx if we use any element ex img , we must close that element <img> </img> 
  )
} 

function App2 () {
  return <h1> Hello World </h1>
}

// how react sees the above 2 function  , above 2 are easy ways to write
const App3 = () => {
  return React.createElement("h1", {}, "Hello World");
};

const MyName = () =>{
  return <h1> Akansha Nagariya </h1>
}

const res = () =>{
  return (
    <Restaurant/>
  )
}
const AppState  = () =>{
  return <UseState/>
}
const AppState2  = () =>{
  return <UseEffect/>
}
const AppState3  = () =>{
  return <UseReducer/>
}
 //export default res;

// export default AppState;

const AppStatetodo = () => {
  return (
    <>
  <Todo/>
  </>
  );
};

const AppWeather = () => {
  return (
       <>
       <Temp/>
       </>
  );
};
// export default AppState3; 
// export default AppStatetodo;

 export default AppWeather;



