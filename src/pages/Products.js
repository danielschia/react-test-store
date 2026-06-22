import { useEffect, useState } from "react";
import banner from "../assets/banner1.png";
import Item from "../components/Item";

export default function Products() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5001/produtos');
            const data = await response.json();
            setProductList(data.produtos);
        }
        fetchData();
    }, [])
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
                {productList.map((p, index) => (
                    <Item key={index} product={p} />
                ))}
            </section>
            <footer></footer>
        </div>
    );
}