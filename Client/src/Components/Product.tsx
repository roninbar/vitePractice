function Product({
  name,
  description,
  price,
  imageUrl,
}: {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}) {
  return (
    <>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
      <img src={imageUrl} alt="" />
    </>
  );
}
export default Product;
