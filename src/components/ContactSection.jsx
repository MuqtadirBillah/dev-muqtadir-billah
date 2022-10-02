import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "emailjs-com";

function ContactSection(){

    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [phone, setPhone] = useState('');
    var [subject, setSubject] = useState('');
    var [message, setMessage] = useState('');
    var [warning, setWarning] = useState('');

    function sendMessage(){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name==="" || email==="" || message===""){
            setWarning("Please fill all the fields");
        }
        else{
            if(re.test(String(email).toLowerCase())){
                // setStatus("All set");
                // const templateParams = {
                //     message: message,
                //     from_name: "Musab Abbasi",
                //     user_Email: "abbasimusab2000@gmail.com",
                //     to_name: "Musab"
                // };
                const templateParams = {
                    message: message,
                    from_name: name,
                    user_Email: email,
                    to_name: "Muqtadir Billah"
                };
                emailjs.send('service_5o6bmkl','template_l912e9o', templateParams, 'tz-PtuCmxR3cxk0iW')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    if(response.status=="200"){
                        console.log("Success");
                        setEmail("");
                        setName("");
                        setMessage("");
                        // setStatus("Message Sent!")
                        toast(`Message sent!`);
                    }
                },
                (err) => {
                    console.log('FAILED...', err);
                    // setStatus("Something went wrong!");
                    toast(`Something went wrong!`);
                });
                // setStatus("Message sent!");
            }
            else{
                setWarning("Invalid Email address");
            }
        }
    }

    return(
        <div className="contactSection">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="container">
                <div className="headings">
                    <h3 className="mainSectionHeading">Contact Us</h3>
                    <h2 className="subSectionHeading">Send us a Message</h2>
                </div>
                <div className="row form">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h5>Name</h5>
                        <input type="text" placeholder="Name" value={name} onChange={(e)=>{setWarning(''); setName(e.target.value)}} name="" id="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h5>Email Address</h5>
                        <input type="text" placeholder="Email Address" value={email} onChange={(e)=>{setWarning(''); setEmail(e.target.value)}} name="" id="" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h5>Message</h5>
                        <textarea name="" placeholder="Message ..." value={message} id="" onChange={(e)=>{setWarning(''); setMessage(e.target.value)}} cols="30" rows="10"></textarea>  
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="warning">{warning}</p>
                        <button className="sendBut" onClick={()=>{sendMessage()}}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;