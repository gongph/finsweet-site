import visionUrl from "@/assets/blog/vision.png";
import avatorUrl from "@/assets/blog/avator.png";
import { Link } from "react-router-dom";
export default function Vision() {
  return (
    <section className="bg-[#DCEAF5] dark:bg-brand-dark/30">
      <div className="container-fluid mx-auto py-10 md:py-20 px-4 md:px-0 flex flex-col-reverse md:flex-row items-center md:gap-x-10">
        {/* left */}
        <div className="w-full md:w-1/2 space-y-5">
          <div className="flex items-center gap-x-2 text-subTitleColor dark:text-slate-500 text-xs mt-5 md:mt-0">
            <img src={avatorUrl} className="shrink-0 size-8" />
            <span>Andrew Jonson</span>
            <span className="pl-4">Posted on 27th January 2021</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium text-[#1D3444] dark:text-slate-300 max-w-md">
            Our internal process and longerm vision
          </h1>
          <p className="text-subTitleColor dark:text-slate-400 max-w-md">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the
          </p>
          <Link
            to="/blog/1"
            className="text-brandOrange hover:underline group/more text-sm block"
          >
            Read More
            <span className="group-hover/more:translate-x-0.5 duration-300 inline-block pl-1">
              →
            </span>
          </Link>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 self-stretch rounded-3xl overflow-hidden">
          <img src={visionUrl} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}
