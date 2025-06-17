import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
          <p>
            Follow us on:
            <Link href="https://twitter.com" className="text-blue-400 ml-2">
              Twitter
            </Link>{" "}
            |
            <Link href="https://facebook.com" className="text-blue-400 ml-2">
              Facebook
            </Link>{" "}
            |
            <Link href="https://instagram.com" className="text-blue-400 ml-2">
              Instagram
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
