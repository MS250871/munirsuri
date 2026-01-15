// components/CenteredItems.js

import React from 'react';

const CenteredItems = () => {
  return (
    <div className="relative w-64 h-64 bg-gray-200">
      {/* Child 1 */}
      <div className="relative">Child 1</div>

      {/* Child 2 */}
      <div className="relative">Child 2</div>

      {/* Child 3 */}
      <div className="relative">Child 3</div>

      {/* 4th Child with 6 items */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500">
          Item 1
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-red-500">
          Item 2
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-green-500">
          Item 3
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-yellow-500">
          Item 4
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-purple-500">
          Item 5
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-pink-500">
          Item 6
        </div>
      </div>
    </div>
  );
};

export default CenteredItems;
