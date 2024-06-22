
import { Form } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Form/>
          <Card/>


        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />


        </Routes>
          <Footer/>
      </div>
  );
}

export default App;
