import { useRecoilValue } from "recoil";
import "./App.css";
import CatCard from "./components/category_card";
import Navbar from "./components/navabar";
import ProductCard from "./components/product_card";
import Footer from "./components/footer";
import { Category, Products, fliterCat } from "./recoil/atom";
import { useEffect, useState } from "react";
function App() {
  const filter = useRecoilValue(fliterCat);
  const category = useRecoilValue(Category);
  const [filterData, setFilterData] = useState([...category]);
  const products = useRecoilValue(Products);
  useEffect(() => {
    if (filter) {
      console.log(filter);
      const list = category.filter((e) => e.key === filter);
      setFilterData([...list]);
    } else {
      setFilterData([...category]);
    }
  }, [filter, category]);
  return (
    <div className="container">
      <Navbar />
      <div class="jumbotron banner ">
        <div className="">
          <h1 class="display-4">Xbox</h1>
          <p class="lead p-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p class=" price-lead">$600</p>
          <button className="btn btn-primary red">Shop Now</button>
        </div>
        <div className="d-none d-lg-block">
          <img src="images/bannerPic.png" alt="" /> 
          {/* TODO: Change the banner inmage */}
        </div>
      </div>
      <CatCard />
      {filterData.map((item, idx) => (
        <div key={idx}>
          <h3 className="mt-1">{item.label}</h3>
          <div className="mx-auto mt-2 row ">
            {products.map((ele, id) => (
              <>
                {ele.category === item.key && (
                  <div key={id} className="col-md-4 p-2">
                    <ProductCard
                      label={ele.label}
                      item_key={ele.key}
                      desc={ele.des}
                      price={ele.price}
                      image={ele.image}
                      category={ele.category}
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default App;
