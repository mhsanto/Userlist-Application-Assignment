import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { User as UserProps } from "../../constants";
import UserCard from "../home-components/user-card";
import Users from "../home-components/users";

const User = () => {
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
    <div className="flex w-full flex-col bg-gradient-to-l items-center relative max-w-[1400px] mx-auto py-7">
      <div className="flex flex-col">
        <div className=" top-52 min-w-[400px]">
          {user ? <UserCard user={user} /> : <div>No User Found </div>}
        </div>
        <Link
          to="/"
          className="text-center top-0 bg-orange-400/70 font-medium rounded-md p-2 text-orange-950 my-4"
        >
          Go Home
        </Link>
      </div>
      <div className="">
        <p className="text-2xl font-semibold text-white text-center">
          Other Users
        </p>
        <Users />
      </div>
    </div>
  );
};

export default User;
