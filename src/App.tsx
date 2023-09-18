import { Outlet } from "react-router-dom"
import Header from "./components/Common/Header/Header"
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./providers/authProvider";

function App() {

  const { loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-infinity loading-lg w-16 h-16"></span>
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Toaster position="top-center" reverseOrder={true} />
        </>
      )}
    </>
  );
}

export default App
