import {
  LocationOn,
  Phone,
  MailOutlined,
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Footer = () => {
  const userId = useSelector((state) => state.user.currentUser);
  const women = "women";
  const men="men";
  const Accessories="Accessories";
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-4 container-fluid">
          <h4>
          <Link
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
            Shop
            </Link>
            </h4>
          <span style={{ textAlignLast: "start" }}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original
          </span>
          <div className="row p-3">
            <div className="col-3" style={{ color: "blue" }}>
              <Facebook style={{ borderRadius: "50px", fontSize: "40px" }} />
            </div>
            <div className="col-3">
              <Instagram
                style={{ borderRadius: "50px", fontSize: "40px", color: "red" }}
              />
            </div>
            <div className="col-3">
              <Twitter
                style={{
                  color: "white",
                  backgroundColor: "blue",
                  borderRadius: "50px",
                  fontSize: "40px",
                }}
              />
            </div>
            <div className="col-3">
              <Pinterest
                style={{
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "50px",
                  fontSize: "40px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-4 container-fluid d-none d-lg-block">
        <div className="container text-center">

          <h4>Useful Links</h4>
        </div>
          <div
            className="row container-fluid"
            style={{ textAlignLast: "center" }}
          >
            <div className="col-lg-6 col-sm-6  " style={{ textAlign: "start" }}>
            <Link
                to={`/`}
                style={{ textDecoration: "none", color: "black" }}
              >
              <a>
                <span>Home</span>
              </a>
              </Link>
              <br />
              <Link
                to={`/products/${men}`}
                style={{ textDecoration: "none", color: "black" }}
              >
              <a>
                <span>Man Fashion</span>
              </a>
              </Link>
              <br />
              <Link
                to={`/products/${Accessories}`}
                style={{ textDecoration: "none", color: "black" }}
              >
              <a>
                <span>Accessories</span>
              </a>
              </Link>
              <br />
              <Link
                to={`/orders`}
                style={{ textDecoration: "none", color: "black" }}
              >
              <a>
                <span>Order Tracking</span>
              </a>
              </Link>
              <br />
              <Link
                to="/wishlist"
                style={{ textDecoration: "none", color: "black" }}
              >
              <a>
                <span>Wishlist</span>
              </a>
              </Link>
              <br />
            </div>

            <div
              className="col-lg-6 col-sm-6  "
              style={{ textAlignLast: "center" }}
            >
              <Link
                to={`/cart`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <a>
                  <span>Cart</span>
                </a>
                <br />
              </Link>
              <Link
                to={`/products/${women}`}
                style={{ textDecoration: "none", color: "black" }}
              >
              <a>
                <span>Women Fashion</span>
              </a>

              </Link>
              <br />
              <Link
                to={`/account/${userId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <a>
                  <span>My Account</span>
                </a>
                <br />
              </Link>
              <Link
                to="/wishlist"
                style={{ textDecoration: "none", color: "black" }}
              >
                <a>
                  <span>Wishlist</span>
                </a>
                <br />
              </Link>

              <a>
                <span>Term</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 container-fluid justify-item-start">
          <h4>Contact</h4>
          <div style={{ textAlignLast: "start" }}>
            <p>
              <LocationOn />
              622 Dixie PAth,South Tabinchester 98336
            </p>
            <p>
              <Phone />
              +123456789
            </p>
            <p>
              <MailOutlined />
              contact@shop.dev
            </p>
          </div>
          <img
            src="https://freepngimg.com/thumb/credit_card/25504-6-major-credit-card-logo-transparent-background.png"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};
