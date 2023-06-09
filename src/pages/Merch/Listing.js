import "./merch.css";

export default function Listing({ product, handleClick }) {
  return (
    <div className="product-container" onClick={handleClick}>
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
