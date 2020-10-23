import React, { useState } from "react";
import Footer from "./Footer";


const Contact = () => {
    const [data, setData] = useState({
        fname:'',
        email:'',
        message:'',
    });

    const inputEvent = (event) =>{
       const {name, value}=event.target;

       setData((preVal)=>{
           return {
               ...preVal,
               [name]: value,
           }
       })


    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`Hi! ${data.fname}, your email from '${data.email}' with message '${data.message}' has been sent sucessfully.`)

    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Me</h1>

            </div>
            <div className="container contact">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Your Name</label>
                            <input type="text" name="fname" value={data.fname} onChange={inputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Firstname Lastname" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" name="email" value={data.email} onChange={inputEvent} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                            <textarea name="message" value={data.message} onChange={inputEvent}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-info col-12" type="submit">Send</button>
                        </div>
                    </form>
                    </div>

                </div>

            </div>
            <Footer/>
        </>
    )

}
export default Contact;
