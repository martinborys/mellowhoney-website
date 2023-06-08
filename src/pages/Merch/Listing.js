import "./merch.css";

export default function Listing({ product }) {
  return (
    <div className="product-container">
      <img
        src={`../../assets/${product.imageFile.front}`}
        alt={product.imageFile.front}
        width={"200px"}
        height={"200px"}
      />
      <div className="product-details">
        <h2>{product.name}</h2>
        <span>{`$${product.priceInDollars}`}</span>
      </div>
    </div>
  );
}
