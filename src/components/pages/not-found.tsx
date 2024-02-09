import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>404</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
