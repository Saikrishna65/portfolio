import React from "react";

const ResumeButtons = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center items-center">
      <a
        href="/Sai_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00CAFF] text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        View Resume
      </a>

      <a
        href="/Sai_Resume.pdf"
        download
        className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
      >
        Download
      </a>
    </div>
  );
};

export default ResumeButtons;
