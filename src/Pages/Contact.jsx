
import React, { useEffect, useState } from 'react'
import Button from '../Components/Button'
import Form from '../Components/Form'
import TextInput from '../Components/TextInput'
import TextArea from '../Components/TextArea'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {validateEmail,validateMessage,validateFullName} from '../validation'
import { SendEmail } from '../helper'
 const Contact = () => {

    /* States */
    const [fullName, setFullName] = useState(
      {name: 'name', label: 'Name', value: '', focus: false}
    );
    const [email, setEmail] = useState(
      {name: 'email', label: 'Email', value: '', focus: false}
    );
    const [message, setMessage] = useState(
        {name: 'message',label: 'Message',value: '',focus: false}
    );
    const [fullNameError, setFullNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [messageError, setMessageError] = useState(true);
    const [send, setSend] = useState();
    const [loading,setLoading] = useState(false)
    /* Click/Change Functions */
    const handleChange = (e) => {
      const name = (e?.target!==undefined)?(e.target.name):e.name;
      const val = (e?.target!==undefined)?(e.target.value):e.value;
      if(name === "name")
          setFullName({...fullName,value: val})
      else if(name === "email")
        setEmail({...email,value: val})
      else if(name === "message")
          setMessage({...message,value: val})
    }  
  
    const handleFocus = (e) => {
      const name = (e?.target!==undefined)?(e.target.name):e.name;
      if(name === "name")
          setFullName({...fullName,focus: true})
      else if(name === "email")
        setEmail({...email,focus: true})
      else if(name === "message")
          setMessage({...message,focus: true})
    }
  
        
    const handleBlur = (e) => {
      const name = (e?.target!==undefined)?(e.target.name):e.name;
      if(name === "name")
          setFullName({...fullName,focus: false})
      else if(name === "email")
        setEmail({...email,focus: false})
      else if(name === "message")
          setMessage({...message,focus: false})
    }

const handleSubmit = async (e)=>{
  e.preventDefault();
  setLoading(true)
  if (!fullNameError && !emailError && !messageError) {
    SendEmail(fullName, email, message).then(
      () => {
        setLoading(false); 
        toast("Your Message was sent successfully ",{type:'success'})
      }
    ).catch((err) => {
      toast(err,{type:'error'})
    });
  }else{
    setLoading(false)
    if(fullNameError){
      toast("Name field is empty ",{type:'error'})
    }
    if(emailError){      
    toast("Email form is not correct ",{type:'error'})
    }
    if(messageError){      
    toast("message field is empty ",{type:'error'})
    }
  }
}


useEffect(()=>{
  validateFullName({ fullName, setFullNameError });
  validateEmail({ email, setEmailError });
  validateMessage({ message, setMessageError });
},[fullName, email, message,send])


const otherProps = {onFocus:handleFocus.bind(),onBlur:handleBlur.bind(),onChange:handleChange.bind()}   
  return (
    <>
    <div className='max-w-5xl mx-auto my-10 text-white font-crimson text-center md:text-left '>
      <div className='mx-4'>
      <h1 className='text-3xl md:text-7xl leading-normal font-semibold'>leave me your message</h1>
      <p className='mt-6 text-xl md:text-3xl leading-tight font-medium'>To better discuss your project, fill in the required information and we will contact you!</p>
      <div className="mt-8 text-black">
      <Form onSubmit={handleSubmit} className="w-full flex flex-col items-end gap-3">
      <TextInput {...fullName} {...otherProps}  />      
      <TextInput  {...email} {...otherProps}  />      
      <TextArea {...message} {...otherProps}  />
      <div className='w-full'>
        <Button disabled={loading}>Send</Button>
        </div>
        </Form>
    </div>
    </div>
    </div>
    <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={false}
        progress={undefined}
        theme={"dark"}
      >
      </ToastContainer>
  </>
  )
}

export default Contact