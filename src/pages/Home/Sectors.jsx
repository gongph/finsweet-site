import sectorImg01 from "@/assets/news-1.png";
import sectorImg02 from "@/assets/news-2.png";
import sectorImg03 from "@/assets/news-3.png";
export default function Sectors() {
  return (
    <section className="sectors container-fluid mx-auto my-10">
      {/* Sectors header */}
      <h1 className="text-3xl px-4 md:text-4xl font-medium md:w-1/2 text-[#1D3444]">
        We help more than 1500 companies from all sectors
      </h1>
      <p className="py-7 px-4 text-subTitleColor md:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
        suscipit tellus et pellentesque.
      </p>
      {/* Card */}
      <div className="sectors-card grid grid-col-1 justify-center md:grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-10 px-4">
        {/* item 1 */}
        <div className="secctors-card-item flex flex-col space-y-4">
          <img src={sectorImg01} className="shrink-0 object-cover" />
          <h3 className="text-titleColor font-medium text-lg">
            Business strategy
          </h3>
          <p className="text-subTitleColor text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,{" "}
          </p>
          <a
            href="#"
            className="text-brandOrange hover:underline group/more text-sm"
          >
            Learn More
            <span className="group-hover/more:translate-x-0.5 duration-300 inline-block pl-1">
              →
            </span>
          </a>
        </div>
        {/* item 2 */}
        <div className="secctors-card-item flex flex-col space-y-4">
          <img src={sectorImg02} className="shrink-0 object-cover" />
          <h3 className="text-titleColor font-medium text-lg">
            Digitalization
          </h3>
          <p className="text-subTitleColor text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,{" "}
          </p>
          <a
            href="#"
            className="text-brandOrange hover:underline group/more text-sm"
          >
            Learn More
            <span className="group-hover/more:translate-x-0.5 duration-300 inline-block pl-1">
              →
            </span>
          </a>
        </div>
        {/* item 3 */}
        <div className="secctors-card-item flex flex-col space-y-4">
          <img src={sectorImg03} className="shrink-0 object-cover" />
          <h3 className="text-titleColor font-medium text-lg">
            Risk assessment
          </h3>
          <p className="text-subTitleColor text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et,{" "}
          </p>
          <a
            href="#"
            className="text-brandOrange hover:underline group/more text-sm"
          >
            Learn More
            <span className="group-hover/more:translate-x-0.5 duration-300 inline-block pl-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
