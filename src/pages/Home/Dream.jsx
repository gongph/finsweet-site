import { motion } from "framer-motion";
import { animate } from "@/utils/animate";

import dreamUrl from "@/assets/home/dream.png";
import avatorUrl from "@/assets/home/avator.png";
import triangleUrl from "@/assets/home/triangle.svg";
export default function Dream() {
  return (
    <section className="container-fluid mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8 md:py-0 md:px-0 md:my-28 md:space-x-4">
      {/* item 1 */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h1
          variants={animate}
          initial="hide"
          whileInView="show"
          className="text-3xl md:text-4xl max-w-sm font-medium text-titleColor"
        >
          Finsweet was a dream to work with
        </motion.h1>
        <motion.p
          variants={animate}
          initial="hide"
          whileInView="show"
          className="text-subTitleColor max-w-md"
        >
          Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel.
          Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus
          eleifend nec felis vel auctor.
        </motion.p>
        <div className="flex items-center space-x-4">
          <img
            src={avatorUrl}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-[#063255]">Chikelu Neo</h3>
            <p className="text-brandOrange text-sm">CEO at MazeAI</p>
          </div>
        </div>
      </div>
      {/* item 2 */}
      <div className="w-full relative md:w-1/2 mt-8 md:mt-0/Users/gongph/Downloads/triangle.svg">
        <img src={dreamUrl} className="object-cover" />
        <div className="absolute bottom-10 left-10">
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:scale-105 duration-300"
            >
              <img src={triangleUrl} className="w-3 h-3" />
            </a>
            <span className="text-white text-sm">play Video</span>
          </div>
        </div>
      </div>
    </section>
  );
}
