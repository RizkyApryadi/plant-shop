import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector(state => state.cart.items);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="flex justify-between items-center bg-green-700 text-white p-4">
      <Link to="/products"><h1 className="font-bold">GreenLeaf Store</h1></Link>
      <nav className="flex gap-4">
        <Link to="/products">Produk</Link>
        <Link to="/cart">Keranjang ({totalItems})</Link>
      </nav>
    </header>
  );
}
