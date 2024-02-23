import React, { useState } from "react";

function Contact() {


    const[fullname,setFullName]=useState();
    const[email,setEmail]=useState();
    const[city,setCity]=useState();
    const[message,setMessage]=useState();


    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log('Details',{
            fullname,
            email,
            city,
            message
        });
    }
  return (
    <div className="container">
      <form className="row g-3 py-5 w-50 "onSubmit={handlesubmit}>
        <div className="col-md-12">
          <label htmlFor="FullName" className="form-label">
            Full Name
          </label>
          <input type="text" onChange={(e)=>setFullName(e.target.value)} className="form-control" id="FullName" />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" />
        </div>

        <div className="col-md-12">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" onChange={(e)=>setCity(e.target.value)} className="form-control" id="city" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            message
          </label>
          <textarea onChange={(e)=>setMessage(e.target.value)}
            className="form-control"
            id="message"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
