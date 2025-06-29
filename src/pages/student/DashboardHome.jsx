import { useEffect } from "react";
import { session } from "../Auth";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  

  
    const navigate = useNavigate();
  
  useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await session();
  
          console.log(response)
  
          if (response.statusText.toLowerCase() !== "ok") {
            navigate("/login");
          }
        } catch (err) {
          console.error(err);
        }
      };
      fetchUser();
    }, []);

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
