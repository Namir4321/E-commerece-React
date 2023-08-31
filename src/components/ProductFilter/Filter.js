import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Products } from "../productCard/Products";

export const Filter = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
 
  const [filters, setFilters] = useState({});
  const [sort,setSort]=useState("Newest")
  // const [filterCat,setFiltercat]=useState({cat})

  const handleFilters = (e) => {
    const select = e.target.dataset.value;

    setFilters({
      ...filters,
      [e.target.name]: select,
    });
  };
  const selectfilter=(e)=>{
    const select = e.target.dataset.value;
    setSort(select)
  }

// console.log(filters.cat)
  return (
    <div className="container-fluid">
      <div className="container-fluid" style={{ textAlignLast: "start" }}>
        <h1>{cat}</h1>
      </div>
      {cat&&<div className="container-fluid ">
        <div className="row">
          <div className="col-6 d-flex ml-2" style={{ textAlignLast: "start" }}>
            <div className="dropdown ml-2">
              <button
                className="btn btn-secoundry bg-light open dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "none" }}
              >
                {/* {filters.size === "" ? "size" : filters.size} */}
Color: {filters.color}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="active">
                  <a
                    className="dropdown-item "
                    href="#"
                    data-value="Red"
                    name="color"
                    onClick={handleFilters}
                  >
                    Red
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-value="Blue"
                    name="color"
                    onClick={handleFilters}
                  >
                    Blue
                  </a>
                </li>
                <li>
                  <a
                    name="color"
                    onClick={handleFilters}
                    className="dropdown-item"
                    href="#"
                    data-value="Green"
                  >
                    Green
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown" style={{ marginLeft: "15px" }}>
              <button
                className="btn btn-secoundry bg-light open dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "none" }}
              >Size: {filters.size}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="active">
                  <a
                    className="dropdown-item "
                    href="#"
                    data-value="S"
                    name="size"
                    onClick={handleFilters}
                  >
                    S
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-value="M"
                    name="size"
                    onClick={handleFilters}
                  >
                    M
                  </a>
                </li>
                <li>
                  <a
                    name="size"
                    onClick={handleFilters}
                    className="dropdown-item"
                    href="#"
                    data-value="L"
                  >
                    L
                  </a>
                </li>
                <li>
                  <a
                    name="size"
                    onClick={handleFilters}
                    className="dropdown-item"
                    href="#"
                    data-value="XL"
                  >
                    XL
                  </a>
                </li>
                <li>
                  <a
                    name="size"
                    onClick={handleFilters}
                    className="dropdown-item"
                    href="#"
                    data-value="XXL"
                  >
                    XXL
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6" style={{ textAlignLast: "end" }}>
            <div className="dropdown">
              <button
                className="btn btn-secoundry bg-light  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "none" }}
              >
               {sort}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="dropdown-item"
                    name="SortProduct"
                    onClick={selectfilter}
                    data-value="Newest"
                    href="#"
                  >
                    Newest
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    name="SortProduct"
                    onClick={selectfilter}
                    data-value="Price(Low-High)"
                  >
                     Price(High-Low)
                    
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    name="SortProduct"
                    onClick={selectfilter}
                    data-value="Price(High-Low)"
                  >
                   Price(Low-High) 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>}
      <Products   cat={cat} filters={filters} sort={sort}/>
    </div>
  );
};
