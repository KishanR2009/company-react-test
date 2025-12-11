// import React, { useEffect, useState } from "react";
// import { deleteFood, getFoods } from "../../api/foodAPI";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { addToCart } from "../../api/cartAPI";

// export default function ListFood() {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);

//   const { user } = useAuth();
//   const isAdmin = user?.role === "admin";

//   const loadData = () => {
//     getFoods().then((res) => setData(res.data));
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure to delete?")) return;

//     await deleteFood(id);
//     loadData();
//   };

//   const handleAddToCart = async (food) => {
//     await addToCart({
//       foodId: food.id,
//       name: food.name,
//       price: food.price,
//       qty: 1,
//       userId: user.id,
//     });

//     alert("Added to cart!");
//     navigate("/home/cart");
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
//         <div className="d-flex justify-content-between mb-3">
//           <h3 className="fw-bold text-primary">Food List</h3>

//           {isAdmin && (
//             <Link to="/home/food/create" className="btn btn-success">
//               Add Food
//             </Link>
//           )}
//         </div>

//         <table className="table table-bordered text-center">
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Image</th>
//               <th>Food Name</th>
//               <th>Price</th>
//               <th>Category</th>
//               <th>Available</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((c, index) => (
//               <tr key={c.id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {c.foodImage ? (
//                     <img
//                       src={c.foodImage}
//                       height="60"
//                       className="rounded border"
//                     />
//                   ) : (
//                     "No Image"
//                   )}
//                 </td>

//                 <td>{c.name}</td>
//                 <td>{c.price}</td>
//                 <td>{c.category}</td>
//                 {/* <td>{c.isAvailable ? "Available" : "Not Available"}</td> */}
//                 <td>
//                   {c.isAvailable ? (
//                     <span className="badge bg-success">Available</span>
//                   ) : (
//                     <span className="badge bg-danger">Not Available</span>
//                   )}
//                 </td>

//                 {!isAdmin ? (
//                   <td>
//                     {c.isAvailable && (
//                       <button
//                         className="btn btn-warning btn-sm"
//                         onClick={() => handleAddToCart(c)}
//                       >
//                         Add to Cart
//                       </button>
//                     )}
//                   </td>
//                 ) : (
//                   <td>
//                     <Link
//                       to={`/home/food/edit/${c.id}`}
//                       className="btn btn-primary btn-sm me-2"
//                     >
//                       Edit
//                     </Link>

//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDelete(c.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

//============================================ after dynamic category in dropdown =========================================

// import React, { useEffect, useState } from "react";
// import { deleteFood, getFoods } from "../../api/foodAPI";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { addToCart } from "../../api/cartAPI";
// import { getCategories } from "../../api/categoryAPI";

// export default function ListFood() {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);

//   //get category name
//   const [categories, setCategories] = useState([]);

//   const { user } = useAuth();
//   const isAdmin = user?.role === "admin";

//   const loadData = () => {
//     getFoods().then((res) => setData(res.data));
//   };

//   //get category name
//   const loadCategories = () => {
//     getCategories().then((res) => setCategories(res.data));
//   };

//   useEffect(() => {
//     loadData();

//     //get category name
//     loadCategories();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure to delete?")) return;

//     await deleteFood(id);
//     loadData();
//   };

//   //get category name
//   const getCategoryName = (categoryId) => {
//     const Name = categories.find((c) => c.id === categoryId);
//     return Name ? Name.categoryName : "No Category";
//   };

//   const handleAddToCart = async (food) => {
//     await addToCart({
//       foodId: food.id,
//       name: food.name,
//       price: food.price,
//       qty: 1,
//       userId: user.id,
//     });

//     alert("Added to cart!");
//     navigate("/home/cart");
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
//         <div className="d-flex justify-content-between mb-3">
//           <h3 className="fw-bold text-primary">Food List</h3>

//           {isAdmin && (
//             <Link to="/home/food/create" className="btn btn-success">
//               Add Food
//             </Link>
//           )}
//         </div>

//         <table className="table table-bordered text-center">
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Image</th>
//               <th>Food Name</th>
//               <th>Price</th>
//               <th>Category</th>
//               <th>Available</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((c, index) => (
//               <tr key={c.id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {c.foodImage ? (
//                     <img
//                       src={c.foodImage}
//                       height="60"
//                       className="rounded border"
//                     />
//                   ) : (
//                     "No Image"
//                   )}
//                 </td>

//                 <td>{c.name}</td>
//                 <td>{c.price}</td>
//                 <td>{getCategoryName(c.categoryId)}</td>
//                 {/* <td>{c.isAvailable ? "Available" : "Not Available"}</td> */}
//                 <td>
//                   {c.isAvailable ? (
//                     <span className="badge bg-success">Available</span>
//                   ) : (
//                     <span className="badge bg-danger">Not Available</span>
//                   )}
//                 </td>

//                 {!isAdmin ? (
//                   <td>
//                     {c.isAvailable && (
//                       <button
//                         className="btn btn-warning btn-sm"
//                         onClick={() => handleAddToCart(c)}
//                       >
//                         Add to Cart
//                       </button>
//                     )}
//                   </td>
//                 ) : (
//                   <td>
//                     <Link
//                       to={`/home/food/edit/${c.id}`}
//                       className="btn btn-primary btn-sm me-2"
//                     >
//                       Edit
//                     </Link>

//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDelete(c.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// ==================afteter dynamic get category and popup modal=====================================================

import React, { useEffect, useState } from "react";
import { deleteFood, getFoods } from "../../api/foodAPI";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { addToCart } from "../../api/cartAPI";
import { getCategories } from "../../api/categoryAPI";
import DeleteModal from "../../component/DeleteModal";
import toast from "react-hot-toast";

export default function ListFood() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  //get category name
  const [categories, setCategories] = useState([]);

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const loadData = () => {
    getFoods().then((res) => setData(res.data));
  };

  //get category name
  const loadCategories = () => {
    getCategories().then((res) => setCategories(res.data));
  };

  useEffect(() => {
    loadData();

    //get category name
    loadCategories();
  }, []);

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleDelete = async () => {
    deleteFood(deleteId).then(() => {
      loadData();
      setOpen(false);
      setDeleteId(null);
      toast.success("Food Deleted Successfully! ✔");
    });
  };

  //get category name
  const getCategoryName = (categoryId) => {
    const Name = categories.find((c) => c.id === categoryId);
    return Name ? Name.categoryName : "No Category";
  };

  const handleAddToCart = async (food) => {
    await addToCart({
      foodId: food.id,
      name: food.name,
      price: food.price,
      qty: 1,
      userId: user.id,
    });

    toast.success("Food Added to Cart! ✔");
    navigate("/home/cart");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
        <div className="d-flex justify-content-between mb-3">
          <h3 className="fw-bold text-primary">Food List</h3>

          {isAdmin && (
            <Link to="/home/food/create" className="btn btn-success">
              Add Food
            </Link>
          )}
        </div>

        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((c, index) => (
              <tr key={c.id}>
                <td>{index + 1}</td>
                <td>
                  {c.foodImage ? (
                    <img
                      src={c.foodImage}
                      height="60"
                      className="rounded border"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>

                <td>{c.name}</td>
                <td>{c.price}</td>
                <td>{getCategoryName(c.categoryId)}</td>
                {/* <td>{c.isAvailable ? "Available" : "Not Available"}</td> */}
                <td>
                  {c.isAvailable ? (
                    <span className="badge bg-success">Available</span>
                  ) : (
                    <span className="badge bg-danger">Not Available</span>
                  )}
                </td>

                {!isAdmin ? (
                  <td>
                    {c.isAvailable && (
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleAddToCart(c)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </td>
                ) : (
                  <td>
                    <Link
                      to={`/home/food/edit/${c.id}`}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => openDeleteModal(c.id)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {open && <DeleteModal setOpen={setOpen} onDelete={handleDelete} />}
      </div>
    </div>
  );
}
