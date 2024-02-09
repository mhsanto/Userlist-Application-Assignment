import { useEffect, useState } from "react";
import { User } from "../../constants";
import UserCard from "./user-card";
import SearchBar from "./search-bar";
import SortUsers from "./sort-users";
import AddUserForm from "./user-form";

interface UserData {
  users: User[];
}

const Users = () => {
  const [users, setUsers] = useState<User[] | undefined>([]);

  const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>([]);

  const [sortOption, setSortOption] = useState<string>(""); // State for sorting option

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data: UserData = await response.json();
      setUsers(data.users);
      setFilteredUsers(data.users);
    }
    fetchUsers();
  }, []);

  const handleChange = (value: string) => {
    if (users) {
      const trimmedValue = value.trim();
      const filtered =
        trimmedValue === ""
          ? users
          : users.filter((user) => {
              const fullName = `${user.firstName} ${user.lastName}`;
              return fullName
                .toLowerCase()
                .includes(trimmedValue.toLowerCase());
            });
      setFilteredUsers(filtered);
    }
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    if (filteredUsers) {
      const sortedUsers = [...filteredUsers];
      if (option === "name") {
        sortedUsers.sort((a, b) =>
          (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName)
        );
      } else if (option === "email") {
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
      } else if (option === "company") {
        sortedUsers.sort((a, b) =>
          a.company.name.localeCompare(b.company.name)
        );
      }
      setFilteredUsers(sortedUsers);
    }
  };
  const handleAddUser = (newUser: User) => {
    // Add the new user to the beginning of the existing list
    setUsers((prevUsers) => [newUser, ...prevUsers!]);
    setFilteredUsers((prevFilteredUsers) => [newUser, ...prevFilteredUsers!]);
  };
  return (
    <>
      <div className="flex gap-2 items-center w-full justify-center">
        <SearchBar onHandleChange={handleChange} />
        <SortUsers
          sortOption={sortOption}
          onHandleSortChange={handleSortChange}
        />
      </div>
      <AddUserForm onAddUser={handleAddUser} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4  ">
        {filteredUsers?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
