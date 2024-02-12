import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <Outlet />
    </div>
  );
}

export default HomePage;