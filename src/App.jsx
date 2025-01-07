import Header from "./components/header/Page.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Page.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
