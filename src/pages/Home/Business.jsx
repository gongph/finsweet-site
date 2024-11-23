import { motion } from "framer-motion";
import { animate } from "@/utils/animate";

import businessUrl from "@/assets/home/business.png";
import ribbonUrl from "@/assets/home/ribbon.svg";

export default function Business() {
  return (
    <section className="container-fluid relative mx-auto px-4 py-4 md:p-12 lg:rounded-xl bg-[#EDF7FF]">
      <div className="ribbon hidden absolute md:block md:-right-14 md:-top-3">
        <img src={ribbonUrl} className="w-1/3 md:w-3/4" />
      </div>
      {/* buttons */}
      <div className="flex items-center justify-between md:justify-start gap-x-1 my-6 md:mb-16 md:gap-x-6">
        <button className="px-3 text-sm md:px-4 md:text-base py-1 bg-white ring-1 ring-white rounded-full text-brandOrange shadow-md md:shadow-none">
          Business strategy
        </button>
        <button className="px-3 text-sm md:px-4 md:text-base py-1 bg-[transparent] ring-1 ring-[#A8BCCC] rounded-full text-[#A8BCCC] hover:ring-white hover:text-brandOrange hover:bg-white duration-300">
          Digitalization
        </button>
        <button className="px-3 text-sm md:px-4 md:text-base py-1 bg-[transparent] ring-1 ring-[#A8BCCC] rounded-full text-[#A8BCCC] hover:ring-white hover:text-brandOrange hover:bg-white duration-300">
          Risk assessment
        </button>
      </div>
      {/* flex content */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* item-1 */}
        <div className="content-wrapper w-full md:w-1/2 space-y-8 md:pr-4 pt-4 md:pt-0">
          <motion.h1
            variants={animate}
            initial="hide"
            whileInView="show"
            className="text-3xl md:text-4xl font-medium text-titleColor md:leading-tight"
          >
            Helping clients with research and strategy for their business
          </motion.h1>
          <motion.p
            variants={animate}
            initial="hide"
            whileInView="show"
            className="text-subTitleColor"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </motion.p>
          <motion.p
            variants={animate}
            initial="hide"
            whileInView="show"
            className="text-subTitleColor"
          >
            Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur
            sit amet eros blan esque.
          </motion.p>
          <a href="#" className="text-brandOrange group block">
            <span className="hover:underline">See all services</span>
            <span className="inline-block group-hover:translate-x-0.5 duration-300 pl-1">
              →
            </span>
          </a>
        </div>
        {/* item-2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-item-2 md:flex items-end justify-end w-full rounded-xl md:w-1/2 md:h-auto h-[200px] overflow-hidden"
        >
          <img
            src={businessUrl}
            className="object-contain rounded-xl md:w-[80%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
