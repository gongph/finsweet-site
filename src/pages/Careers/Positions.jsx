import { Link } from "react-router-dom";

export default function Positions() {
  return (
    <section className="container-fluid mx-auto px-4 md:px-0 space-y-10 md:space-y-14 pb-10 md:pb-20">
      <h1 className="text-3xl md:text-4xl text-titleColor font-bold">
        See our open positions{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-8">
        {/* item1 */}
        <div className="py-6 px-8 rounded-xl bg-[#4dC1E4FF]/10 space-y-1">
          <h3 className="text-titleColor text-lg font-medium">
            Full Stack Developer
          </h3>
          <p className="text-subTitleColor text-sm">Bengaluru · Full Time </p>
          <Link
            to={"/careers/apply"}
            className="text-brandOrange text-sm block pt-5"
          >
            Apply Now
          </Link>
        </div>
        {/* item2 */}
        <div className="py-6 px-8 rounded-xl bg-[#4dC1E4FF]/10 space-y-1">
          <h3 className="text-titleColor text-lg font-medium">
            Full Stack Developer
          </h3>
          <p className="text-subTitleColor text-sm">Bengaluru · Full Time </p>
          <Link
            to={"/careers/apply"}
            className="text-brandOrange text-sm block pt-5"
          >
            Apply Now
          </Link>
        </div>
        {/* item3 */}
        <div className="py-6 px-8 rounded-xl bg-[#4dC1E4FF]/10 space-y-1">
          <h3 className="text-titleColor text-lg font-medium">
            Full Stack Developer
          </h3>
          <p className="text-subTitleColor text-sm">Bengaluru · Full Time </p>
          <Link
            to={"/careers/apply"}
            className="text-brandOrange text-sm block pt-5"
          >
            Apply Now
          </Link>
        </div>
        {/* item4 */}
        <div className="py-6 px-8 rounded-xl bg-[#4dC1E4FF]/10 space-y-1">
          <h3 className="text-titleColor text-lg font-medium">
            Full Stack Developer
          </h3>
          <p className="text-subTitleColor text-sm">Bengaluru · Full Time </p>
          <Link
            to={"/careers/apply"}
            className="text-brandOrange text-sm block pt-5"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
