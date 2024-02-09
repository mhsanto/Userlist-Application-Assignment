import { User } from "../../constants";
import { SiGooglestreetview } from "react-icons/si";
import { FaAddressCard, FaCity, FaRegBuilding } from "react-icons/fa";
import { SiMailgun } from "react-icons/si";

import { Link } from "react-router-dom";

type UserCardProps = {
  user: User;
};
const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row w-full  md:max-w-[500px]  shadow-sm border-[1px]  items-center border-blue-500 rounded-md gap-3 p-3 my-1 hover:shadow-md transition hover:shadow-lime-600 overflow-hidden flex-1">
      <img
        src={
          user.image ? user.image : "https://robohash.org/Edwina.png?set=set4"
        }
        alt={user.firstName}
        className="w-20 h-20 object-cover aspect-square"
      />
      <div className="flex  justify-between gap-3">
        <div className="flex flex-col ">
          <p className="text-xs">@{user.username ? user.username : user.firstName.toLowerCase()}</p>
          <Link
            to={`/user/${user.id}`}
            className="flex gap-2 font-semibold hover:underline transition"
          >
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </Link>
          <p className="text-sm underline flex items-center gap-1 line-clamp-1 ">
            <SiMailgun />
            {user.email}
          </p>

          <p className="text-xs whitespace-nowrap py-2 ">
            <span className="flex  items-center gap-1 line-clamp-1 ">
              <FaRegBuilding />
              {user.company.name}
            </span>
          </p>

          <div className=" flex gap-1.5 flex-wrap">
            <p className="text-xs w-fit bg-green-500/50 px-2 flex items-center gap-2 p-1 rounded-sm text-green-900 font-semibold whitespace-nowrap hover:bg-green-500/80 transition">
              <FaAddressCard className="text-green-900" />
              {user.address.address}
            </p>
            <p className="flex-grow-1 bg-blue-500/50 text-xs px-2  flex items-center gap-2  p-1 rounded-sm text-blue-900 font-semibold hover:bg-blue-500/80 transition">
              <SiGooglestreetview className="text-blue-900" />
              {user.address.state}
            </p>
            <p className=" bg-yellow-500/40 text-xs w-fit px-2 flex items-center gap-2  p-1 rounded-sm font-semibold text-yellow-900 hover:bg-yellow-500/80 transition">
              <FaCity className="text-yellow-900" />
              {user.address.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

//   /* <div className=" flex bg-green-300/70 items-center px-2 gap-2">
// <img
//   src="/assets/icons/company.svg"
//   alt="company"
//   className="w-4 h-4"
// />
// <p className=" text-sm w-fit ">{user.company.name}</p>
// </div>
