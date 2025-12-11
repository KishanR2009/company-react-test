// export default function Cart() {
//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
//         <h3 className="fw-bold text-primary mb-3">Your Cart</h3>

//         <>
//           <table className="table table-bordered text-center">
//             <thead className="table-dark">
//               <tr>
//                 <th>#</th>
//                 <th>Food</th>
//                 <th>Price</th>
//                 <th>Qty</th>
//                 <th>Total</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Pizza</td>
//                 <td>250</td>
//                 <td>2</td>
//                 <td>500</td>
//                 <td>
//                   <button className="btn btn-danger btn-sm">Remove</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <button className="btn btn-success mt-3 py-2">Order Now</button>
//         </>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { getCart, removeCartItem } from "../../api/cartAPI";
// import { createOrder } from "../../api/orderAPI";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Cart() {
//   const [cart, setCart] = useState([]);
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const loadCart = () => {
//     getCart().then((res) => {
//       const filtered = res.data.filter((c) => c.userId === user.id);
//       setCart(filtered);
//     });
//   };

//   useEffect(() => {
//     loadCart();
//   }, []);

//   const handleRemove = async (id) => {
//     await removeCartItem(id);
//     loadCart();
//   };

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   const handleOrderNow = async () => {
//     for (let item of cart) {
//       await createOrder({
//         foodId: item.foodId,
//         name: item.name,
//         price: item.price,
//         qty: item.qty,
//         userId: user.id,
//         date: new Date().toLocaleString(),
//       });
//     }

//     for (let item of cart) {
//       await removeCartItem(item.id);
//     }

//     alert("Order placed successfully!");
//     navigate("/home/order");
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
//         <h3 className="fw-bold text-primary mb-3">Your Cart</h3>

//         {cart.length === 0 ? (
//           <h5 className="text-center text-muted">Cart is empty</h5>
//         ) : (
//           <>
//             <table className="table table-bordered text-center">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Food</th>
//                   <th>Price</th>
//                   <th>Qty</th>
//                   <th>Total</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {cart.map((c, index) => (
//                   <tr key={c.id}>
//                     <td>{index + 1}</td>
//                     <td>{c.name}</td>
//                     <td>{c.price}</td>
//                     <td>{c.qty}</td>
//                     <td>{c.price * c.qty}</td>
//                     <td>
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => handleRemove(c.id)}
//                       >
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 <tr>
//                   <td colSpan="4" className="fw-bold">
//                     Total Amount
//                   </td>
//                   <td className="fw-bold">₹{totalAmount}</td>
//                   <td></td>
//                 </tr>
//               </tbody>
//             </table>

//             <button
//               className="btn btn-success mt-3 py-2"
//               onClick={handleOrderNow}
//             >
//               Order Now
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import { getCart, removeCartItem, updateCartItem } from "../../api/cartAPI";
import { createOrder } from "../../api/orderAPI";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const loadCart = () => {
    getCart().then((res) => {
      const filtered = res.data.filter((c) => c.userId === user.id);
      setCart(filtered);
    });
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = async (id) => {
    await removeCartItem(id);
    toast.success("Item Removed Successfully! ✔");
    loadCart();
  };

  const increaseQty = async (item) => {
    await updateCartItem(item.id, { ...item, qty: item.qty + 1 });
    loadCart();
  };

  const decreaseQty = async (item) => {
    if (item.qty > 1) {
      await updateCartItem(item.id, { ...item, qty: item.qty - 1 });
      loadCart();
    }
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleOrderNow = async () => {
    for (let item of cart) {
      await createOrder({
        foodId: item.foodId,
        name: item.name,
        price: item.price,
        qty: item.qty,
        userId: user.id,
        date: new Date().toLocaleString(),
      });
    }

    for (let item of cart) {
      await removeCartItem(item.id);
    }

    toast.success("Order Placed Successfully! ✔");
    navigate("/home/order");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
        <h3 className="fw-bold text-primary mb-3">Your Cart</h3>

        {cart.length === 0 ? (
          <h5 className="text-center text-muted">Cart is empty</h5>
        ) : (
          <>
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Food</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((c, index) => (
                  <tr key={c.id}>
                    <td>{index + 1}</td>
                    <td>{c.name}</td>
                    <td>{c.price}</td>

                    <td>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => decreaseQty(c)}
                      >
                        -
                      </button>

                      <span className="mx-2">{c.qty}</span>

                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => increaseQty(c)}
                      >
                        +
                      </button>
                    </td>

                    <td>{c.price * c.qty}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(c.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td colSpan="4" className="fw-bold">
                    Total Amount
                  </td>
                  <td className="fw-bold">₹{totalAmount}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <button className="btn btn-success mt-3 py-2" onClick={handleOrderNow}>
              Order Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}
