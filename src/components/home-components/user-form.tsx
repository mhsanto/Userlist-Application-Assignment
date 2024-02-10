/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import InputField from "./input-field";

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    address: string;
  };
}

interface AddUserFormProps {
  onAddUser: (newUser: UserProps) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState<UserProps>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    company: {
      name: "",
    },
    address: {
      address: "",
    },
  });
  const updateNewUser = (name: string, value: string) => {
    setNewUser((prevUser) => {
      const names = name.split(".");
      if (names.length === 2) {
        const [parent, child] = names;

        if (parent === "company" && child === "name") {
          return {
            ...prevUser,
            company: { ...prevUser.company, name: value },
          };
        } else if (parent === "address" && child === "address") {
          return {
            ...prevUser,
            address: { ...prevUser.address, address: value },
          };
        } else {
          return prevUser;
        }
      } else {
        return { ...prevUser, [name]: value };
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateNewUser(name, value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    onAddUser(newUser);

        setNewUser({
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      company: {
        name: "",
      },
      address: {
        address: "",
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 rounded-md shadow my-3 ring-1 max-w-md w-full items-center gap-2"
    >
      <div className="flex w-full">
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={newUser.firstName}
          onChange={handleInputChange}
          placeholder="John"
        />

        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={handleInputChange}
          placeholder="Cena"
        />
      </div>

      <InputField
        label="Email"
        type="text"
        name="email"
        value={newUser.email}
        onChange={handleInputChange}
        placeholder="johncena@ucantsee.me"
      />

      <InputField
        label="Company"
        type="text"
        name="company.name"
        value={newUser.company.name}
        onChange={handleInputChange}
        placeholder="Word Wrestling Entertainment"
      />

      <InputField
        label="Address"
        type="text"
        name="address.address"
        value={newUser.address.address}
        onChange={handleInputChange}
        placeholder="123, You Can't See Me Street, USA"
      />
      <button
        type="submit"
        className="text-center px-5 bg-orange-400/70 font-medium rounded-md p-2 text-orange-900 my-4 w-full"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
