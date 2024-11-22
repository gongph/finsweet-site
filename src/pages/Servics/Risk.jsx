import riskUrl from "@/assets/servics/risk.png";
import artUrl from "@/assets/servics/art.png";
import smartUrl from "@/assets/servics/smart.png";

export default function Clients() {
  return (
    <>
      {/* section 1 */}
      <section className="container-fluid mx-auto flex flex-col-reverse md:flex-row-reverse justify-between px-4 pt-0 pb-10 md:pt-6 gap-y-6 md:gap-y-0 md:gap-x-16">
        {/* left */}
        <div className="w-full md:my-20">
          <h1 className="text-3xl md:text-4xl text-titleColor font-medium md:max-w-md">
            Risk assessment
          </h1>
          <p className="text-subTitleColor md:max-w-md pt-4 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
            odio, sagittis quis ornare quis.met, consectetur adipiscing elit.
            Aliquam leo odio, sagittis quis ornare quis.
          </p>
          <ul className="list-disc list-inside text-subTitleColor text-sm md:leading-6">
            <li>Individual risk assessment</li>
            <li>Systems risk assessment</li>
            <li>Mathematical conceptualization</li>
          </ul>
        </div>
        {/* right */}
        <div className="w-full md:flex justify-center md:my-10 relative rounded-xl pl-4 md:pl-0">
          <div className="mix-blend-multiply absolute size-20 left-0 top-1/3 md:-left-10 md:top-1/4 bg-brandOrange rounded-xl"></div>
          <img
            src={riskUrl}
            className="mix-blend-multiply object-cover rounded-xl"
          />
        </div>
      </section>
      {/* section 2 */}
      <section className="container-fluid mx-auto flex flex-col-reverse md:flex-row justify-between px-4 py-10 md:pt-6 gap-y-6 md:gap-y-0 md:gap-x-16">
        {/* left */}
        <div className="w-full md:my-20">
          <h1 className="text-3xl md:text-4xl text-titleColor font-medium md:max-w-md">
            Artificial intelligence
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
            src={artUrl}
            className="mix-blend-multiply object-cover rounded-xl"
          />
        </div>
      </section>
      {/* section 3 */}
      <section className="container-fluid mx-auto flex flex-col-reverse md:flex-row-reverse justify-between px-4 pt-0 pb-10 md:pt-6 gap-y-6 md:gap-y-0 md:gap-x-16">
        {/* left */}
        <div className="w-full md:my-20">
          <h1 className="text-3xl md:text-4xl text-titleColor font-medium md:max-w-md">
            Smart Contracts
          </h1>
          <p className="text-subTitleColor md:max-w-md pt-4 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
            odio, sagittis quis ornare quis.met, consectetur adipiscing elit.
            Aliquam leo odio, sagittis quis ornare quis.
          </p>
          <ul className="list-disc list-inside text-subTitleColor text-sm md:leading-6">
            <li>Smart contract implementation</li>
            <li>Smart legal contracts</li>
            <li>Basic contract law</li>
          </ul>
        </div>
        {/* right */}
        <div className="w-full md:flex justify-center md:my-10 relative rounded-xl pl-4 md:pl-0">
          <div className="mix-blend-multiply absolute size-20 left-0 top-2/3 md:-left-8 md:top-3/4 bg-brandOrange rounded-xl"></div>
          <img
            src={smartUrl}
            className="mix-blend-multiply object-cover rounded-xl"
          />
        </div>
      </section>
    </>
  );
}
