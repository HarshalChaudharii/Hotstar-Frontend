import { Check, Facebook } from "lucide-react";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-white ml-64 w-full h-32 mt-36">
      <div className="flex flex-col ">
        <div className="flex justify-between mr-64">
          <div>
            <h2 className="mb-6">Company</h2>
            <p className="text-slate-400">About Us</p>
            <p className="text-slate-400">Careers</p>
          </div>
          <div>
            <h2 className="mb-6">Viewe Website in</h2>
            <p className="text-slate-400 flex space-x-4">
              <Check /> <span>English</span>
            </p>
          </div>
          <div>
            <h2 className="mb-6">Need Help?</h2>
            <p className="text-slate-400">Visit Help Center</p>
            <p className="text-slate-400">Share Feedback</p>
          </div>
          <div>
            <h2 className="mb-6">Connect with Us</h2>
            <div className="flex space-x-8">
              <Image
                src="/assets/facebook.png"
                alt="facebook"
                width={30}
                height={11}
                className="size-5 invert"
              />
              <Image
                src="/assets/tweeter.png"
                width={30}
                height={5}
                alt="X"
                className="size-5 invert"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="w-[300px] text-slate-400 text-sm ">
              © 2024 STAR. All Rights Reserved. Terms Of Use Privacy Policy FAQ
            </p>
          </div>
          <div className="flex space-x-4 items-center mr-56 ">
            <div>
              <Image
                width={150}
                height={50}
                src="/assets/googleplay.png"
                alt="logo"
              />
            </div>

            <div>
              <Image
                width={200}
                height={100}
                src="/assets/hulu.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

<div>
  <div className=" w-full flex flex-col justify-between">
    <h2>Company</h2>
    <p className="text-slate-400">About Us</p>
    <p className="text-slate-400">Careers</p>
  </div>
  <div>
    <h2>Viewe Website in</h2>
    <p className="text-slate-400">
      {" "}
      <Check /> English{" "}
    </p>
  </div>
  <div></div>
  <div></div>
</div>;
