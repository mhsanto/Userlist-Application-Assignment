import { User } from "../../constants";

type UserCardProps = {
  user: User;
};
const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="flex max-w-[500px] w-full shadow-sm border-[1px] border-blue-500 rounded-md gap-2 p-3 my-2">
      <img
        src={user.image}
        alt={user.firstName}
        className="w-10 h-10 object-cover"
      />
      <div className="flex w-full justify-between gap-3">
        <div className="flex flex-col ">
          <p className="text-xs">@{user.username}</p>
          <p className="flex gap-2 font-semibold">
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </p>

          <div className=" flex gap-1.5">
            <p className="text-xs w-fit bg-green-500 px-2">
              {user.address.address}
            </p>
            <p className="bg-blue-500 text-xs px-2">{user.address.state}</p>
            <p className=" bg-yellow-500 text-xs w-fit px-2">
              {user.address.city}
            </p>
          </div>
        </div>
        <div className="">Age:{user.age}</div>
      </div>
    </div>
  );
};

export default UserCard;
{
  /* <div className=" flex bg-green-300/70 items-center px-2 gap-2">
<img
  src="/assets/icons/company.svg"
  alt="company"
  className="w-4 h-4"
/>
<p className=" text-sm w-fit ">{user.company.name}</p>
</div> */
}
