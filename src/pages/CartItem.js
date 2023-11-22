export default function CartItem() {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }, []);
    useEffect(() => {
        setTotal(cart.reduce((total, item) => total + item.price * item.quantity, 0));
    }, [cart]);
    return (
        <div className="cart-item">
            <div className="cart-item-header">
                <h3>Cart</h3>
                <div className="cart-item-header-right">
                    <button className="btn btn-primary" onClick={() => setLoading(true)}>Checkout</button>
                </div>
            </div>
        </div>  
        )      
}
