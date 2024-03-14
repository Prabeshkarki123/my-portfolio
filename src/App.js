import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Header from "./components/header";
import Firefly from "./components/Firefly";
import PdfViewer from "./components/PdfViewer";
//import CVpdf from './components/MyCVV2.pdf';

function App() {
  return (
    <div>
      <Header />
      <div className="bg-gray-800">
        <Home />
        <About />
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
      <PdfViewer/>
    </div>
  );
}
export default App;
