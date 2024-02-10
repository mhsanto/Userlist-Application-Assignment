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
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data: UserData = await response.json();
      setUsers(data.users);
      setFilteredUsers(data.users);
    }
    fetchUsers();
  }, []);

  const filterUsers = (value: string) => {
    const trimmedValue = value.trim();
    return trimmedValue === ""
      ? users
      : users?.filter((user) => {
          const fullName = `${user.firstName} ${user.lastName}`;
          return fullName.toLowerCase().includes(trimmedValue.toLowerCase());
        }) ?? [];
  };

  const sortUsers = (option: string, userList: User[]) => {
    const sortedUsers = [...userList];
    if (option === "name") {
      sortedUsers.sort((a, b) =>
        (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName)
      );
    } else if (option === "email") {
      sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
    } else if (option === "company") {
      sortedUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
    }
    return sortedUsers;
  };

  const handleChange = (value: string) => {
    setFilteredUsers(filterUsers(value));
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    if (users) {
      setFilteredUsers((prevFilteredUsers) =>
        sortUsers(option, prevFilteredUsers!)
      );
    }
  };

  const handleAddUser = (newUser: User) => {
    setUsers((prevUsers) => [newUser, ...(prevUsers ?? [])]);
    if (sortOption !== "") {
      setFilteredUsers((prevFilteredUsers) =>
        sortUsers(sortOption, [newUser, ...(prevFilteredUsers ?? [])])
      );
    } else {
      setFilteredUsers((prevFilteredUsers) => [newUser, ...(prevFilteredUsers ?? [])]);
    }
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
