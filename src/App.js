import React, { useState } from 'react'
import './App.css'
function App() {
  const [fullName,setFullName] = useState("")
  const [mail,setMail]=useState("")
  const [password,setPassword] = useState("")

  // const changeFullname=(e)=>{
  //   setFullName(e.target.value)
  //   console.log(fullName)
  // }
  // const changeEmail=(e)=>{
  //   setMail(e.target.value)
  //   console.log(mail)
  // }
  // const changePassword=(e)=>{
  //   setPassword(e.target.value)
  //   console.log(password)
  // }
  const changeSubmit =(e) =>{
    e.preventDefault();
  }
  const changeValues = (e,name) =>{
           if(name==='fullName'){
            setFullName(e.target.value)
           }else if(name==='mail'){
            setMail(e.target.value)
           }else if(name==='password'){
            setPassword(e.target.value)
           }
  }
  return (
    <form onSubmit={changeSubmit}>
    <center>
    <h1>Login Form</h1>
    <div className='abc'>
      <input type='text' name='fullName' id='fullName' value={fullName}
      placeholder='Enter Your Name' onChange={(e)=>changeValues(e,'fullName')}/>
    <div  className='abc'>
      <input type='mail' name='mail' id='mail' value={mail}
      placeholder='Enter Your Email' onChange={(e)=>changeValues(e,'mail')}/>
    <div  className='abc'>
      <input type='password' name='password' id='password' value={password}
      placeholder='Enter Your Password' onChange={(e)=>changeValues(e,'password')}/>
    </div>
    </div>
    </div>
    <button  className='abc' type="submit">Submit</button>
    </center>
   
    </form>
  )
}

export default App
