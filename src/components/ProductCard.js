const ProductCard = ({ name, price }) => (
  <div style={{ border: '1px solid pink', margin: '10px', padding: '10px' }}>
    <h4>{name}</h4>
    <p>{price}</p>
  </div>
);
export default ProductCard;