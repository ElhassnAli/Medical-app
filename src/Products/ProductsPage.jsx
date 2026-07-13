import { useQuery } from "@tanstack/react-query";
import apiProducts from "../utils/apiProducts";
import LoadingIndicator from "../components/LoadingIndicator";
import ProductCard from "../components/ProductCard";
import { Toaster } from "react-hot-toast";

function ProductsPage() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: apiProducts,
  });

  const products = data?.data || data || [];

  if (isLoading) return <LoadingIndicator />;

  if (error)
    return (
      <div className="w-full rounded-2xl border border-rose-100 bg-rose-50 p-6 text-center text-rose-600">
        We could not load the products right now.
      </div>
    );

  if (products.length === 0)
    return (
      <div className="h-fit rounded-2xl border border-rose-100 bg-rose-50 p-6 text-center text-rose-600">
        No products are available at the moment.
      </div>
    );

  return (
    <div className="space-y-8 w-full">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        {products.map((product) => (
          <ProductCard key={product.id || product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
