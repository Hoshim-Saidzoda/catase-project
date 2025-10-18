import Navbar from "./components/Navbar";
import Header from "./components/header";
import Mains from "./components/mains";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Header />
      <Mains />
      <Footer />
    </div>
  );
}
