import { useRecoilState } from "recoil";
import { fliterCat } from "../recoil/atom";

function CatCard() {
  const [filter, setfilter] = useRecoilState(fliterCat);
  const filterData = (key) => {
    if (filter === key) setfilter(null);
    else setfilter(key);
    console.log('filteer')
  };
  return (
    <div className="row mt-4 mx-auto">
      <div className="col-md m-1 p-2 custom-cat-card orange" onClick={() => filterData('watch')}>
        <h3 className="my-auto">Watch</h3>
        <img src="images/watch.jpg" alt="" />
        {/* TODO: To chnage the cat image change here */}
      </div>
      <div className="col-md m-1 p-2 custom-cat-card blue" onClick={() => filterData('bag')}>
        <h3 className="my-auto">Bag</h3>
        <img src="images/bag1.jpg" alt="" />
        {/* TODO: To chnage the cat image change here */}
      </div>
      <div className="col-md m-1 p-2 custom-cat-card red" onClick={() => filterData('shoes')}>
        <h3 className="my-auto">Shoes</h3>
        <img src="images/shoe2.jpg" alt="" />
        {/* TODO: To chnage the cat image change here */}
      </div>
    </div>
  );
}

export default CatCard;
