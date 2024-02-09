import { useEffect, useState } from "react";
import { User } from "../../constants";
import UserCard from "./user-card";

interface UserData {
  users: User[];
}

const Users = () => {
  const [users, setUsers] = useState<User[] | undefined>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data: UserData = await response.json();
      setUsers(data.users);
    }
    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4 ">
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
