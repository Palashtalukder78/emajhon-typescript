import { Outlet } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default App;
