import React from "react";
import { Github, I4G, Logo, Slack, Share, Profile, Menu } from "../assets";

const Links = () => {
  return (
    <div className="bg-zuriBg min-h-screen flex flex-col justify-start items-center gap-8 sm:gap-14 relative">
      {/* profile */}
      <div className="mt-16 w-full flex flex-col justify-center items-center gap-6">
        <div className="h-img w-img rounded-full overflow-hidden">
          <img src={Profile} alt="" id="profile__img" className="max-w-full" />
        </div>
        <p
          className="font-bold text-zuriGray-900 text-xl font-default"
          title="twitter handle"
          id="twitter"
        >
          @cornerstone_jsx
        </p>
        <noscript>
          <p id="slack">Ephraim Cornerstone</p>
        </noscript>
      </div>

      {/* share and menu icons */}
      <div className="bg-white hover:bg-zuriGray-50 absolute top-12 right-4 sm:right-10 md:right-36 w-10 h-10 hidden md:flex justify-center items-center rounded-full border-2 border-dashed border-zuriGray-300 cursor-pointer">
        <img src={Share} alt="" />
      </div>
      <div className="bg-white hover:bg-zuriGray-50 absolute top-12 right-4 sm:right-12 md:right-36 w-10 h-10 flex justify-center items-center rounded-full border-2 border-dashed border-zuriGray-300 cursor-pointer md:hidden">
        <img src={Menu} alt="" />
      </div>

      {/* link boxes */}
      <div className="flex flex-col justify-center items-center gap-6 w-full px-4 sm:px-12 lg:px-36">
        <a
          className="btn link__text"
          href="https://twitter.com/cornerstone_jsx"
          rel="noreferrer"
          target="_blank"
          id="twitter"
        >
          Twitter Link
        </a>

        <a
          className="btn link__text"
          href="https://training.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="btn__zuri"
        >
          Zuri team
        </a>
        <a
          className="btn link__text"
          href="http://books.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="books"
        >
          Zuri Books
        </a>
        <a
          className="btn link__text"
          href="https://books.zuri.team/python-for-beginners?ref_id=cornerstone"
          rel="noreferrer"
          target="_blank"
          id="book__python"
        >
          Python Books
        </a>
        <a
          className="btn link__text"
          href="https://background.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="pitch"
        >
          Background Check for Codes
        </a>
        <a
          className="btn link__text"
          href="https://books.zuri.team/design-rules"
          rel="noreferrer"
          target="_blank"
          id="book_design"
        >
          Design Books
        </a>

        <div className="social py-6 flex justify-center items-center gap-6">
          <a href="/">
            <img src={Slack} alt="" />
          </a>
          <a href="https://github.com/Cornerstone-04">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      <footer className="w-full py-12 px-4 sm:px-12 lg:px-28 flex justify-center items-center">
        <div className="m-auto w-full max-w-custom flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 border-t-1 border-zuriGray-200 pt-6">
          <img src={Logo} alt="ingressive_for_good" />
          <p className="text-zuriGray-500 text-base font-default font-normal text-center">
            HNG Internship 9 Frontend Task
          </p>
          <img src={I4G} alt="zuri_internship" />
        </div>
      </footer>
    </div>
  );
};

export default Links;