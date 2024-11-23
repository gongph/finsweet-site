import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animate } from "@/utils/animate";

import news01 from "@/assets/news-1.png";
import news02 from "@/assets/news-2.png";
import news03 from "@/assets/news-3.png";
export default function News() {
  return (
    <section className="bg-[#DCEAF5]">
      <div className="container-fluid mx-auto px-4 md:px-0 pb-10 md:pb-20">
        <h1 className="text-3xl md:text-4xl font-medium text-titleColor pt-10 pb-5 md:pt-16 md:pb-10">
          Latest Blog & News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-6 md:gap-y-0">
          {/* grid item 1 */}
          <motion.div
            variants={animate}
            initial="hide"
            whileInView="show"
            className="rounded-2xl bg-white py-8 px-4 md:py-0 md:px-0"
          >
            <img src={news01} className="object-cover rounded-lg" />
            <div className="pt-4 md:pt-6 md:pb-4 md:px-4 space-y-4">
              <Link
                to={"/blog/1"}
                className="text-titleColor font-medium text-xl hover:underline"
              >
                Why you have to digitalize in 2021
              </Link>
              <p className="text-subTitleColor text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <Link
                to={"/blog/1"}
                className="block text-sm text-brandOrange hover:underline group/more"
              >
                Learn More
                <span className="group-hover/more:translate-x-0.5 duration-300 inline-block pl-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
          {/* grid item 2 */}
          <motion.div
            variants={animate}
            initial="hide"
            whileInView="show"
            className="rounded-2xl bg-white py-8 px-4 md:py-0 md:px-0"
          >
            <img src={news02} className="object-cover rounded-lg" />
            <div className="pt-4 md:pt-6 md:pb-4 md:px-4 space-y-4">
              <Link
                to={"/blog/1"}
                className="text-titleColor font-medium text-xl hover:underline"
              >
                Our internal process and longerm vision
              </Link>
              <p className="text-subTitleColor text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <Link
                to={"/blog/1"}
                className="block text-sm text-brandOrange hover:underline group/more"
              >
                Learn More
                <span className="group-hover/more:translate-x-0.5 duration-300 inline-block pl-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
          {/* grid item 3 */}
          <motion.div
            variants={animate}
            initial="hide"
            whileInView="show"
            className="rounded-2xl bg-white py-8 px-4 md:py-0 md:px-0"
          >
            <img src={news03} className="object-cover rounded-lg" />
            <div className="pt-4 md:pt-6 md:pb-4 md:px-4 space-y-4">
              <Link
                to={"/blog/1"}
                className="text-titleColor font-medium text-xl hover:underline"
              >
                Helping the next generation of leaders
              </Link>
              <p className="text-subTitleColor text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <Link
                to={"/blog/1"}
                className="block text-sm text-brandOrange hover:underline group/more"
              >
                Learn More
                <span className="group-hover/more:translate-x-0.5 duration-300 inline-block pl-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
