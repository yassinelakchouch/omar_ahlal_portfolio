const validateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.value.match(emailRegular)
    ? setEmailError(true)
    : setEmailError(false);
};

  
      const validateFullName = ({fullName, setFullNameError}) => {
    return fullName.value.length === 0
      ? setFullNameError(true)
      : setFullNameError(false);
  };
      const validateMessage = ({message, setMessageError}) => {
    return message.value.length === 0 
      ? setMessageError(true)
      : setMessageError(false);
  };


      export {validateEmail, validateFullName, validateMessage};