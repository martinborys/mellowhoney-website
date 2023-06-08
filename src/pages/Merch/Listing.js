export default function Listing({ product }) {
  return (
    <div>
      <img
        src={`../../assets/${product.imageFile.front}`}
        alt={product.imageFile.front}
      />
      <div>
        <h2>{product.name}</h2>
        <span>{product.priceInCents}</span>
      </div>
    </div>
  );
}
