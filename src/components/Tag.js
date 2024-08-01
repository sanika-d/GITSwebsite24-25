import React from "react";

const Tag = ({ children }) => {
  return (
    <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full text-gray-100 border">
      {children}
    </div>
  );
};

export default Tag;
