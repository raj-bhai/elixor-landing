import React from 'react';

export default function CTAButton({ text, onClick, subtext }) {
  return (
    <div className="flex flex-col items-center mt-12">
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-[#A32CC4] to-[#600080] hover:from-[#B238D7] hover:to-[#7D1E99] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transition"
      >
        {text}
      </button>
      {subtext && (
        <p className="text-center text-sm mt-2">
          {subtext}
        </p>
      )}
    </div>
  );
}
