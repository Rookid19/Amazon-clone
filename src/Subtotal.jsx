import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
   const [{ basket }, dsipatch] = useStateValue(); // we aint using the dispatch here

   return (
      <div className="subtotal">
         <CurrencyFormat
            renderText={(value) => (
               <>
                  <p>
                     {/* Home work */}
                     Subtotal (<strong>{basket?.length}</strong>items):
                     <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                     <input type="checkbox" /> This order contains a gift
                  </small>
               </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // home work
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
         />

         <button>Proceed to Checkout</button>
      </div>
   );
}

export default Subtotal;
