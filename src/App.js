import NavBar from "./Components/NavBar";
import "./App.css";
import userContext from "./MyContext";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import BookList from "./Components/BookList";
import Cart from "./Components/Cart";
import {useState} from 'react';
import Alert from "./Components/Alert";
function App() {
  const [list,setList]=useState([]);
  const [cartItems,setCartItems]=useState(0);
  return (
    <userContext.Provider value={{list,setList,cartItems,setCartItems}}>
    <Router>
      <div>
        <NavBar />
        <Alert/>
        
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route exact path="/cart" element={<Cart />} />
          
        </Routes>
      </div>
    </Router>
    </userContext.Provider>
  );
}

export default App;
