import { useRecoilValue } from "recoil";
import { cart } from "../recoil/atom";

function Navbar() {
  const cartState = useRecoilValue(cart);
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand" href="#"></span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page" href="#">
                Home
              </span>
            </li>
          </ul>
          <button
            className="btn btn-outline-success mx-md-1 mt-md-0 mt-1  position-relative"
            type="submit"
          >
            <i className="fa fa-shopping-cart mx-1"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartState.length}<span class="visually-hidden">unread messages</span>
            </span>
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
