import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import { NavBar } from './Components/NavBar';
import './index.css'
import Contact from './Pages/Contact';
import Error from "./Pages/Error";
import Home from './Pages/Home';
import Work from './Pages/Work';

function App() {


  return (  

    <Router >
      <>
        <NavBar />
<Routes>
          <Route exact index path="/" element={<Home />} />
          <Route   exact path="/work" element={<Work />} />
          <Route   exact path="/contact" element={<Contact />} />
          <Route  path="*" element={<Error />} />
          </Routes>
        <Footer />
        
      
        </>
    </Router>

  );
}

export default App;
