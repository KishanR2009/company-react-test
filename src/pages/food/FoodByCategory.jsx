import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFoods } from "../../api/foodAPI";
import { getCategoriesById } from "../../api/categoryAPI";

export default function FoodByCategory() {
  const { id } = useParams();
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    loadCategory();
    loadFoods();
  }, [id]);

  const loadCategory = () => {
    getCategoriesById(id).then((res) => setCategory(res.data));
  };

  const loadFoods = () => {
    getFoods().then((res) => {
      const filterData = res.data.filter((f) => f.categoryId == id);
      setFoods(filterData);
    });
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary m-0">
          🍽 Foods in: {category?.categoryName}
        </h2>

        <Link to="/home/category" className="btn btn-dark px-4 py-2">
          ⬅ Back
        </Link>
      </div>

      {foods.length === 0 && (
        <div className="alert alert-warning text-center fw-semibold">
          No foods found in this category!
        </div>
      )}

      <div className="row">
        {foods.map((food) => (
          <div className="col-md-4 mb-4" key={food.id}>
            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              {food.foodImage ? (
                <img
                  src={food.foodImage}
                  alt={food.name}
                  style={{ height: "400px", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    height: "180px",
                    background: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#777",
                  }}
                >
                  No Image
                </div>
              )}

              <div className="card-body">
                <h5 className="fw-bold">{food.name}</h5>
                <p className="text-muted" style={{ minHeight: "60px" }}>
                  {food.foodDescription}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <span
                    className="badge bg-primary px-3 py-2"
                    style={{ fontSize: "14px" }}
                  >
                    ₹ {food.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
