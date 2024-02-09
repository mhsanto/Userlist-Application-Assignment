type SortedUsersProps = {
  onHandleSortChange: (values: string) => void;
  sortOption: string;
};
const SortUsers = ({ onHandleSortChange, sortOption }: SortedUsersProps) => {
  return (
    <div className="bg-gray-50  flex items-center gap-2 rounded-md p-2 my-2  ring-1">
      <label htmlFor="sortSelect" className="w-full">Sort by:</label>
      <select
        id="sortSelect"
        onChange={(e) => onHandleSortChange(e.target.value)}
        value={sortOption}
        className="outline-none bg-gray-50"
      >
        <option value="">Select</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="company">Company</option>
      </select>
    </div>
  );
};

export default SortUsers;
