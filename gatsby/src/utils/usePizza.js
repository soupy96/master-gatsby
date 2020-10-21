import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // 1. create some state to hold our order
  // we got rid of this line because we moved the state up to the provider
  // const [order, setOrder] = useState([]);
  // now we access both our state and our updater function
  const [order, setOrder] = useContext(OrderContext);
  // 2. make a function add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. make a function remove things to order
  function removeFromOrder(index) {
    setOrder([
      //   everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. send this data the a serverless function when they check out
  //   TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
