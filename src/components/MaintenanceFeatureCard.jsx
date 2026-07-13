function MaintenanceFeatureCard({
  image,
  title,
  description,
  reverse = false,
}) {
  return (
    <div className="mb-8 last:mb-0 lg:mb-12">
      <div
        className={`flex flex-col justify-between gap-8 rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_15px_45px_rgba(15,23,42,0.08)] sm:p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full overflow-hidden rounded-3xl shadow-lg lg:w-[48%]">
          <img
            src={image}
            alt={title}
            className="h-72 w-full object-cover sm:h-80 lg:h-96 object-center"
          />
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-[46%]">
          <h3 className="text-xl font-semibold text-slate-800 sm:text-2xl">
            {title}
          </h3>
          <p className="text-sm leading-8 text-slate-600 sm:text-base">
            {description}
          </p>

         
        </div>
      </div>
    </div>
  );
}

export default MaintenanceFeatureCard;
