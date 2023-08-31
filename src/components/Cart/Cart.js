import { AddOutlined, ColorLens, RemoveOutlined } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {AddressElement} from '@stripe/react-stripe-js';
import { publicRequest, userRequest } from "../../requestMethod";
import { loadStripe } from "@stripe/stripe-js";
import { UpdateCart, deleteCart, handleClear } from "../../redux/apiCartRedux";
const key =
  "pk_test_51MOn0RSCoZWqhGLghNbZGJNElj6EoHYkt03rWcPYTUpa1EUlMas5Rd2RY8Ta70ubtXaFVmchCdlqOPaXhkpYAQcO00i4y02duY";
export const Cart = () => {
  const dispatch = useDispatch();
  // const [product, setProduct] = useState({});
  const userId = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState();
  const [addressDetails, setAddressDetails] = useState(null);
  const [phoneDetails, setPhoneDetails] = useState(null);


  const handleQuantity = (type, e, CartId) => {
    e.preventDefault();
    const product = cart.products.find((item) => item._id === CartId);
    console.log(CartId);
    if (product) {
      const total = product.price;
      console.log(total);
      let newQuantity;
      if (type === "dec") {
        newQuantity = Math.max(product.quantity - 1);
      } else {
        newQuantity = Math.max(product.quantity + 1);
      }
      console.log(userId, { CartId, newQuantity, type, total });

      dispatch(UpdateCart({ userId, CartId, newQuantity, type, total }));
    }
  };
  const handleDelte = (e, CartId, total) => {
    console.log();
    e.preventDefault();
    try {
      dispatch(deleteCart({ userId, CartId, total }));
    } catch (error) {
      console.log(error);
    }
  };
  const ClearCart = () => {
    try {
      dispatch(handleClear({ userId }));
    } catch (err) {
      console.log(err);
    }
  };
  const makePayment = async (e, product) => {
    e.preventDefault();
    
    const stripe = await loadStripe(key);
    if (product) {
      const products = product.map((item) => item);
      const productbill = [{ products }];
     
      const res = await publicRequest.post("checkout/payment", products);
      const session = await res.data;
      const productorder=await res.data.lineItems
            const result = await stripe.redirectToCheckout({
        sessionId: session.id, 
      });
      if (result.error) {
        console.log(result.error);
      }else{
        const response = await publicRequest.post("checkout/stripe/webhook", {
          sessionId: session.id,
        });
      }
      console.log(result)
    }

    try {
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="">
      <form>
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
            <Link to="/cart" style={{color:"black",textDecoration:"none"}}>

              Shoping Bag
              </Link>
              </div>
            <div className="col-3  d-none d-lg-block"> 
            <Link to="/wishlist" style={{color:"black",textDecoration:"none"}}>

            Your Wishlist
            </Link>
            </div>
            <div className="col-lg-3 col-6 ">
              {" "}
              <button
                className="btn btn-dark rounded-0"
                style={{ border: "2px solid black" }}
                  onClick={(e) => {
                        makePayment(e, cart.products);
                      }}
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
                {cart.quantity > 0 && (
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

            <div className="row g-0">
              <div className="col-lg-8 col-sm-6 col-sm-12 ">
                {cart.quantity > 0 ? (
                  <>
                    {cart.products.map((item) => (
                      <>
                        <div className="container-fluid">
                          <div className="row mt-5">
                            <div className="col-lg-4 col-6 ">
                              {/* Image container */}
                              <img
                                src={item.image}
                                alt=""
                                className="img-fluid h-75"
                              />
                              {/* Image container */}
                            </div>
                            {/* {console.log(setQuant(item.quantity))} */}
                            <div className="col-lg-8 col-6 ">
                              {/* Product details */}
                              <div className="container-fluid">
                                <div className="row">
                                  <div
                                    className="col-lg-8 col-12"
                                    style={{ textAlignLast: "start" }}
                                  >
                                    {/* detail */}
                                    <div className="">
                                      Product{" : "}
                                      {item.title}
                                    </div>
                                    <div className="mt-4">
                                      Id {" : "} #{item._id.slice(0, 4)}
                                    </div>
                                    <div className="mt-4 d-flex">
                                      color{" : "}
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
                                    className="col-lg-4 col-12 "
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
                                      {console.log(item._id)}
                                      <button
                                        className="  text-end"
                                        style={{
                                          borderRadius: "0px",
                                          backgroundColor: "transparent",
                                          border: "0px",
                                        }}
                                      >
                                        <RemoveOutlined
                                          onClick={(e) =>
                                            handleQuantity("dec", e, item._id)
                                          }
                                        />{" "}
                                      </button>
                                      <input
                                        type="number"
                                        className="form-control "
                                        placeholder={item.quantity}
                                        disabled
                                      />
                                      <button
                                        className="text-end"
                                        style={{
                                          borderRadius: "0px",
                                          backgroundColor: "transparent",
                                          border: "0px",
                                        }}
                                      >
                                        {" "}
                                        <AddOutlined
                                          onClick={(e) =>
                                            handleQuantity("inc", e, item._id)
                                          }
                                        />
                                      </button>
                                    </div>

                                    <div
                                      className="text-center mt-3"
                                      style={{
                                        textAlignLast: "center",
                                        fontSize: "25px",
                                      }}
                                    >
                                      {item.price}
                                    </div>
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
                                    {/* quantity */}
                                  </div>
                                </div>
                              </div>

                              {/* Product details */}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
              {cart.total > 0 ? (
                <>
                  <div className="col-12 col-lg-4 border border-dark h-50">
                    <h1 className="fw-normal"> ORDER SUMMARY</h1>
                    <div className="subtotal m-1 p-1">
                      Subtotal ${cart.total.toFixed(2)}
                    </div>
                    <div className="subtotal m-1 p-1">
                      Estimated Shopping ${cart.total.toFixed(2)}
                    </div>
                    <div className="subtotal m-1 p-1">
                      Shipping Discount ${cart.total.toFixed(2) - 5}
                    </div>
                    <div className="subtotal m-1 p-1">
                      Total ${cart.total.toFixed(2) - 5}{" "}
                    </div>
                    {/* <Link to="/pay"> */}
                   
                    <button
                    options={{mode: 'shipping'}}
                      className="btn border-dark rounded-0 m-3 p-1"
                      onClick={(e) => {
                        makePayment(e, cart.products);
                      }}
                    >
                      {" "}
                      CHECKOUT
                    </button>
                    {/* <AddressElement options={{mode: 'shipping'}} /> */}
                    {/* </Link> */}
                  </div>
                </>
              ) : (
                <>
                  {/* <h1>No Product</h1> */}
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
