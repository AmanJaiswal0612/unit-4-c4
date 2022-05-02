import { Flex } from "./Styled";

export const ProductCard = ({ brand,title,image,category,price,id}) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        {/* display item info here  */}
        <h1>{title}</h1>
        <img src={image}/>
        <h2>{brand}</h2>
      </Flex>
    </>
  );
};
