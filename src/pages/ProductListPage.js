import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { products } from '../assets/products';

export default function ProductListPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isInCart = (id) => cart.find(item => item.id === id);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Produk</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="border rounded p-4 text-center">
            <img src={p.image} alt={p.name} className="h-32 mx-auto mb-2" />
            <h3 className="font-bold">{p.name}</h3>
            <p>Rp {p.price.toLocaleString()}</p>
            <button
              className="mt-2 px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
              onClick={() => dispatch(addToCart(p))}
              disabled={isInCart(p.id)}
            >
              {isInCart(p.id) ? 'Sudah Ditambahkan' : 'Tambah ke Keranjang'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
