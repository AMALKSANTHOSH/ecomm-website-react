import { useRecoilState } from "recoil";
import { cart } from "../recoil/atom";

function ProductCard(props) {
  const [cartState, setCartState] = useRecoilState(cart);
  const addTocart = () => {
    setCartState([...cartState, props.item_key]);
  };
  const remove = () => {
    const list = cartState.filter((e) => e !== props.item_key);
    setCartState([...list]);
  };
  return (
    <div className="card custom-shadow">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title">{props.label}</h5>
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
        <p style={{ fontSize: 18, fontWeight: 400 }}>{props.desc}</p>
        <p style={{ fontSize: 24, fontWeight: 500 }}>${props.price}</p>
        {cartState.includes(props.item_key) ? (
          <>
            <button onClick={remove} className="btn btn-outline-danger">
              Remove
            </button>
          </>
        ) : (
          <>
            <button onClick={addTocart} className="btn btn-outline-primary">
              Add To Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
