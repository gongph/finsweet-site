import experienceUrl from "@/assets/home/experience.png";
import timeCircleurl from "@/assets/time-circle.svg";

export default function Experience() {
  return (
    <section className="container-fluid mx-auto flex flex-col-reverse md:flex-row px-4 py-10 gap-y-6 md:gap-y-0 md:gap-x-4">
      {/* left */}
      <div className="w-full md:w-1/2 md:my-20">
        <h1 className="text-3xl md:text-4xl text-titleColor font-medium md:max-w-md">
          The energy of a start-up combined with 30 years of experience.
        </h1>
        <p className="text-subTitleColor md:max-w-sm pt-4 pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
          {/* flex-item-1 */}
          <div className="item-1 w-full md:w-1/2 space-y-3">
            <h1 className="text-3xl text-brandOrange font-medium">15+</h1>
            <h2 className="text-xl text-titleColor font-medium">
              Awards received
            </h2>
            <p className="text-subTitleColor text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
              amet eros elit et.
            </p>
          </div>
          {/* flex-item-2 */}
          <div className="item-2 w-full md:w-1/2 space-y-3">
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
      </div>
      {/* right */}
      <div className="w-full md:w-1/2 md:flex justify-center md:my-10 relative rounded-xl">
        <div className="mix-blend-multiply absolute w-28 left-0 h-full bg-brandOrange rounded-tl-xl rounded-bl-xl"></div>
        <div className="time-circel absolute right-0 -top-6 md:-right-[70px] md:-top-[45px] w-12 h-12 md:w-[116px] md:h-[113px]">
          <img src={timeCircleurl} className="object-cover md:w-3/4" />
        </div>
        <img
          src={experienceUrl}
          className="mix-blend-multiply object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
