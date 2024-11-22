export default function Experience() {
  return (
    <section className="container-fluid mx-auto pt-0 md:pt-16 pb-2 md:pb-4">
      {/* title */}
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <h1 className="text-titleColor text-3xl font-medium px-4 md:px-0 max-w-md">
          The energy of a start-up combined with 30 years of experience
        </h1>
        <p className="text-subTitleColor px-4 md:px-0 mt-4 md:mt-0 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
      </div>
      {/* flex items */}
      <div className="flex flex-col md:flex-row justify-center px-4 md:px-4 space-y-4 md:space-y-0 md:space-x-10">
        {/* item-1 */}
        <div className="item-1 w-full space-y-3">
          <h1 className="text-3xl text-brandOrange font-medium">15+</h1>
          <h2 className="text-xl text-titleColor font-medium">
            Awards received
          </h2>
          <p className="text-subTitleColor text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        {/* item-2 */}
        <div className="item-2 w-full space-y-3">
          <h1 className="text-3xl text-brandOrange font-medium">34</h1>
          <h2 className="text-xl text-titleColor font-medium">Employees</h2>
          <p className="text-subTitleColor text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        {/* item-3 */}
        <div className="item-2 w-full space-y-3">
          <h1 className="text-3xl text-brandOrange font-medium">500+</h1>
          <h2 className="text-xl text-titleColor font-medium">
            Custom solutions
          </h2>
          <p className="text-subTitleColor text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        {/* item-4 */}
        <div className="item-2 w-full space-y-3">
          <h1 className="text-3xl text-brandOrange font-medium">500+</h1>
          <h2 className="text-xl text-titleColor font-medium">
            Clients served
          </h2>
          <p className="text-subTitleColor text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
      </div>
    </section>
  );
}
