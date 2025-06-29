import { useState, useEffect } from "react";
import { session } from "../Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {


  const [data, setData] = useState(null);


  const navigate = useNavigate();

  const checkUserAvailiblity = async () => {
    return await session();
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await checkUserAvailiblity();

        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();

    if (!data) {
      console.log("/login");
    } else {
      navigate("/dashboard/profile");
    }
  }, []);
  return (
    <div className="bg-blue-300 p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-white mb-4">My Profile</h2>
      <p className="text-gray-800">Profile details will appear here.</p>
    </div>
  );
};

export default Profile;
