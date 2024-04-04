import React,{useState,useContext} from 'react'
import userContext from "../MyContext";
import Alert from './Alert';

export default function BookItem(props) {
    const {Name,publishedDate,Price,img,amount,id}=props.book;
    const [addAlert,setAddAlert]=useState(false);
    const [availableAmount,setAvailableAmount]=useState(amount);
    const { list, setList ,setCartItems} = useContext(userContext);
    const addToCart=(Name,Price,id)=>{
        let bool=false;
        setAvailableAmount(availableAmount-1);
        list.forEach((element)=>{
            if(element.Name===Name){
                element.Amount=element.Amount+1;
                bool=true;
                
            }
        })
        if(!bool){
        const newItem={Name:Name,Price:Price,Amount:1,id:id};
        setList(list.concat(newItem));
        }
        setCartItems(prevCartItems => prevCartItems + 1);
        setAddAlert(true);
        setTimeout(()=>{
          setAddAlert(false);
        },2000);
        
    }
  return (
    <div>
      <Alert addAlert={addAlert}/>
      <div className="card"  style={{width: '18rem'}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">{Name}</h3>
    <h2>{publishedDate}</h2>
    <h4> Price:₹ {Price}</h4>
    
    <button type="button" className="btn btn-primary" disabled={availableAmount===0} onClick={()=>addToCart(Name,Price,id)}>Add to Cart</button>
    
    
  </div>
</div>
    </div>
  )
}
