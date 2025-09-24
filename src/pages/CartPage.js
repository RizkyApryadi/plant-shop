import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2>
      {cart.length === 0 ? <p>Keranjang kosong.</p> : (
        <div>
          <p>Total Barang: {totalItems}</p>
          <p>Total Harga: Rp {totalPrice.toLocaleString()}</p>
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <img src={item.image} alt={item.name} className="h-12" />
              <p>{item.name} (Rp {item.price.toLocaleString()})</p>
              <div className="flex gap-2">
                <button onClick={() => dispatch(decrease(item.id))}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => dispatch(increase(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(removeItem(item.id))} className="text-red-600">Hapus</button>
            </div>
          ))}
          <button className="mt-4 px-3 py-1 bg-blue-600 text-white rounded">Checkout (Segera Hadir)</button>
          <Link to="/products">
            <button className="ml-4 px-3 py-1 bg-gray-600 text-white rounded">Lanjutkan Belanja</button>
          </Link>
        </div>
      )}
    </div>
  );
}
