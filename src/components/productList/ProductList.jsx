import "./producList.css";
import Product from "../product/Product";
import React, {products} from "../../data";

const ProductList = () => {
    return(
        <div className="p1">
            <div className="p1-texts">
                <h1 className="p1-title">Inspire in Lama's Portfilio</h1>
                <p className="p1-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque! Nihil delectus consequatur similique, aliquid perspiciatis, nobis quod doloribus porro temporibus atque omnis, est unde tempora reiciendis laborum eius fuga.e
                </p>
            </div>
            <div className="p1-list">
                {products.map((item)=>(
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;