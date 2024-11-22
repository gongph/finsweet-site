import timeCircleurl from "@/assets/time-circle.svg";
import clientUrl from "@/assets/servics/client.png";
import { useNavigate } from "react-router-dom";

export default function Clients() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/contact");
  }
  return (
    <section className="container-fluid mx-auto flex flex-col-reverse md:flex-row px-4 py-10 md:pt-6 gap-y-6 md:gap-y-0 md:gap-x-4">
      {/* left */}
      <div className="w-full md:w-1/2 md:my-20">
        <h1 className="text-3xl md:text-6xl text-[#1D3444] font-medium md:max-w-md">
          We serve clients with ground breaking solutions
        </h1>
        <p className="text-subTitleColor md:max-w-md pt-4 pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
          odio, sagittis quis ornare quis.
        </p>
        <button
          onClick={handleClick}
          className="bg-brandOrange text-sm text-white px-6 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-brandOrange focus:ring-offset-2 hover:scale-110 duration-300"
        >
          Work With Us
        </button>
      </div>
      {/* right */}
      <div className="w-full md:w-1/2 md:flex justify-center md:my-10 relative rounded-xl">
        <div className="mix-blend-multiply absolute w-36 left-0 h-full bg-brandOrange rounded-tl-xl rounded-bl-xl"></div>
        <div className="time-circel absolute right-0 top-0 md:-right-[70px] md:top-1/4 w-12 h-12 md:w-[116px] md:h-[113px]">
          <img src={timeCircleurl} className="object-cover md:w-3/4" />
        </div>
        <img
          src={clientUrl}
          className="mix-blend-multiply object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
