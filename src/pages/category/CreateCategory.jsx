// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createCategory } from "../../api/categoryAPI";

// export default function CreateCategory() {
//   const navigate = useNavigate();

//   const [error, setError] = useState("");

//   const [category, setCategory] = useState({
//     categoryName: "",
//     categoryDescription: "",
//   });

//   const handleChange = (e) => {
//     setCategory({ ...category, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!category.categoryName.trim())
//       return setError("category name required");
//     if (!category.categoryDescription.trim())
//       return setError("category description required");

//     await createCategory(category);

//     navigate("/home/category");
//   };

//   return (
//     <div className="d-flex justify-content-center mt-5">
//       <div
//         className="card shadow-lg p-4"
//         style={{ width: "500px", borderRadius: "15px" }}
//       >
//         <h3 className="text-center mb-3 fw-bold text-primary">
//           Add New Category
//         </h3>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Category Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="categoryName"
//               placeholder="Enter Category Name"
//               value={category.categoryName}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">
//               Category Description
//             </label>
//             <textarea
//               className="form-control"
//               placeholder="Enter Category Description"
//               name="categoryDescription"
//               value={category.categoryDescription}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Submit */}
//           <button
//             className="btn btn-primary w-100 mt-3 py-2"
//             type="submit"
//             style={{ borderRadius: "10px", fontSize: "16px" }}
//           >
//             Add Category
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





// =======================================================after display toaster=============================================



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../api/categoryAPI";
import toast from "react-hot-toast";

export default function CreateCategory() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [category, setCategory] = useState({
    categoryName: "",
    categoryDescription: "",
  });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category.categoryName.trim())
      return setError("category name required");
    if (!category.categoryDescription.trim())
      return setError("category description required");

    await createCategory(category);

    toast.success("Category Added Successfully! ✔");

    navigate("/home/category");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="card shadow-lg p-4"
        style={{ width: "500px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-3 fw-bold text-primary">
          Add New Category
        </h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Category Name</label>
            <input
              type="text"
              className="form-control"
              name="categoryName"
              placeholder="Enter Category Name"
              value={category.categoryName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Category Description
            </label>
            <textarea
              className="form-control"
              placeholder="Enter Category Description"
              name="categoryDescription"
              value={category.categoryDescription}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            className="btn btn-primary w-100 mt-3 py-2"
            type="submit"
            style={{ borderRadius: "10px", fontSize: "16px" }}
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}