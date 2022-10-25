
import axios from "axios";
export const SendEmail = async (fullName,email,message) => {
    try {
      const datas = {fullName, email, message };
      let res = await axios.post(`https://omar-ahlal-backend.herokuapp.com/send`, datas);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

