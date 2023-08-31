import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { publicRequest } from "../../requestMethod";
import { postOrder, handleClear } from "../../redux/apiCartRedux";
export const Sucess = () => {
  const [customer, setCustomer] = useState();
  const userId = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.products);

  useEffect(() => {
    const postOrder = async () => {
      const res = await publicRequest.post(
        `checkout/success` + location.pathname + location.search
      ); // Use sessionid here
      setCustomer(res.data.session);
    };

    if (location.search) {
      postOrder();
    }
  }, [location.search]);
  console.log(cartProducts.price);
  const handlepostOrder = async () => {
    if (customer.status === "complete") {
      const name = customer.customer_details;
      const paymentid = customer.payment_intent;
      const total = customer.amount_total / 100;
      const customerdetails = { name, paymentid, total };
      dispatch(
        postOrder({ productone: cartProducts, customerdetails, userId })
      ).then(dispatch(handleClear({ userId })));
      navigate("/orders");
    }
  };

  return (
    <div className="container-fluid text-center mt-5">
      <p>
        We appreciate your business! If you have any questions, please email
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
      <div className="contianer">
        <button
          onClick={handlepostOrder}
          style={{
            borderRadius: "0px",
            height: "40px",
            width: "10%",
            backgroundColor: "white",
            border: "2px solid teal",
          }}
        >
          your Orders
        </button>
      </div>
    </div>
  );
};
