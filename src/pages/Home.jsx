import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Travel Book</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
};

export default Home;
