import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Index.jsx";
import Dashboard from "./pages/Admin/Dashboard/Dashboard.jsx";    

export default function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}