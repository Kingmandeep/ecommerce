import React, { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { auth } from "../../firebase";




const RegisterComplete = () => {
    // const auth=firebase.auth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   
    useEffect(()=>{
        // setEmail(window.localStorage.getItem('emailForRegistration'));
        // console.log(window.location.href);
        // console.log(window.localStorage.getItem("emailForRegistration"));
    },[])
//     // props.history
    const handleSubmit = async(e)=>{
      // e.preventDefault();
      // try{
      //     const result = await firebase.auth.signInWithEmailLink(email,window.location.href);
      //   //   console.log("RESULT",result);
      // }catch(err){
      //     console.log(err);
      // }

      };

      

    const completeRegistrationForm = ()=> <form onSubmit={handleSubmit}>
       <input type="email" className="form-control" placeholder="Enter Email" value={email} disabled onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
       <input type="password" className="form-control" placeholder="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
       <br/>
       <br/>
       <br/>
       <button type="submit" className="btn btn-dark">Complete Registration</button>
    </form>
  return (
    <>
      <div className="container p-5">
        <div className="row">
         <div className="col-md-6 offset-md-3">
         <h4>Register Complete</h4>
         
         {completeRegistrationForm()}
         </div>
           
        </div>
      </div>
    </>
  );
};

export default RegisterComplete;
