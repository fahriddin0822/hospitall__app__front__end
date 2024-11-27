import React from "react";
import img__bg__1 from "../assets/image 4 Palette.svg";
import element__dots from "../assets/element.svg";
import drug from "../assets/Frame (1).svg";
import consultation from "../assets/Frame (2).svg";
import info from "../assets/Frame (3).svg";
import emergency from "../assets/Frame (4).svg";
import paper from "../assets/Group (6).svg";
import search from "../assets/search.svg";
import bg__services from "../assets/bg element.svg";

const HeroSection = () => {
  return (
    <div className="wrapper">
      <div
        className=" landing flex bg-white overflow-hidden"
        style={{
          backgroundImage: `url(${element__dots})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "start",
          height: "auto",
        }}
      >
        <div className="w-1/2 flex justify-center align-middle m-auto">
          <div className="w-2/3 h-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-titleBlue m-4">
                Virtual healthcare Saviour for you
              </h2>
              <p className="text-sm text-descriptionblue m-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
            <button className="bg-blue-500 text-white rounded-full px-6 py-3 m-12 w-[180px]">
              Consult today
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={img__bg__1} alt="Virtual healthcare" />
        </div>
      </div>
      {/* //=================================================================== */}
      <div
        className="services my-12 p-6 grid grid-cols-3 gap-6"
        style={{
          backgroundImage: `url(${bg__services})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "start",
          height: "2xl",
        }}
      >
        <div className="flex flex-col items-center">
          <img src={search} alt="" />
          <h3 className="text-lg font-medium mb-2">Search doctor</h3>
          <p className="text-sm text-descriptionblue text-center">
            Choose your doctor from thousands of specialist doctors and trusted
            hospitals
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={drug} alt="" />
          <h3 className="text-lg font-medium mb-2">Online pharmacy</h3>
          <p className="text-sm text-descriptionblue text-center">
            Buy your medicines with our online pharmacy with a simple delivery
            system
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={consultation} alt="" />
          <h3 className="text-lg font-medium mb-2">Consultation</h3>
          <p className="text-sm text-descriptionblue text-center">
            Free consultation with our trusted doctors and get the best
            recommendations
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={info} alt="" />
          <h3 className="text-lg font-medium mb-2">Emergency care</h3>
          <p className="text-sm text-descriptionblue text-center">
            You can get 24/7 urgent care for yourself or your children and your
            lovely family
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={emergency} alt="" />
          <h3 className="text-lg font-medium mb-2">Details info</h3>
          <p className="text-sm text-descriptionblue text-center">
            Free consultation with our trusted doctors and get the best
            recommendations
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={paper} alt="" />
          <h3 className="text-lg font-medium mb-2">Tracking</h3>
          <p className="text-sm text-descriptionblue text-center">
            Track and save your medical history and health data
          </p>
        </div>
        <button className="col-span-3 bg-blue-500 text-white rounded-full px-6 py-3 mt-6 mx-auto">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
