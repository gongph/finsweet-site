import stragetyUrl from "@/assets/servics/stragety.png";
import digUrl from "@/assets/servics/dig.png";

export default function Clients() {
  return (
    <>
      {/* section 1 */}
      <section className="container-fluid mx-auto flex flex-col-reverse md:flex-row-reverse justify-between px-4 py-10 md:pt-6 gap-y-6 md:gap-y-0 md:gap-x-16">
        {/* left */}
        <div className="w-full md:my-20">
          <h1 className="text-3xl md:text-4xl text-titleColor font-medium md:max-w-md">
            Business strategy
          </h1>
          <p className="text-subTitleColor md:max-w-md pt-4 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
            odio, sagittis quis ornare quis.met, consectetur adipiscing elit.
            Aliquam leo odio, sagittis quis ornare quis.
          </p>
          <ul className="list-disc list-inside text-subTitleColor text-sm md:leading-6">
            <li>Cost strategy</li>
            <li>Differentiated product or service strategy</li>
            <li>Focus on a niche strategy</li>
          </ul>
        </div>
        {/* right */}
        <div className="w-full md:flex justify-center md:my-10 relative rounded-xl pl-4 md:pl-0">
          <div className="mix-blend-multiply absolute size-20 left-0 top-1/3 md:-left-10 md:top-1/4 bg-brandOrange rounded-xl"></div>
          <img
            src={stragetyUrl}
            className="mix-blend-multiply object-cover rounded-xl"
          />
        </div>
      </section>
      {/* section 2 */}
      <section className="container-fluid mx-auto flex flex-col-reverse md:flex-row justify-between px-4 py-10 md:pt-6 gap-y-6 md:gap-y-0 md:gap-x-16">
        {/* left */}
        <div className="w-full md:my-20">
          <h1 className="text-3xl md:text-4xl text-titleColor font-medium md:max-w-md">
            Digitalization
          </h1>
          <p className="text-subTitleColor md:max-w-md pt-4 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
            odio, sagittis quis ornare quis.met, consectetur adipiscing elit.
            Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aliquam leo odio, sagittis.
          </p>
        </div>
        {/* right */}
        <div className="w-full md:flex justify-center md:my-10 relative rounded-xl pr-4 md:pr-0">
          <div className="mix-blend-multiply absolute size-20 right-0 top-1/4 md:-right-10 md:top-1/4 bg-brandOrange rounded-xl"></div>
          <img
            src={digUrl}
            className="mix-blend-multiply object-cover rounded-xl"
          />
        </div>
      </section>
    </>
  );
}
