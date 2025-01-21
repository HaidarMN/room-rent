import { useNavigate } from "react-router";

// Components
import Button from "./components/global/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-4xl font-bold">Page Not Found</h2>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default NotFound;
