// import { useUserContext } from "../../context/UserContext";
// import { useState, useEffect } from "react";
// import { session } from "../Auth";
// import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  // const [data, setData] = useState(null);

  
  //   const navigate = useNavigate();
  
  //   const checkUserAvailiblity = async () => {
  //     return await session();
  //   };
  
  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       try {
  //         const response = await checkUserAvailiblity();
  
  //         setData(response);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchUser();
  
  //     if (!data) {
  //       navigate("/login");
  //     } else {
  //       navigate("/dashboard");
  //     }
  //   }, []);

  return (
    <div className="bg-blue-300 p-6 rounded shadow">
      <h1 className="text-2xl font-semibold text-white mb-4">
        Welcome to your Dashboard!
      </h1>
      <p className="text-gray-800">
        You can apply for courses, track your application status and download
        your admin card.
      </p>
    </div>
  );
};

export default DashboardHome;
