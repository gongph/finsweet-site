import timeCircleurl from "@/assets/time-circle.svg";
import hiredUrl from "@/assets/careers/hired.png";
import { useNavigate } from "react-router-dom";
import { animate } from "@/utils/animate";
import { motion } from "framer-motion";

export default function Human() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/contact");
  }
  return (
    <section className="container-fluid mx-auto flex flex-col-reverse md:flex-row px-4 py-10 md:pt-6 gap-y-6 md:gap-y-0 md:gap-x-2">
      {/* left */}
      <div className="w-full md:w-1/2 md:my-20">
        <motion.h1
          variants={animate}
          initial="hide"
          whileInView="show"
          className="text-3xl md:text-6xl text-[#1D3444] dark:text-slate-300 font-medium md:max-w-xl"
        >
          We hired people who are very passionate about what they do
        </motion.h1>
        <motion.p
          variants={animate}
          initial="hide"
          whileInView="show"
          className="text-subTitleColor dark:text-slate-400 pt-4 pb-8"
        >
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw.
        </motion.p>
        <button
          onClick={handleClick}
          className="bg-brandOrange text-sm text-white px-6 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-brandOrange focus:ring-offset-2 hover:scale-110 duration-300"
        >
          View Positions
        </button>
      </div>
      {/* right */}
      <div className="w-full md:w-1/2 md:flex justify-center md:my-10 relative rounded-xl">
        <div className="mix-blend-multiply absolute w-36 left-0 h-full bg-brandOrange rounded-tl-xl rounded-bl-xl"></div>
        <div className="time-circel absolute right-0 top-0 md:-right-[70px] md:top-[56px] w-12 h-12 md:w-[116px] md:h-[113px]">
          <img src={timeCircleurl} className="object-cover md:w-3/4" />
        </div>
        <img
          src={hiredUrl}
          className="mix-blend-multiply dark:mix-blend-normal object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
