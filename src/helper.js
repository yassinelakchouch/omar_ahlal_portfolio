
import axios from "axios";
export const SendEmail = async (fullName,email,message) => {
    try {
      const datas = {fullName, email, message };
      let res = await axios.post(`http://localhost:8000/send`, datas);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

