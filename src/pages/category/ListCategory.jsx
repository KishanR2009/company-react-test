// import { Link } from "react-router-dom";
// import { deleteCategory, getCategories } from "../../api/categoryAPI";
// import { useEffect, useState } from "react";

// export default function ListCategory() {
//   const [data, setData] = useState([]);

//   const loadData = () => {
//     getCategories().then((res) => setData(res.data));
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete?")) {
//       deleteCategory(id).then(() => loadData());
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="fw-bold text-primary">Category List</h3>
//           <Link to="/home/category/create" className="btn btn-success">
//             Add Category
//           </Link>
//         </div>

//         <table className="table table-bordered table-hover text-center">
//           <thead className="table-dark">
//             <tr>
//               <th style={{ width: "80px" }}>#</th>
//               <th>Category Name</th>
//               <th>Category Description</th>
//               <th style={{ width: "210px" }}>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((c, index) => (
//               <tr key={c.id}>
//                 <td>{index + 1}</td>
//                 <td>{c.categoryName}</td>
//                 <td>{c.categoryDescription}</td>
//                 <td>
//                   <Link
//                     to={`/home/category/edit/${c.id}`}
//                     className="btn btn-primary btn-sm me-2"
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => handleDelete(c.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// ======================================= after perform delete popup modal ===============================================

// import { Link } from "react-router-dom";
// import { deleteCategory, getCategories } from "../../api/categoryAPI";
// import { useEffect, useState } from "react";
// import DeleteModal from "../../component/DeleteModal";
// import toast from "react-hot-toast";
// import { useAuth } from "../../context/AuthContext";

// export default function ListCategory() {
//   const [data, setData] = useState([]);

//   const [open, setOpen] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);

//   const { user } = useAuth();
//   const isAdmin = user?.role === "admin";

//   const loadData = () => {
//     getCategories().then((res) => setData(res.data));
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const openDeleteModal = (id) => {
//     setDeleteId(id);
//     setOpen(true);
//   };

//   const handleDelete = () => {
//     deleteCategory(deleteId).then(() => {
//       loadData();
//       setOpen(false);
//       setDeleteId(null);
//       toast.success("Category Deleted Successfully! ✔");
//     });
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="fw-bold text-primary">Category List</h3>

//           {isAdmin && (
//             <Link to="/home/category/create" className="btn btn-success">
//               Add Category
//             </Link>
//           )}
//         </div>

//         <table className="table table-bordered table-hover text-center">
//           <thead className="table-dark">
//             <tr>
//               <th style={{ width: "80px" }}>#</th>
//               <th>Category Name</th>
//               <th>Category Description</th>

//               {isAdmin && <th style={{ width: "210px" }}>Action</th>}
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((c, index) => (
//               <tr key={c.id}>
//                 <td>{index + 1}</td>
//                 <td>{c.categoryName}</td>
//                 <td>{c.categoryDescription}</td>

//                 {isAdmin && (
//                   <td>
//                     <Link
//                       to={`/home/category/edit/${c.id}`}
//                       className="btn btn-primary btn-sm me-2"
//                     >
//                       Edit
//                     </Link>

//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => openDeleteModal(c.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {open && <DeleteModal setOpen={setOpen} onDelete={handleDelete} />}
//       </div>
//     </div>
//   );
// }


// after ViewAllFood button

import { Link } from "react-router-dom";
import { deleteCategory, getCategories } from "../../api/categoryAPI";
import { useEffect, useState } from "react";
import DeleteModal from "../../component/DeleteModal";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export default function ListCategory() {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const loadData = () => {
    getCategories().then((res) => setData(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleDelete = () => {
    deleteCategory(deleteId).then(() => {
      loadData();
      setOpen(false);
      setDeleteId(null);
      toast.success("Category Deleted Successfully! ✔");
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-bold text-primary">Category List</h3>

          {isAdmin && (
            <Link to="/home/category/create" className="btn btn-success">
              Add Category
            </Link>
          )}
        </div>

        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "80px" }}>#</th>
              <th>Category Name</th>
              <th>Category Description</th>
              <th style={{ width: "300px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((c, index) => (
              <tr key={c.id}>
                <td>{index + 1}</td>
                <td>{c.categoryName}</td>
                <td>{c.categoryDescription}</td>
                <td>
                  {isAdmin ? (
                    <>
                      <Link
                        to={`/home/category/edit/${c.id}`}
                        className="btn btn-primary btn-sm me-2"
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm me-3"
                        onClick={() => openDeleteModal(c.id)}
                      >
                        Delete
                      </button>

                      <Link
                        to={`/home/category/${c.id}/foods`}
                        className="btn btn-warning btn-sm"
                      >
                        View Foods
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to={`/home/category/${c.id}/foods`}
                        className="btn btn-warning btn-sm"
                      >
                        View Foods
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {open && <DeleteModal setOpen={setOpen} onDelete={handleDelete} />}
      </div>
    </div>
  );
}
