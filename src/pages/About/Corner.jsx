import cornerUrl from "@/assets/about/corner.png";
export default function Corner() {
  return (
    <section className="container-fluid mx-auto px-4 py-10 md:px-0 md:py-20 lg:rounded-xl">
      {/* flex content */}
      <div className="flex flex-col-reverse md:flex-row md:items-center">
        {/* item-1 */}
        <div className="content-wrapper w-full md:w-1/2 space-y-8 md:pr-4 pt-4 md:pt-0">
          <h1 className="text-3xl md:text-5xl font-medium text-titleColor pt-6 md:pt-0">
            We want to get local identification in every corner of the world in
            this era of global citizenship.
          </h1>
          <p className="text-subTitleColor pr-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>
        {/* item-2 */}
        <div className="relative md:flex justify-center w-full rounded-xl md:w-1/2 overflow-hidden md:pl-6 pr-6 pb-6">
          <div className="absolute right-0 bottom-0 size-52 rounded-xl bg-brandOrange mix-blend-multiply"></div>
          <img
            src={cornerUrl}
            className="object-contain rounded-xl md:w-7/10 mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
