import { useDispatch, useSelector } from "react-redux";
import "./Order.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addtoWishlistApi } from "../../redux/apiCartRedux";
export const Order = () => {
  const dispatch=useDispatch()
  const order = useSelector((state) => state.order);
  const userId = useSelector((state) => state.user.currentUser);
  const handleCart=(e,item)=>{
e.preventDefault();
console.log(item)
console.log(userId)

if(userId){
  dispatch(addtoWishlistApi({ productadd: item, userId: userId }));
}
  }
  return (
    <div>
      {order.orderdetails.length > 0 ? (
        <>
          {order.orderdetails.map((orderitem) => (
            <>
              <div className="container mt-5  maincontainer ">
                <div className="row header-row">
                  <div className="container-fluid detailcontone">
                    <div className="col-lg-3 col-md-12 col-sm-12 orderdetails">
                    Order Placed:{" "}
  {new Date(orderitem.timestamps).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
                                          </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 orderdetails">
                      Total:{orderitem.amount}
                    </div>
                    <div
                      className="col-lg-5 col-md-12 col-sm-12 orderdetails"
                      data-bs-toggle="tooltip"
                      title={`Address:\n${orderitem.address.line1}\n${orderitem.address.line2}\n${orderitem.address.city}\n${orderitem.address.state}\n${orderitem.address.country}  ${orderitem.address.postal_code}\n${orderitem.phone}
                        `}
                    >
                      Ship To:{orderitem.name}
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 orderdetails">
                      Details: {orderitem.transcitionId.substring(0, 12)}
                    </div>
                  </div>
                </div>
                {orderitem.products.map((item) => (
                  <div className="row order-details-row">
                    <div className="col-lg-2 col-md-12 col-sm-12 imgcont text-center">
                      <img
                        className="img-fluid main_photo w-100"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12">
                      <div className="detailcont">
                        <div className="d-flex">
                          <h1>{item.title}</h1>
                        </div>
                        <div className="d-flex">
                          <p
                            style={{ textAlignLast: "start", display: "flex" }}
                          >
                            color:
                            <span
                              style={{
                                borderRadius: "50px",
                                backgroundColor: `${item.color}`,
                                height: "20px",
                                width: "20px",
                                margin: "2px",
                                marginLeft: "5px",
                                border: "solid 1px black",
                              }}
                            ></span>
                          </p>

                          <span className="justify-content-between px-3">
                            Size:{"  "}
                            {item.size}
                          </span>
                        </div>

                        <div className="container-fluid mt-1">
                          <button
                            className="btnprod"
                            style={{
                              borderRadius: "0px",
                              backgroundColor: "white",
                              border: "2px solid teal",
                            }}
                          >
                            <Link
                              to={`/product/${item.productId}`}
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              View Your Item
                            </Link>
                          </button>
                          <button
                            className="btnprod"
                            style={{
                              borderRadius: "0px",
                              backgroundColor: "white",
                              border: "2px solid teal",
                            }}
                            onClick={(e)=>{handleCart(e,item)}}
                          >
                            Add to Whishlist
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 ">
                      <div className="details">
                        <div className="d-flex details mt-2">
                          <h6>Price:{item.price}</h6>
                        </div>
                        <div className="d-flex details">
                          <span>Quantity:{item.quantity}</span>
                        </div>
                        <div className="d-flex details">
                          <span>Status:{orderitem.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
