
import React, { useState } from 'react'
import Button from '../Components/Button';
import Form from '../Components/Form';
import TextInput from '../Components/TextInput';
import TextArea from '../Components/TextArea'
const Contact = () => {
  /* States */
const [nom, setNom] = useState(
  {name: 'name', label: 'Name', value: '', focus: false}
);
const [email, setEmail] = useState(
  {name: 'email', label: 'Email', value: '', focus: false}
);
const [message, setMessage] = useState(
    {name: 'message',label: 'Message',value: '',focus: false}
);
const [loading, setLoading] = useState(false);

/* Click/Change Functions */

const handleFocus = (e) => {
  const name = (e?.target!==undefined)?(e.target.name):e.name;
  if(name === "name")
      setNom({...nom,focus: true})
  else if(name === "email")
    setEmail({...email,focus: true})
  else if(name === "message")
      setMessage({...message,focus: true})
}

const handleChange = (e) => {
  const name = (e?.target!==undefined)?(e.target.name):e.name;
  const val = (e?.target!==undefined)?(e.target.value):e.value;
  if(name === "name")
      setNom({...nom,value: val})
  else if(name === "email")
    setEmail({...email,value: val})
  else if(name === "message")
      setMessage({...message,value: val})
}  
    
const handleBlur = (e) => {
  const name = (e?.target!==undefined)?(e.target.name):e.name;
  if(name === "name")
      setNom({...nom,focus: false})
  else if(name === "email")
    setEmail({...email,focus: false})
  else if(name === "message")
      setMessage({...message,focus: false})
}

const handleSubmit = async (e)=>{

  setLoading(false)
}

const otherProps = {onFocus:handleFocus.bind(),onBlur:handleBlur.bind(),onChange:handleChange.bind()}   
  return (
    <div className='max-w-5xl mx-auto text-white font-crimson'>
      <h1 className='text-3xl md:text-7xl leading-normal font-semibold'>leave me your message</h1>
      <p className='mt-6 text-xl md:text-3xl leading-tight font-medium text-justify'>To better discuss your project, fill in the required information and we will contact you!</p>
      <div className="mt-8 text-black">
      <Form onSubmit={handleSubmit} className="w-full flex flex-col items-end gap-3">
      <TextInput {...nom} {...otherProps} required />      
      <TextInput  {...email} {...otherProps} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="exemple@mail.com"/>      
      <TextArea {...message} {...otherProps} required />
      <div className='w-full'>
        <Button disabled={loading}>Send</Button>
        </div>
        </Form>
    </div>
    </div>
  )
}

export default Contact