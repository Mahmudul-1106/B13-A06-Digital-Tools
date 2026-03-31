import React from "react";
import footerLogo from "../assets/footerLogo.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="  bg-[#101727] text-[#FFF] pt-20 pb-5 px-10">
      <div className="footer sm:footer-horizontal mb-20">
        <aside>
          <img src={footerLogo} alt="" />
          <p className="max-w-72">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press </a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-1">
            <a className="link link-hover bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
              <FaInstagramSquare />
            </a>
            <a className="link link-hover bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
              <FaSquareFacebook />
            </a>
            <a className="link link-hover bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
              <FaSquareXTwitter />
            </a>
          </div>
        </nav>
      </div>
      <div className="flex flex-col  space-y-3 sm:flex-row justify-between pt-5 border-t-2 border-base-100">
        <p> @copy Digitools. All rights reserved.</p>

        <div className="flex gap-10">
          <p>Privacy </p>
          <p> Policy </p>
          <p>Terms of Service Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
