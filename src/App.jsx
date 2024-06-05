import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const initialsValue = {username : "", email:"" , password:""}
  const [formValue, setFormValue] = useState(initialsValue)
  const [formError, setFormError] = useState({})
  const [formSubmit, setFormSubmit] = useState(false)
  


const handlechange =(e)=>{
 const {name , value} = e.target;
 setFormValue({...formValue ,[name]:value});
 console.log(formValue)
}
 const handleSubmit=(e)=>{
  e.preventDefault();
   setFormError(handleValidate(formValue));
   setFormSubmit(true)
 };

 useEffect(()=>{
  console.log(formError)
if(Object.keys(formError).length === 0 && formSubmit){
  console.log(formValue)
}
 },[formError]);


 const handleValidate = (values) =>{
const errors = {};
  const regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;



  if(!values.username){
    errors.username = "Please Enter Your Name"
  }
  if(!values.email){
    errors.email = "Please Enter Your  Email"
  }
  else if(!regex.test(values.email) ){
    errors.email ="Please Enter Your Valid Email"
  }
  if(!values.password ){
    errors.password ="Please Enter Your Password"
  }else if (values.password.length < 4) {
    errors.password = "Password is Longer then 4 words"
  }else if (values.password.length  >10) {
    errors.password = "Password is sorter then 10 words "
  }
  return errors;
  };
 

  return (
    <>
    {Object.keys(formError).length === 0  && formSubmit ?(
      <div className="output"><h1>Form Submited</h1></div>
    ) : ( 
    <pre>{JSON.stringify(formValue ,undefined,2)}</pre>
  )
    }
    
      <div className="container">
        
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="ui">
            <div className="field">
              <label htmlFor="">Username</label>
              <input type="text" name='username'
               placeholder='Enter Your Name' value={formValue.username}
                onChange={handlechange} />
                 <p>{formError.username}</p>
            </div>
           
            <div className="field">
              <label htmlFor="">Email</label>
              <input type="" name='email'
               placeholder='Enter Your Email' 
               value={formValue.email} 
               onChange={handlechange}/>
                <p>{formError.email}</p>
            </div>
           
            <div className="field">
              <label htmlFor="">Password</label>
              <input type="password" name='password'
               placeholder='Enter Your Password'
               value={formValue.password}
                onChange={handlechange}/>
                 <p>{formError.password}</p>
            </div>
            
            <button className='button' >Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
