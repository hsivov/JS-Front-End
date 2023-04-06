import { useState } from "react";
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import { addProductToCart } from "../../services/product-service";
import { toast } from "react-toastify";

function ShoppingCartForm({setRefreshProducts}) {
    let [itemName, setItemName] = useState('');
    let [itemCost, setItemCost] = useState('');
    let [itemImgUrl, setItemImgUrl] = useState('');

    const addBtnHandler = (event) => {
        event.preventDefault();
        addProductToCart(itemName, itemCost, itemImgUrl)
            .then(() => {
                setItemName('');
                setItemCost('');
                setItemImgUrl('');
                setRefreshProducts({});
                toast('Product Added!', { type: 'info', theme: "colored", hideProgressBar: true});
            })
    }

    return (
        <form>
            <div className="shopping-cart__form-control">
                <input type="text" name="item-name" value={itemName} placeholder="Name" onChange={(e) => setItemName(e.target.value)} /></div>
            <div className="shopping-cart__form-control">
                <input type="number" name="item-cost" value={itemCost} placeholder="Cost" onChange={(e) => setItemCost(e.target.value)} /></div>
            <div className="shopping-cart__form-control">
                <input type="text" name="item-image" value={itemImgUrl} placeholder="Place image url here" onChange={(e) => setItemImgUrl(e.target.value)} /></div>
            <div className="shopping-cart__form-control">
                <button disabled={!itemName || !itemCost || !itemImgUrl} type="submit" onClick={addBtnHandler}>
                    <span>Add</span>
                    <AddIcon />
                </button>
            </div>
        </form>
    )
}

export default ShoppingCartForm;