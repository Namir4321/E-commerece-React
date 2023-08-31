import { AddOutlined, RemoveOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleClearWish,
  deleteWish,
  addtoCartApi,
} from "../../redux/apiCartRedux";
export const WishList = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser);
  const wishlist = useSelector((state) => state.wish.products);
  console.log(wishlist);
  const ClearCart = () => {
    try {
      dispatch(handleClearWish({ userId }));
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelte = (e, WishId) => {
    console.log();
    e.preventDefault();
    try {
      console.log({ userId, WishId });
      dispatch(deleteWish({ userId, WishId }));
    } catch (error) {
      console.log(error);
    }
  };
  const addtoCart = (e, item) => {
    e.preventDefault();
    const productToAdd = {
      ...item,
      total: item.price * 1,
      userId: userId,
    };
    console.log(productToAdd);
    if (userId) {
      dispatch(addtoCartApi({ productadd: productToAdd, userId: userId }));
    }
  };
  return (
    <div>
      <div className="">
      <div className="container-fluid text-center">
        <h1 style={{ fontWeight: "200" }}>YOUR BAG</h1>

        </div>
          <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-3 col-6  ">
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button
                  className="btn btn-secoundry rounded-0"
                  style={{ border: "2px solid black" }}
                >
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>
            <div className="col-3  d-none d-lg-block">
              <Link
                to="/cart"
                style={{ color: "black", textDecoration: "none" }}
              >
                Shoping Bag
              </Link>
            </div>
            <div className="col-3  d-none d-lg-block">
              <Link
                to="/wishlist"
                style={{ color: "black", textDecoration: "none" }}
              >
                Your Wishlist
              </Link>
            </div>
            <div className="col-lg-3 col-6 ">
              {" "}
              <button
                className="btn btn-dark rounded-0"
                style={{ border: "2px solid black" }}
              >
                CHECKOUT NOW
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-5">
          <div className="container-fluid">
            <div className="row mb-3">
              <div style={{ textAlignLast: "end" }}>
                {wishlist && (
                  <button
                    onClick={ClearCart}
                    className=""
                    style={{ padding: "5px 10px" }}
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            <div className="container-fluid mt-2 p-2">
              {wishlist ? (
                <>
                  {wishlist.map((item) => (
                    <div className="row">
                      <div className="col-lg-8 col-sm-6 col-sm-12 ">
                        <div className="container-fluid">
                          <div className="row mt-5">
                            <div className="col-lg-4 col-6">
                              {/* Image container */}
                              <img
                                src={item.image}
                                alt=""
                                className="img-fluid h-75"
                              />
                              {/* Image container */}
                            </div>
                            <div className="col-lg-8 col-6 ">
                              {/* Product details */}
                              <div className="container-fluid">
                                <div className="row">
                                  <div
                                    className="col-lg-8 col-sm-12"
                                    style={{ textAlignLast: "start" }}
                                  >
                                    {/* detail */}
                                    <div className="">Product:{item.title}</div>
                                    <div className="mt-4">
                                      {" "}
                                      id:{item._id.slice(0, 4)}
                                    </div>
                                    <div className="mt-4 d-flex">
                                      color:
                                      <p
                                        style={{
                                          borderRadius: "50px",
                                          backgroundColor: item.color,
                                          height: "20px",
                                          width: "20px",
                                          margin: "2px",
                                          border: "solid 1px black",
                                        }}
                                      ></p>
                                    </div>
                                    <div className="row  d-flex">
                                      <div className=" col-6 mt-4">
                                        {" "}
                                        Size{" : "}
                                        {item.size}
                                      </div>
                                      <div className=" mt-4 justify-end col-6">
                                      </div>
                                    </div>
                                    {/* detail */}
                                  </div>
                                  <div
                                    className="col-lg-4 col-sm-12 "
                                    style={{ textAlign: "center" }}
                                  >
                                    {/* quantity */}

                                    <div
                                      className="input-group  container-fluid mt-3"
                                      style={{
                                        width: "125px",
                                        textAlignLast: "start",
                                      }}
                                    >
                                      <button
                                        className="  text-end"
                                        style={{
                                          borderRadius: "0px",
                                          backgroundColor: "transparent",
                                          border: "0px",
                                          textAlignLast: "start",
                                        }}
                                      >
                                        <AddOutlined />
                                      </button>
                                      <input
                                        type="number"
                                        className="form-control "
                                        placeholder="1"
                                      />
                                      <button
                                        className="  text-end"
                                        style={{
                                          borderRadius: "0px",
                                          backgroundColor: "transparent",
                                          border: "0px",
                                        }}
                                      >
                                        <RemoveOutlined />
                                      </button>
                                    </div>
                                    <div
                                      className="text-center mt-3"
                                      style={{
                                        textAlignLast: "center",
                                        fontSize: "25px",
                                      }}
                                    >
                                      $999
                                    </div>

                                    {/* quantity */}
                                    <button
                                      onClick={(e) => {
                                        addtoCart(e, item);
                                      }}
                                      style={{
                                        borderRadius: "0px",
                                        height: "40px",
                                        width: "100%",
                                        backgroundColor: "white",
                                        border: "2px solid teal",
                                      }}
                                    >
                                      Add to Cart
                                    </button>
                                    <button
                                      className="mt-2"
                                      onClick={(e) => handleDelte(e, item._id)}
                                      style={{
                                        borderRadius: "0px",
                                        height: "40px",
                                        width: "100%",
                                        backgroundColor: "white",
                                        border: "2px solid teal",
                                      }}
                                    >
                                     Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Product details */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
