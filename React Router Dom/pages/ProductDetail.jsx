import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return <div>Product Detail {id}</div>;
};

export default ProductDetail;
