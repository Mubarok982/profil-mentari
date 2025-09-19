// components/OrgChartLevel.js
import React from 'react';

// Digunakan untuk menampung node secara horizontal
export const OrgChartLevel = ({ children }) => (
  <div className="flex justify-center gap-8 md:gap-16 mt-8 relative">
    {children}
  </div>
);

// Digunakan untuk menggambar garis konektor
export const OrgChartConnector = ({ type }) => {
  // Styles untuk konektor
  const baseStyle = "absolute bg-gray-400";

  switch (type) {
    case 'top-bottom': // Garis vertikal dari atas ke bawah
      return <div className={`${baseStyle} w-px h-8 -top-8 left-1/2 -translate-x-1/2`}></div>;
    case 'bottom-top': // Garis vertikal dari bawah ke atas
      return <div className={`${baseStyle} w-px h-8 -bottom-8 left-1/2 -translate-x-1/2`}></div>;
    case 'vertical-middle': // Garis vertikal di antara dua level, dari center node ke horizontal line
        return <div className={`${baseStyle} w-px h-16 top-0 left-1/2 -translate-x-1/2 -translate-y-full`}></div>;
    case 'horizontal-full': // Garis horizontal penuh di bawah parent
        return <div className={`${baseStyle} h-px w-full left-0 bottom-0`}></div>;
    case 'horizontal-segment-left': // Segmen horizontal ke kiri
        return <div className={`${baseStyle} h-px left-0 bottom-0 w-1/2`}></div>;
    case 'horizontal-segment-right': // Segmen horizontal ke kanan
        return <div className={`${baseStyle} h-px right-0 bottom-0 w-1/2`}></div>;
    case 'vertical-child': // Garis vertikal dari horizontal line ke child
        return <div className={`${baseStyle} w-px h-8 top-0 left-1/2 -translate-x-1/2`}></div>;
    default:
      return null;
  }
};