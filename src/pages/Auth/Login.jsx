import {  useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import SocialButton from "../../components/SocialButton";
import axios from "axios";
import Loader from "../../components/Loader";
import { useUserContext } from "../../context/index";
// import { session } from "./index"


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const { setActiveUserData } = useUserContext();
//  const {id} = activeUserData
  
  const navigate = useNavigate();

  // useEffect(()=>{

  //   axios.get()
  // },[])


//   const session = async (id, navigate) => {
//     // setLoader(true)
//     console.log(id)

//     const data = await axios.get("/api/auth/session", {
//       params: {
//         id: id,
//       }
//     });

//     if(data.data.session){
//       // navigate('/dashboard')
//       setLoader(false)
//     } else {
//       navigate("/login");
//       setLoader(false)
//     }

//   };

// const checkSession = async () =>{
//   await session(id, navigate, setLoader)
// }

//   useEffect(()=>{
//     checkSession()
//   },[])



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const data = await axios.post("/api/auth/login", form);
      if (data) {
        setActiveUserData(data.data.user)
        console.log(data.data.user);
        navigate("/dashboard")
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    }
    
    
    setForm({ email: "", password: "" });
  };

  return (
    <>
      
        <section className="min-h-full flex flex-col md:flex-row rounded-xl border-black/15 border-1 overflow-hidden">
          {/* Left image section */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1529675641475-78780f1fd4b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your preferred image path
              alt="Login"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right form section */}
          <div className="md:w-1/2 w-full flex items-center justify-center p-8">
            <div className="max-w-md w-full space-y-6">
              <h1 className="text-3xl font-semibold text-center text-gray-800">
                Welcome Back
              </h1>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                <Button
                  type="submit"
                  className="w-full flex justify-center items-center gap-3"
                >
                  {loader ? <Loader /> : ""}
                  Login
                </Button>
                <p className="text-sm text-center text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </form>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <hr className="flex-grow border-gray-300" />
                  <span className="text-sm text-gray-500">
                    or continue with
                  </span>
                  <hr className="flex-grow border-gray-300" />
                </div>
                <div className="flex space-x-2 ">
                  <SocialButton
                    provider="google"
                    onClick={() => alert("Google Login")}
                  />
                  <SocialButton
                    provider="github"
                    onClick={() => alert("GitHub Login")}
                  />
                  <SocialButton
                    provider="linkedin"
                    onClick={() => alert("LinkedIn Login")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Login;
