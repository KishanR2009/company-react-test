// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createFood } from "../../api/foodAPI";

// export default function CreateFood() {
//   const navigate = useNavigate();

//   const [error, setError] = useState("");

//   const [food, setFood] = useState({
//     name: "",
//     price: "",
//     category: "",
//     isAvailable: false,
//     foodImage: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     if (type === "file") {
//       const file = files[0];
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFood({ ...food, foodImage: reader.result });
//       };
//       reader.readAsDataURL(file);
//       return;
//     }

//     setFood({
//       ...food,
//       [name]: type === "checkbox" ? checked : value,
//     });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!food.name.trim()) return setError("Food name required");
//     if (!food.price.trim()) return setError("Food price required");
//     if (!food.category.trim()) return setError("Select category");
//     if (!food.foodImage) return setError("Please upload food image");

//     await createFood(food);
//     navigate("/home/food");
//   };

//   return (
//     <div className="d-flex justify-content-center mt-5">
//       <div
//         className="card shadow-lg p-4"
//         style={{ width: "500px", borderRadius: "15px" }}
//       >
//         <h3 className="text-center mb-3 fw-bold text-primary">Add New Food</h3>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Food Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Food Name"
//               name="name"
//               value={food.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">Food Price</label>
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Food Price"
//               name="price"
//               value={food.price}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">Food Category</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Food Category"
//               name="category"
//               value={food.category}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">Food Image</label>
//             <input
//               type="file"
//               className="form-control"
//               placeholder="Food Image"
//               accept="image/*"
//               name="foodImage"
//               onChange={handleChange}
//             />
//           </div>

//           {food.foodImage && (
//             <img
//               src={food.foodImage}
//               height="80"
//               className="rounded mb-3 border"
//               alt="preview"
//             />
//           )}

//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               name="isAvailable"
//               checked={food.isAvailable}
//               onChange={handleChange}
//             />
//             <label className="form-check-label">Available</label>
//           </div>

//           <button className="btn btn-primary w-100 mt-3 py-2" type="submit">
//             Add Food
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



//============================================ after dynamic category in dropdown =========================================

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFood } from "../../api/foodAPI";
import { getCategories } from "../../api/categoryAPI";
import toast from "react-hot-toast";

export default function CreateFood() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [category, setCategory] = useState([]);

  const [food, setFood] = useState({
    name: "",
    price: "",
    categoryId: "",
    isAvailable: false,
    foodImage: "",
  });

  useEffect(() => {
    getCategories().then((res) => {
      setCategory(res.data);
    });
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFood({ ...food, foodImage: reader.result });
      };
      reader.readAsDataURL(file);
      return;
    }

    setFood({
      ...food,
      [name]: type === "checkbox" ? checked : value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!food.name.trim()) return setError("Food name required");
    if (!food.price.trim()) return setError("Food price required");
    if (!food.categoryId.trim()) return setError("Select category");
    if (!food.foodImage) return setError("Please upload food image");

    await createFood(food);
    
    toast.success("Food Added Successfully! ✔");

    navigate("/home/food");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="card shadow-lg p-4"
        style={{ width: "500px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-3 fw-bold text-primary">Add New Food</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Food Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Food Name"
              name="name"
              value={food.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Food Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Food Price"
              name="price"
              value={food.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Select Category</label>

            <select
              className="form-control"
              name="categoryId"
              onChange={handleChange}
            >
              <option value="">-- Select Category --</option>
              {category.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.categoryName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Food Image</label>
            <input
              type="file"
              className="form-control"
              placeholder="Food Image"
              accept="image/*"
              name="foodImage"
              onChange={handleChange}
            />
          </div>

          {food.foodImage && (
            <img
              src={food.foodImage}
              height="80"
              className="rounded mb-3 border"
              alt="preview"
            />
          )}

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="isAvailable"
              checked={food.isAvailable}
              onChange={handleChange}
            />
            <label className="form-check-label">Available</label>
          </div>

          <button className="btn btn-primary w-100 mt-3 py-2" type="submit">
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
}
