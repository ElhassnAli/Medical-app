function ProductCard({ product }) {
  const { name, description, price, discount, image } = product || {};

  const discountValue = Number(discount) || 0;
  const hasDiscount = discountValue > 0;
  const finalPrice = hasDiscount
    ? price - (price * discountValue) / 100
    : price;

  return (
    <div className="group overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-[0_16px_60px_rgba(109,40,217,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(109,40,217,0.18)]">
      <div className="relative h-56 overflow-hidden bg-linear-to-br from-violet-100 via-fuchsia-50 to-white p-3 sm:h-60">
        {image ? (
          <img
            src={image}
            alt={name || "Product image"}
            className="h-full w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center rounded-[18px] border border-dashed border-violet-200 bg-white/80 text-sm font-medium text-violet-500">
            No image available
          </div>
        )}

        {hasDiscount && (
          <span className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-lg">
            {discountValue}% off
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-tight text-slate-800">
              {name || "Premium Product"}
            </h3>
            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600">
              New
            </span>
          </div>

          <p className="text-sm leading-6 text-slate-600">
            {description ||
              "A thoughtfully crafted product made for comfort and care."}
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Price
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="text-xl font-bold text-slate-900">
                  ${finalPrice?.toFixed(2)}
                </span>
                {hasDiscount && (
                  <span className="text-sm text-slate-400 line-through">
                    ${price?.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <button className="rounded-full bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
