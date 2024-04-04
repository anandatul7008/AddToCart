import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import userContext from "../MyContext";
export default function NavBar() {
 
  const { cartItems } = useContext(userContext);
  return (
    <>
    
    <div className="topNav fixed-top">
        <div className="leftNav">
        <Link className="nav-link active" aria-current="page" to="/">DxO Shop</Link>
        </div>
      <div className="rightPart">
        <div className="rightNav">
        
          <Link className="nav-link" to="/cart">
            
            <TiShoppingCart className="symbol" />
          </Link>
        </div>
        <div className="noItems">{cartItems}</div>
      </div>
      
    </div>
    
    </>
  )
}
