'use client';

import { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import NavlinksMobile from './NavlinksMobile';

export default function HeaderMobileClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setOpen(!open)} className="h-10 w-10">
          {open ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBarsStaggered className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <NavlinksMobile
        handleOpen={() => setOpen(false)}
        isMobileMenuOpen={open}
      />
    </>
  );
}
