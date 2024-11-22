import energyUrl from "@/assets/home/energy.png";
export default function Energy() {
  return (
    <section className="flex flex-col md:flex-row my-8 md:mt-28 md:h-96">
      {/* item-1 */}
      <div className="w-full md:w-1/2">
        <img src={energyUrl} className="md:object-cover md:w-full md:h-full" />
      </div>
      {/* item-2 */}
      <div className="w-full md:w-1/2 md:px-4 bg-brandOrange md:flex flex-col items-center justify-center">
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl ml-4 py-4 md:px-0 font-bold text-white">
            Energy of a start-up combined with 30 years of experience.
          </h1>
          <button className="rounded-full text-brandOrange bg-white px-6 py-2 mb-6 ml-4 md:mt-8 md:mb-0 block self-start">
            See all services
          </button>
        </div>
      </div>
    </section>
  );
}
