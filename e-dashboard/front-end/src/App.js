import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent />} >
        <Route path="/" element={<h1>Product Listing Component</h1>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update" element={<h1>Update Product Component</h1>} />
        <Route path="/logout" element={<h1>Logout Component</h1>} />
        <Route path="/profile" element={<h1>Profile Component</h1>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
     
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
