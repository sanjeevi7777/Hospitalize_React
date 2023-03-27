import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function LoginDoc (){
  const [listOfUsers,setlistOfUsers]=useState([]);
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  let navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:8080/doctor')
    .then(response=>{
      console.log(response.data);
      setlistOfUsers(response.data);
    })
  },[])
  const validateUser=(event)=>{
    let x = 0,j=0;
    for(let i = 0; i < listOfUsers.length; i++) {
        if(listOfUsers[i].userName === username && listOfUsers[i].password === password) {
            j=i;
            x=1;   
            break;
        }
    }
    if(x === 0) {
        // alert("Invalid credentials")
        navigate('/doctor/home')
        
      }
      else{
        alert("Login successful")
    }
  }
    return (
      <form>
        <h3>Docter Sign In</h3>
        
        <div className="mb-3">
          <label>User Name</label>
          <input
            type="email"
            className="form-control"
            placeholder="User Name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={validateUser}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }