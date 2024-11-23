import { motion } from "framer-motion";
import { animate } from "@/utils/animate";

export default function Experience() {
  return (
    <section className="container-fluid mx-auto pt-0 md:pt-16 pb-2 md:pb-4">
      {/* title */}
      <motion.div
        variants={animate}
        initial="hide"
        whileInView="show"
        className="flex flex-col md:flex-row justify-between mb-10"
      >
        <h1 className="text-titleColor dark:text-slate-300 text-3xl font-medium px-4 md:px-0 max-w-md">
          The energy of a start-up combined with 30 years of experience
        </h1>
        <p className="text-subTitleColor dark:text-slate-400 px-4 md:px-0 mt-4 md:mt-0 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
      </motion.div>
      {/* flex items */}
      <motion.div
        variants={animate}
        initial="hide"
        whileInView="show"
        className="flex flex-col md:flex-row justify-center px-4 md:px-4 space-y-4 md:space-y-0 md:space-x-10"
      >
        {/* item-1 */}
        <div className="item-1 w-full space-y-3">
          <h1 className="text-3xl text-brandOrange font-medium">15+</h1>
          <h2 className="text-xl text-titleColor dark:text-slate-400 font-medium">
            Awards received
          </h2>
          <p className="text-subTitleColor dark:text-slate-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        {/* item-2 */}
        <div className="item-2 w-full space-y-3">
          <h1 className="text-3xl text-brandOrange font-medium">34</h1>
          <h2 className="text-xl text-titleColor dark:text-slate-400 font-medium">
            Employees
          </h2>
          <p className="text-subTitleColor dark:text-slate-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        {/* item-3 */}
        <div className="item-2 w-full space-y-3">
          <h1 className="text-3xl text-brandOrange font-medium">500+</h1>
          <h2 className="text-xl text-titleColor dark:text-slate-400 font-medium">
            Custom solutions
          </h2>
          <p className="text-subTitleColor dark:text-slate-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
        {/* item-4 */}
        <div className="item-2 w-full space-y-3">
          <h1 className="text-3xl text-brandOrange font-medium">500+</h1>
          <h2 className="text-xl text-titleColor dark:text-slate-400 font-medium">
            Clients served
          </h2>
          <p className="text-subTitleColor dark:text-slate-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
            amet eros elit et.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
