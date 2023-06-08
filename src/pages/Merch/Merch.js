import merch from "../../data/merchInfo.json";
import Listing from "./Listing";
import Navbar from "../../components/Navbar";

export default function Merch() {
  return (
    <div>
      <Navbar />
      <div className="flex-container">
        <ul>
          {merch.map((listing, i) => (
            <Listing key={i} product={listing} />
          ))}
        </ul>
      </div>
    </div>
  );
}
