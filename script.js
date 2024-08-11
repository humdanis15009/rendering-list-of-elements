import { createRoot } from "react-dom/client";

import "./style.css";

// const card = (
//   <div className="card">
//     <img
//       src= "https://www.apple.com/in/iphone/home/images/overview/consider_modals/environment/dd_environment_trade_in__ffgz1k6741e2_large.jpg"
//       alt="iphone"
//     />
//     <div className="card-content">
//     <h3>Iphone 13</h3>
//     <p>Apple</p>
//     <p><b>₹50,000</b></p>
//     </div>
//   </div>
// );

function Card(key, title, image, brand, price) {
  console.log(key);
  return (
    <div className="card" key={key}>
      <img
        src={image}
        alt="iphone"
      />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

const container = [Card(1), Card(2), Card(3), Card(4), Card(5), Card(6)];

const root = createRoot(document.getElementById("root"));

root.render(<div className="container">{container}</div>);
console.log("Hello World!!!");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const container2 = data.products.map((product) => {
      return Card(product.id, product.title, product.thumbnail, product.brand, product.price);
    });

    root.render(<div className="container">{container2}</div>);
  });
