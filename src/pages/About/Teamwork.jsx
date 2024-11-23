import img01 from "@/assets/about/img-01.png";
import img02 from "@/assets/about/img-02.png";
import img03 from "@/assets/about/img-03.png";
import img04 from "@/assets/about/img-04.png";

import { animate } from "@/utils/animate";
import { motion } from "framer-motion";

export default function TeamWork() {
  return (
    <section className="container-fluid mx-auto px-4 md:px-0 pt-10 pb-5 md:pb-0 md:pt-0">
      <motion.h2
        variants={animate}
        initial="hide"
        whileInView="show"
        className="text-3xl md:text-4xl font-medium max-w-sm text-titleColor"
      >
        Teamwork is the only way we work
      </motion.h2>
      <motion.p
        variants={animate}
        initial="hide"
        whileInView="show"
        className="text-subTitleColor max-w-xl py-8"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
        suscipit tellus et pellentesque.
      </motion.p>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* card 1 */}
        <motion.div
          variants={animate}
          initial="hide"
          whileInView="show"
          className="relative cursor-pointer group/card overflow-hidden"
        >
          <img src={img01} className="object-cover" />
          <div className="translate-y-full backdrop-blur-md absolute text-white py-6 px-6 space-y-2 text-sm bottom-0 left-0 bg-titleColor/70 w-full h-1/2 rounded-tl-2xl rounded-tr-2xl group-hover/card:translate-y-0 duration-300">
            <p className="text-xs md:text-sm">Support Assist</p>
            <h3 className="text-lg md:text-xl font-medium">Selby Stuart</h3>
            <p className="text-xs md:text-sm md:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros.
            </p>
          </div>
        </motion.div>
        {/* card 2 */}
        <motion.div
          variants={animate}
          initial="hide"
          whileInView="show"
          className="relative cursor-pointer group/card overflow-hidden"
        >
          <img src={img02} className="object-cover" />
          <div className="translate-y-full backdrop-blur-md absolute text-white py-6 px-6 space-y-2 text-sm bottom-0 left-0 bg-titleColor/80 w-full h-1/2 rounded-tl-2xl rounded-tr-2xl group-hover/card:translate-y-0 duration-300">
            <p className="text-xs md:text-sm">Support Assist</p>
            <h3 className="text-lg md:text-xl font-medium">Selby Stuart</h3>
            <p className="text-xs md:text-sm md:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros.
            </p>
          </div>
        </motion.div>
        {/* card 3 */}
        <motion.div
          variants={animate}
          initial="hide"
          whileInView="show"
          className="relative cursor-pointer group/card overflow-hidden"
        >
          <img src={img03} className="object-cover" />
          <div className="translate-y-full backdrop-blur-md absolute text-white py-6 px-6 space-y-2 text-sm bottom-0 left-0 bg-titleColor/80 w-full h-1/2 rounded-tl-2xl rounded-tr-2xl group-hover/card:translate-y-0 duration-300">
            <p className="text-xs md:text-sm">Support Assist</p>
            <h3 className="text-lg md:text-xl font-medium">Selby Stuart</h3>
            <p className="text-xs md:text-sm md:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros.
            </p>
          </div>
        </motion.div>
        {/* card 4 */}
        <motion.div
          variants={animate}
          initial="hide"
          whileInView="show"
          className="relative cursor-pointer group/card overflow-hidden"
        >
          <img src={img04} className="object-cover" />
          <div className="translate-y-full backdrop-blur-md absolute text-white py-6 px-6 space-y-2 text-sm bottom-0 left-0 bg-titleColor/80 w-full h-1/2 rounded-tl-2xl rounded-tr-2xl group-hover/card:translate-y-0 duration-300">
            <p className="text-xs md:text-sm">Support Assist</p>
            <h3 className="text-lg md:text-xl font-medium">Selby Stuart</h3>
            <p className="text-xs md:text-sm md:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
