import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-200 text-center">
      <h1 className="text-4xl font-bold mb-4">GreenLeaf Store</h1>
      <p className="mb-4">Tempat terbaik membeli tanaman hias untuk rumahmu 🌱</p>
      <Link to="/products">
        <button className="px-4 py-2 bg-green-600 text-white rounded">Mulai Belanja</button>
      </Link>
    </div>
  );
}
