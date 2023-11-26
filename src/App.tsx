import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
