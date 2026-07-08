import Panel from "./ui/Panel";

function CartItem({ item, onDecrease, onIncrease, onRemove }) {
  return (
    <Panel className="bg-slate-50 border-slate-100 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-3xl bg-white shadow-sm">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-500">
                No image
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="text-sm text-slate-500">
              EGP {item.price?.toFixed(2)} each
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
            <button
              onClick={() => onDecrease(item.id)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-semibold text-slate-900">
              {item.quantity}
            </span>
            <button
              onClick={() => onIncrease(item)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white transition hover:bg-slate-700"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <p className="text-sm text-slate-600">
            Item total: EGP {item.totalPrice?.toFixed(2)}
          </p>
          <button
            onClick={() => onRemove(item.id)}
            className="text-sm font-semibold text-rose-600 transition hover:text-rose-700"
          >
            Remove
          </button>
        </div>
      </div>
    </Panel>
  );
}

export default CartItem;
