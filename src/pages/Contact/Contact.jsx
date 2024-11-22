import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mapUrl from "@/assets/contact/map.png";

export default function Contact() {
  return (
    <>
      {/* Header */}
      <Header />
      <section className="container-fluid mx-auto px-4 md:px-0 mb-10">
        <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-16 md:gap-x-10">
          {/* left */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-medium text-[#1D3444]">
              Have a question ? Let’s get in touch with us.
            </h1>
            <p className="text-subTitleColor pt-5 pb-10">
              Fill up the Form and ou team will get back to within 24 hrs
            </p>
            {/* form */}
            <div className="form grid grid-cols-1 gap-y-5">
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
              {/* email */}
              <label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="py-3 px-8 text-gray text-sm rounded-full w-full bg-[#F5F5F5]/50 focus:outline-none placeholder:text-gray/80 placeholder:text-xs"
                />
              </label>
              {/* message */}
              <label>
                <textarea
                  type="textarea"
                  placeholder="Type message"
                  rows="5"
                  className="py-3 px-8 text-gray text-sm rounded-3xl w-full bg-[#F5F5F5]/50 focus:outline-none placeholder:pt-2 placeholder:text-gray/80 placeholder:text-xs resize-none"
                />
              </label>
              <label>
                <button className="bg-brandOrange text-white text-sm px-6 py-2 rounded-full hover:scale-105 duration-300 focus:ring-1 focus:ring-brandOrange focus:ring-offset-2 focus:ring-offset-white">
                  Submit
                </button>
              </label>
            </div>
          </div>
          {/* right */}
          <div className="w-full md:w-1/2">
            {/* top */}
            <div className="flex gap-x-5 md:gap-x-10 md:mt-4">
              <div className="spade-y-1 max-w-56">
                <h3 className="text-titleColor font-medium mb-4">Location</h3>
                <p className="text-subTitleColor text-sm">
                  DLF Cybercity, Bhubaneswar, India, &52050
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-titleColor font-medium mb-4">Contact Us</h3>
                <p className="text-subTitleColor text-sm">020 7993 2905</p>
                <p className="text-subTitleColor text-sm">hi@finsweet.com</p>
              </div>
            </div>
            {/* map */}
            <div className="w-full h-72 rounded-xl md:rounded-3xl mt-5 md:mt-20 overflow-hidden">
              <img src={mapUrl} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
