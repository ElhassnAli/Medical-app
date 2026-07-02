const highlights = [
  {
    title: "Premium Medical Devices",
    text: "We offer reliable medical equipment for diagnosis, treatment, and patient care in clinics and hospitals.",
  },
  {
    title: "Expert Guidance",
    text: "Our team helps you select the right devices and equipment that match your medical needs and budget.",
  },
  {
    title: "Fast Supply & Delivery",
    text: "We provide efficient delivery and dependable support to keep your medical practice running smoothly.",
  },
];

const gallery = [
  {
    title: "Diagnostic Equipment",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Medical Devices",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Patient Care Tools",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
  },
];

function AboutUsPage() {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-linear-to-br from-teal-700 via-cyan-700 to-sky-800 p-6 text-white sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">
              About our company
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Supplying modern medical equipment for better care
            </h1>
            <p className="mt-4 text-sm leading-7 text-cyan-50/90 sm:text-base">
              We specialize in selling high-quality medical devices and
              equipment for hospitals, clinics, and healthcare providers. From
              diagnostic tools to essential care devices, we help you find
              reliable solutions that support accurate treatment and patient
              comfort.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/90">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80"
              alt="Medical professional with modern equipment"
              className="h-72 w-full rounded-3xl object-cover sm:h-80"
            />
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800">
                Why healthcare providers choose us
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                We combine premium medical equipment, trusted product quality,
                and professional support to help clinics and hospitals equip
                their teams with confidence.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[1.25rem] bg-white shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-36 w-full object-cover"
                  />
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;
