// import { useNavigate } from "react-router-dom"

import axios from "axios";

 export  const session = async () => {
  
  const getUser = await axios.get("/api/auth/user/get");

  return getUser;

 };

