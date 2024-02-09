import { useEffect, useState } from "react";
import { User } from "../../constants";
import UserCard from "./user-card";
import SearchBar from "./search-bar";

interface UserData {
  users: User[];
}

const Users = () => {
  const [users, setUsers] = useState<User[] | undefined>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data: UserData = await response.json();
      setUsers(data.users);
      setFilteredUsers(data.users); // 
    }
    fetchUsers();
  }, []);

  const handleChange = (value: string) => {
    if (users) {
      const trimmedValue = value.trim();
      const filtered = trimmedValue === "" ? users : users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(trimmedValue.toLowerCase());
      });
      setFilteredUsers(filtered);
    }
  };

  return (
    <>
      <SearchBar onHandleChange={handleChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4 ">
        {filteredUsers?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
