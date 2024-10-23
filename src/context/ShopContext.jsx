import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom"


 export const shopContext = createContext();

 const ShopContextProvider = (props) =>{

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState("")
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId,size)=>{
               
        if(!size){
            toast.error('Select the size of Product')
            return ;
        }

         let cartData = structuredClone(cartItems) // structureClone is to copy the object 

         if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }else{
                cartData[itemId][size] = 1;
            }
         }
         else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
         }
       setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCnt = 0; 
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCnt += cartItems[items][item];
                    } 
                }catch (error) {

                }
            }
        }
        return totalCnt;
    }

   const updateQuantity = async (itemId,size,quantity)=>  {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;
    setCartItems(cartData)
   }   

   const getCartAmount = () =>{
      let totalAmount = 0;
      for(const items in cartItems){
        let itemInfo = products.find((product) =>product._id === items);
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item] > 0){
                    totalAmount += itemInfo.price*cartItems[items][item];
                }
            }
            catch(error){

            }
        }
      }
      return totalAmount;

   }

    const value = {
        products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch
        ,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    }

    return (
        <shopContext.Provider value = {value}>
            {props.children}
        </shopContext.Provider>
     )
 }
 export default ShopContextProvider;