import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-2xl shadow-slate-200/70">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">
            Medical care made easier
          </p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Professional medical products in one place
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore our carefully curated medical range on the Products page.
            Add items to your cart, update quantities instantly, and review your
            order before checkout.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/products"
            className="inline-flex rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700"
          >
            Browse Products
          </Link>
          <Link
            to="/cart"
            className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            View Cart
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
