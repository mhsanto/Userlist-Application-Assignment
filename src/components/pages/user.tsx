import { useEffect, useState } from "react";
import {  useNavigate,  useParams } from "react-router-dom";
import { User as UserProps } from "../../constants";
import UserCard from "../home-components/user-card";
import LoadingPage from "../home-components/loading";
function User() {
  const navigation = useNavigate()
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<UserProps | undefined>();

  useEffect(() => {
    const getUserById = async () => {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };
    getUserById();
  }, [userId]);

  return (
    <div className="flex h-screen justify-center w-full flex-col  items-center relative py-7 bg-gradient-to-tl from-lime-200 to-lime-50 px-4">
      <div className="flex flex-col ">
        {user ? <UserCard user={user} /> : <LoadingPage />}

        <button
          onClick={()=>navigation(-1)}
          className="text-center top-0 bg-orange-400/70 font-medium rounded-md p-2 text-orange-950 my-4"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
export default User;
