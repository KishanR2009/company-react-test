import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoriesById, updateCategory } from "../../api/categoryAPI";
import toast from "react-hot-toast";

export default function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState();

  const [category, setCategory] = useState({
    categoryName: "",
    categoryDescription: "",
  });

  useEffect(() => {
    getCategoriesById(id).then((res) => {
      setCategory(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category.categoryName.trim())
      return setError("category name required");
    if (!category.categoryDescription.trim())
      return setError("category description required");

    updateCategory(id, category).then(() => {
      toast.success("Category Updated Successfully! ✔");

      navigate("/home/category");
    });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="card shadow-lg p-4"
        style={{ width: "500px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-3 fw-bold text-primary">Edit Category</h3>

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
              name="categoryDescription"
              placeholder="Enter Description"
              value={category.categoryDescription}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn btn-primary w-100 mt-3 py-2"
            type="submit"
            style={{ borderRadius: "10px", fontSize: "16px" }}
          >
            Update Category
          </button>
        </form>
      </div>
    </div>
  );
}
