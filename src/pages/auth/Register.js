import React, { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { auth } from "../../firebase";



const Register = () => {

    const [email,setEmail] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault()
         const config = {
           url: 'http://localhost:3000/register/complete',
           handleCodeInApp: true
         }

        //  await auth.sendSignInLinkToEmail(auth,email,config);
          
         toast.success(`Email is sent to ${email}. Click the link to complete your registration`);
      };

      

    const registerForm = ()=> <form onSubmit={handleSubmit}>
       <input type="email" className="form-control" value={email} autoFocus onChange={(e)=>setEmail(e.target.value)}/>
       <button type="submit" className="btn btn-dark">Register</button>
    </form>
  return (
    <>
      <div className="container p-5">
        <div className="row">
         <div className="col-md-6 offset-md-3">
         <h4>Register</h4>
  
         {registerForm()}
         </div>
           
        </div>
      </div>
    </>
  );
};

export default Register;
