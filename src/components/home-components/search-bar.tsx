import { BiSearch } from "react-icons/bi";

const SearchBar = ({ onHandleChange }: { onHandleChange: (value:string) => void }) => {
  return (
    <div className="bg-gray-50  flex items-center gap-2 rounded-md p-2 my-2 max-w-[500px] w-full ring-1 ">
      <BiSearch />
      <input
        type="search"
        placeholder="Search User"
        className="w-full outline-none bg-transparent"
        onChange={(e) => onHandleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
