import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { truncate } from "@/utils/truncate";
import ProductCard from "./components/products/ProductCard";
import InfoHeader from "./components/infoHeader/InfoHeader";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Container>
        <InfoHeader />
        <div className="w-full my-6 flex flex-col items-center">
          <h1 className="text-2xl text-zinc-700 font-semibold uppercase">
            novidades
          </h1>
          <div className="h-1 w-12 m-2 bg-zinc-700"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 my-6">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  )
}
