import Icon01 from "@/assets/home/invoicing-icon.svg";
import Icon02 from "@/assets/home/support-icon.svg";
import Icon03 from "@/assets/home/surveying-icon.svg";
export default function Solution() {
  return (
    <section className="solution-wrapper w-full bg-[#EDF7FF]">
      <div className="container-fluid mx-auto pt-10 md:pt-16 pb-2 md:pb-4">
        {/* title */}
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-titleColor text-3xl font-medium px-4 md:px-0 max-w-md">
            We are building software solution that solves your business
            challenges
          </h1>
          <p className="text-textColor px-4 md:px-0 md:text-lg mt-4 md:mt-0 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>
        {/* card */}
        <div className="solution-card grid grid-cols-1 md:grid-cols-3 mx-4 my-10 md:mx-0 md:my-16 space-y-4 md:space-y-0 sm:space-x-4 xl:space-x-10">
          {/* item 1 */}
          <div className="flex flex-col space-y-4 rounded-xl bg-white px-10 pt-8 pb-6">
            <img src={Icon01} className="shrink-0 w-7 h-7" />
            <h3 className="text-xl font-medium">Invoicing</h3>
            <p className="text-subTitleColor text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,{" "}
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col space-y-4 rounded-xl bg-white px-10 pt-8 pb-6">
            <img src={Icon02} className="shrink-0 w-7 h-7" />
            <h3 className="text-xl font-medium">Support</h3>
            <p className="text-subTitleColor text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,{" "}
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col space-y-4 rounded-xl bg-white px-10 pt-8 pb-6">
            <img src={Icon03} className="shrink-0 w-7 h-7" />
            <h3 className="text-xl font-medium">Surveying</h3>
            <p className="text-subTitleColor text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
