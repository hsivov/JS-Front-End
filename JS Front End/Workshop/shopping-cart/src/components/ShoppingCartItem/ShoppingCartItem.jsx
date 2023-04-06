import { ReactComponent as BuyIcon } from "../../assets/buy-icon.svg";
import { ReactComponent as RemoveIcon } from '../../assets/remove-icon.svg';
import { buyProduct, removeProduct } from "../../services/product-service";
import { toast } from 'react-toastify';

function ShoppingCartItem(props) {
    const { name, cost, imgUrl, isBought, _id, setRefreshProducts } = props;
    const inlineStyles = {
        textDecoration: isBought ? 'line-through' : 'none'
    };

    const handleBuyItem = () => {
        buyProduct(_id)
        .then(() => {
            setRefreshProducts({});
            toast('Product has been added to cart!', { type: 'success', theme: "colored", hideProgressBar: true});
        })
        .catch((err) => {
            toast('Something went wrong', {type: 'error', theme: 'colored', hideProgressBar: true});
        });
    }

    const handleRemoveProduct = () => {
        removeProduct(_id)
        .then(() => {
            setRefreshProducts({});
            toast('Product has been deleted!', { type: 'warning', theme: "colored", hideProgressBar: true});
        })
        .catch((err) => {
            toast('Something went wrong', {type: 'error', theme: 'colored', hideProgressBar: true});
        });
    }

    return (
        <article style={inlineStyles} className="shopping-cart__item-container">
            <img className="shopping-cart__item-img" src={imgUrl} alt="Item" />
            <p className="shopping-cart__item-name">{name}</p>
            <p className="shopping-cart__item-cost">{cost.toFixed(2)}$</p>
            <div className="shopping-cart__item-actions">
                {
                    !isBought && (
                        <button onClick={handleBuyItem} className="shopping-cart__item--buy-btn">
                            <span>Buy</span>
                            <BuyIcon />
                        </button>
                    )
                }

                <button onClick={handleRemoveProduct} className="shopping-cart__item--remove-btn">
                    <span>Remove</span>
                    <RemoveIcon />
                </button>
            </div>
        </article>
    )
}

export default ShoppingCartItem;