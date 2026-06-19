import {useState} from 'react';

export default function Item({props}) {

    const [quantity, setQuantity] = useState(1);
    const [valueButton, setValueButton] = useState(true);
    const product = props.product || {};

    const minus =() => {
        (quantity -1) === 1 ? setValueButton(true) : setValueButton(false);
        if (quantity !== 1) {
            setQuantity(quantity - 1);
        }
    }

    const plus =() => {
        setQuantity(quantity + 1);
        setValueButton(false);
    }

    const buyProduct = () => {
        if (window.confirm(`Preço Final: R$ ${Math.round(product.price * quantity * 100) / 100}`)) {
            alert('Compra realizada com sucesso!');
            setQuantity(1);
        }
    }

    return (
        <article className="product">
            <img src={product.image && product.image[0]} alt={product.title} />
            <h3 className="price-product">
                R$ <span>{product.price}</span>
            </h3>
            <p className="name-product">{product.title}</p>
            <div className="quantity">
                <span>Quantidade:</span>
                <button disabled={valueButton} onClick={minus}>-</button>
                <span>{quantity}</span>
                <button onClick={plus}>+</button>
            </div>
            <button className="buy" onClick={buyProduct}>Comprar</button>
        </article>
    );
}
            