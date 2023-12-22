import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface IParams {
    productId?: string;
}

const Product = ({params} : {params: IParams}) => {
    console.log('params', params);
    
    return ( 
        <div className="mt-6 p-2 md:p-8">
            <Container>
                <ProductDetails product={product} />
            </Container>
        </div>
    );
}
 
export default Product;