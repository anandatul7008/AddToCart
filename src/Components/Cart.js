import React,{useState,useContext,useEffect } from 'react'

import userContext from '../MyContext';
import Alert from './Alert';
export default function Cart() {
  const [totalAmount,setTotalAmount]=useState(0);
  const { list, setList,setCartItems } = useContext(userContext);
  const [checkoutAlert,setCheckoutAlert]=useState(false);
  useEffect(()=>{
    let amt=0;
    let num=0;
    list.forEach((ele)=>{
      amt=amt+ele.Amount*parseInt(ele.Price);
      num=num+ele.Amount;
    
    })
    setTotalAmount(amt);
    setCartItems(num);
  },[list])
  const deleteItem=(id)=>{
    console.log("iD",id);
    const updateList=list.filter((ele)=>{
      return ele.id!==id;
    });
    setList(updateList);
  }
  const addMore=(id)=>{
    const updatedList = list.map((ele) => {
      if (ele.id === id) {
        return { ...ele, Amount: ele.Amount + 1 };
      }
      return ele;
    });
  
    setList(updatedList);
  }

  const subtractMore=(id)=>{
    const updatedList=list.map((ele)=>{
      if(ele.id===id){
        if(ele.Amount===1){
          deleteItem(id);
        }else{
          return {...ele,Amount:ele.Amount-1};
        }
      }
      return ele;
    });
    setList(updatedList);
  }
  const checkOut=()=>{
    setList([]);
    setCheckoutAlert(true);
    setTimeout(() => {
      setCheckoutAlert(false);
    },2000);
  }
  return (
    <div className="container padding">
      <Alert checkoutAlert={checkoutAlert}/>
      {list.length>0 ? <div > 
      <table className="table">
          <thead>
              <tr>
                <th scope="col">Item No.</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
          </thead>
          <tbody>
                {list.map((item)=>{
                  return <tr key={item.id}>
                    <th scope="row">1</th>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>{item.Amount}</td>
                  <td>
                  <div className="d-flex">
              <div className="mx-1">
                <button type="button" className="btn btn-primary"disabled={item.Amount===1} onClick={()=>{subtractMore(item.id)}}>-</button>
              </div>
              <div className="mx-1">
                <button type="button" className="btn btn-primary" onClick={(id)=>{addMore(item.id)}}>+</button>
              </div>
              <div className="mx-1">
                <button type="button" className="btn btn-warning" onClick={(id)=>{deleteItem(item.id)}}>Remove</button>
              </div>
            </div>
                  </td>
                  </tr>
                })}
            </tbody>
      </table>
      <div className="totalPice">
        <div className="badge bg-primary text-wrap " style={{width: "8rem",fontSize:"15px"}}>
                TOTAL PRICE
        </div>
        <div className="totalRupee">₹{totalAmount}</div>
    </div>
    <div className="py-2">
    <button type="button" className="btn btn-primary " style={{fontWeight:"00",fontSize:"15px"}}onClick={checkOut}>Check Out</button>
    </div>
    </div>:<div className="empty">Your Cart is Empty</div>}

    </div>
  )
}
