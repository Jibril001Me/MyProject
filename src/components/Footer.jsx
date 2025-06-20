import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://www.freepik.com/free-photos-vectors/netflix-background')",
        }}
        aria-hidden="true"
      ></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Company</h1>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Support</h1>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Social</h1>
          <ul className="space-y-2 text-sm">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;