function MaintenanceSectionHeader({ title, description }) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl lg:text-4xl">
        {title}
      </h3>
      {description ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default MaintenanceSectionHeader;
