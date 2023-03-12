import React from 'react'
import {useState} from "react"; 
import {NavLink} from "react-router-dom";
const Contact = () => {

const [name, setName] = useState("");
const [mail, setMail] = useState("");
const [msg, setMsg] = useState("");


function greet(e){

  alert("Your message has been sent thank you...");
  setName("");
  setMail("");
  setMsg("");
  e.preventDefault();
  
}


  return (
    <div className='contact-page'>
<h1>Contact me</h1>

<form className='form-div' onSubmit={greet}>
<label for="fullName">Full Name</label>
<input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>

<label for="Email">Email</label>
<input type="email" placeholder='Enter your email' value={mail} onChange={(e)=>setMail(e.target.value)}/>


<label for="Message">Message</label>
<input type="text" placeholder='Enter your message' value={msg} onChange={(e)=>setMsg(e.target.value)} />

<button type="submit">Submit</button>


</form>

<div className='social-media'>
<p className='contact-info'>If you want to contact me then mail on <br/>
Mail:<strong>borse030@gmail.com</strong><br/>
Mobile no:<strong>7720942411</strong><br/></p>
<NavLink to="https://www.linkedin.com/in/pankaj-borse-46259b250/"><button>Linkedin</button></NavLink>
<NavLink to="https://www.instagram.com/pankajborse04/"><button>Instagram</button></NavLink>
<NavLink to="https://www.facebook.com/profile.php?id=100005335185358"><button>Facebook</button></NavLink>







</div>


    </div>
  )
}

export default Contact
