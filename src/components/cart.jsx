import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Panel from "./ui/Panel";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart,
  );

  const handleDecrease = (id) => dispatch(cartActions.decreaseQuantity(id));
  const handleIncrease = (item) => dispatch(cartActions.addToCart(item));
  const handleRemove = (id) => dispatch(cartActions.removeFromCart(id));
  const handleClear = () => dispatch(cartActions.clearCart());

  const whatsappMessage = encodeURIComponent(
    `Hello,

I'd like to place an order from Medical Store:

${items
  .map(
    (item, index) =>
      `${index + 1}. ${item.title} | Qty: ${item.quantity} | EGP ${item.price.toFixed(
        2,
      )}`,
  )
  .join("\n")}

Order total: EGP ${totalAmount.toFixed(2)}

Please confirm availability and delivery details.

Thanks!`,
  );
  const whatsappUrl = `https://wa.me/201097203319?text=${whatsappMessage}`;

  if (totalQuantity === 0) {
    return (
      <div className="mx-auto w-full max-w-4xl space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/70">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">
            Your cart is empty
          </h1>
          <p className="text-slate-600">
            Add products from the Products page and they will appear here with
            live quantity controls.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/products"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <Panel className="p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Cart summary
            </h1>
            <p className="text-sm text-slate-500">
              {totalQuantity} item(s) in your cart
            </p>
          </div>
          <button
            onClick={handleClear}
            className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
          >
            Clear cart
          </button>
        </div>
      </Panel>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              onRemove={handleRemove}
            />
          ))}
        </div>

        <Panel className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Order summary
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Items</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span>EGP {totalAmount?.toFixed(2)}</span>
            </div>
            <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-300">
                Total
              </div>
              <div className="mt-2 text-3xl font-semibold">
                EGP {totalAmount?.toFixed(2)}
              </div>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-3xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Send order via WhatsApp
          </a>
        </Panel>
      </div>
    </div>
  );
}

export default Cart;
