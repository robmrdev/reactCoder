import './CartWidget.css'

const CartWidget = () => {
    const imgCart = "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png";
  return (
    <div>
        <img className='imgCart' src="[imgCart]" alt="ShoppingCart" />
        <strong>10</strong>
    </div>
  )
}

export default CartWidget