import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ApplyNow() {
  return (
    <>
      <Header />
      <section className="container-fluid mx-auto px-4 md:px-0 py-10 md:py-20">
        {/* job */}
        <h1 className="text-3xl md:text-5xl font-medium text-[#1D3444] mb-5 md:mb-10">
          Testing Engineer
        </h1>
        <div className="flex flex-col md:flex-row md:gap-x-60 gap-y-5 md:gap-y-0">
          <div className="space-y-3">
            <h3 className="text-lg text-titleColor font-medium">
              Job Discription
            </h3>
            <p className="text-subTitleColor max-w-lg">
              Remote, India , 4 to 5 Years Of Experience Department: Website
              Design 5 Positions Available.
            </p>
          </div>
          <div>
            <h3 className="text-lg text-titleColor font-medium">Salary</h3>
            <p className="text-subTitleColor max-w-lg text-sm">
              $30000 Per Anum{" "}
            </p>
          </div>
        </div>

        {/* detail */}
        <div className="rounded-2xl mt-10 bg-[#EDF7FF] py-6 px-4 md:py-14 md:px-12">
          <div className="flex flex-col md:flex-row">
            <div className="left w-full md:w-1/4 flex flex-row justify-between md:justify-start md:flex-col text-titleColor text-lg md:text-xl md:space-y-4 mb-4 md:mb-0">
              <a href="javaScript:void(0)" className="text-brandOrange">
                Details
              </a>
              <a
                href="javaScript:void(0)"
                className="hover:text-brandOrange duration-300"
              >
                Requirements
              </a>
              <a
                href="javaScript:void(0)"
                className="hover:text-brandOrange duration-300"
              >
                Responsibilities
              </a>
            </div>
            <div className="right w-full md:w-3/4 text-sm text-subTitleColor md:leading-7 space-y-4">
              <p>
                Design & Create highly engaging industry-related content in both
                photo, gif & video format Publish Posts on various social media
                channels Promote content on social networks and monitor
                engagement (e.g. comments and shares) Research industry-related
                topics Editing audio and sound design on projects Engage in
                opportunities to develop original content and concepts for web
                and mobile Create motion graphics and animations using 2D and 3D
                applications for marketing and promotional usage.
              </p>
              <p>
                Manage the day-to-day handling of all social media channels such
                as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
                YouTube, adapting content to suit different channels
              </p>
            </div>
          </div>
        </div>

        {/* apply now */}
        <h1 className="text-xl md:text-3xl font-medium text-[#1D3444] mt-10 md:mt-20 mb-5 md:mb-10">
          Apply Now
        </h1>
        {/* form */}
        <div className="form grid grid-cols-2 gap-x-5 md:gap-x-10 gap-y-5">
          {/* first name */}
          <label>
            <input
              type="text"
              placeholder="First Name"
              className="py-3 px-8 text-gray text-sm rounded-full w-full bg-[#F5F5F5]/50 focus:outline-none placeholder:text-gray/80 placeholder:text-xs"
            />
          </label>
          {/* last name */}
          <label>
            <input
              type="text"
              placeholder="Last Name"
              className="py-3 px-8 text-gray text-sm rounded-full w-full bg-[#F5F5F5]/50 focus:outline-none placeholder:text-gray/80 placeholder:text-xs"
            />
          </label>
          {/* email id */}
          <label>
            <input
              type="email"
              placeholder="Email id"
              className="py-3 px-8 text-gray text-sm rounded-full w-full bg-[#F5F5F5]/50 focus:outline-none placeholder:text-gray/80 placeholder:text-xs"
            />
          </label>
          {/* Mobile No */}
          <label>
            <input
              type="telphone"
              placeholder="Mobile No"
              className="py-3 px-8 text-gray text-sm rounded-full w-full bg-[#F5F5F5]/50 focus:outline-none placeholder:text-gray/80 placeholder:text-xs"
            />
          </label>
          {/* texterea */}
          <label className="col-span-2">
            <textarea
              type="textarea"
              placeholder="Why do you thing you are good fit for Ether?"
              rows="8"
              className="py-3 px-8 text-gray text-sm rounded-3xl w-full bg-[#F5F5F5]/50 focus:outline-none placeholder:pt-2 placeholder:text-gray/80 placeholder:text-xs resize-none"
            />
          </label>
          <div className="col-span-2">
            <button className="bg-brandOrange text-white text-sm px-6 py-2 rounded-full hover:scale-105 duration-300 focus:ring-1 focus:ring-brandOrange focus:ring-offset-2 focus:ring-offset-white">
              Submit
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
