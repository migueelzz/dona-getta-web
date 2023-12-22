import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { truncate } from "@/utils/truncate";
import ProductCard from "./components/products/ProductCard";
import InfoHeader from "./components/InfoHeader";
import Title from "./components/Title";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Container>
        <InfoHeader />
          <Title>
            novidades
          </Title>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 my-6">
            {products.map((product: any) => {
              return <ProductCard key={product.id} data={product} />;
            })}
          </div>
      </Container>
    </div>
  )
}
