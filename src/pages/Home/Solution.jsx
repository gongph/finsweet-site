import { motion } from "framer-motion";
import { animate } from "@/utils/animate";

import Icon01 from "@/assets/home/invoicing-icon.svg";
import Icon02 from "@/assets/home/support-icon.svg";
import Icon03 from "@/assets/home/surveying-icon.svg";
export default function Solution() {
  return (
    <section className="solution-wrapper w-full bg-[#EDF7FF] dark:bg-brand-dark/20">
      <div className="container-fluid mx-auto pt-10 md:pt-16 pb-2 md:pb-4">
        {/* title */}
        <div className="flex flex-col md:flex-row justify-between">
          <motion.h1
            variants={animate}
            initial="hide"
            whileInView="show"
            className="text-titleColor dark:text-slate-300 text-3xl font-medium px-4 md:px-0 max-w-md"
          >
            We are building software solution that solves your business
            challenges
          </motion.h1>
          <motion.p
            variants={animate}
            initial="hide"
            whileInView="show"
            className="text-textColor dark:text-slate-400 px-4 md:px-0 md:text-lg mt-4 md:mt-0 max-w-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </motion.p>
        </div>
        {/* card */}
        <div className="solution-card grid grid-cols-1 md:grid-cols-3 mx-4 my-10 md:mx-0 md:my-16 space-y-4 md:space-y-0 sm:space-x-4 xl:space-x-10">
          {/* item 1 */}
          <motion.div
            variants={animate}
            initial="hide"
            whileInView="show"
            className="flex flex-col space-y-4 rounded-xl bg-white dark:bg-brand-dark/30 dark:shadow-lg px-10 pt-8 pb-6"
          >
            <img src={Icon01} className="shrink-0 w-7 h-7" />
            <h3 className="text-xl font-medium dark:text-slate-400">
              Invoicing
            </h3>
            <p className="text-subTitleColor dark:text-slate-500 text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,{" "}
            </p>
          </motion.div>
          {/* item 2 */}
          <motion.div
            variants={animate}
            initial="hide"
            whileInView="show"
            className="flex flex-col space-y-4 rounded-xl bg-white dark:bg-brand-dark/30 dark:shadow-lg px-10 pt-8 pb-6"
          >
            <img src={Icon02} className="shrink-0 w-7 h-7" />
            <h3 className="text-xl font-medium dark:text-slate-400">Support</h3>
            <p className="text-subTitleColor dark:text-slate-500 text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,{" "}
            </p>
          </motion.div>
          {/* item 3 */}
          <motion.div
            variants={animate}
            initial="hide"
            whileInView="show"
            className="flex flex-col space-y-4 rounded-xl bg-white dark:bg-brand-dark/30 dark:shadow-lg px-10 pt-8 pb-6"
          >
            <img src={Icon03} className="shrink-0 w-7 h-7" />
            <h3 className="text-xl font-medium dark:text-slate-400">
              Surveying
            </h3>
            <p className="text-subTitleColor dark:text-slate-500 text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
