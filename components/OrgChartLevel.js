import React from 'react';

export const OrgChartLevel = ({ children }) => (
  <div className="flex justify-center gap-8 md:gap-16 mt-8 relative">
    {children}
  </div>
);

export const OrgChartConnector = ({ type }) => {
  const baseStyle = "absolute bg-gray-400";

  switch (type) {
    case 'top-bottom': 
      return <div className={`${baseStyle} w-px h-8 -top-8 left-1/2 -translate-x-1/2`}></div>;
    case 'bottom-top': 
      return <div className={`${baseStyle} w-px h-8 -bottom-8 left-1/2 -translate-x-1/2`}></div>;
    case 'vertical-middle': 
        return <div className={`${baseStyle} w-px h-16 top-0 left-1/2 -translate-x-1/2 -translate-y-full`}></div>;
    case 'horizontal-full': 
        return <div className={`${baseStyle} h-px w-full left-0 bottom-0`}></div>;
    case 'horizontal-segment-left': 
        return <div className={`${baseStyle} h-px left-0 bottom-0 w-1/2`}></div>;
    case 'horizontal-segment-right': 
        return <div className={`${baseStyle} h-px right-0 bottom-0 w-1/2`}></div>;
    case 'vertical-child': 
        return <div className={`${baseStyle} w-px h-8 top-0 left-1/2 -translate-x-1/2`}></div>;
    default:
      return null;
  }
};