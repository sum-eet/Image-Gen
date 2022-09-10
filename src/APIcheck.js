import * as api from './apiIndex.js';
import React , { useState , useEffect } from 'react' ;
import './App.css';
 import axios from 'axios';
// import { Card } from ' ../Components/Card/card ' ;
const TodoPage = () => {

const [todo,setTodo] = useState ([])
  
// useEffect(() => {
//     fetch('/result').then(response => {
//     //    if(response.ok){
//             console.log("Check")
//             console.log(response)
//             return response.json()
        
//     }).then(data => console.log(data));
//     })
const dosome = () =>{
        axios.get('/result',
        {
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json'

        })
        .then(function (res) {
            console.log(res)
        })


}
useEffect(()=>{
  dosome()
})
     
// Action Creators
// export const TodoPage = () => async(dispatch)  => {
    

        



return (
    <div>
    <h1 className="gradient__text">Fucker</h1>
    </div>
)
};


export default TodoPage;