import { BiSearch } from "react-icons/bi";

const SearchBar = ({ onHandleChange }: { onHandleChange: (value:string) => void }) => {
  return (
    <div className="bg-gray-200  flex items-center gap-2 rounded-md p-2 my-2 max-w-[500px] w-full ring-1 ">
      <BiSearch />
      <input
        type="search"
        placeholder="Search User"
        className="bg-gray-200 w-full outline-none"
        onChange={(e) => onHandleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
