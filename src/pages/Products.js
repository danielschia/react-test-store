import {UseState} from "react";
import banner from "../assets/banner1.png";
import Item from "../components/Item";
import productList from "../products.json";

const bottles = productList.bottles || [];

export default function Products() {
    return (
        <div className="content-product">
            <header>
                <div className="user">
                    <span>Usuario</span>
                </div>
            </header>
            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>
            <section className="main-products">
                {bottles.map((p, index) => (
                    <Item props={{ product: p }} />
                ))}
            </section>
            <footer></footer>
        </div>
    );
}