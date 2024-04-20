import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { useState } from 'react';
export default function Header() {
  const [click, setclick] = useState(false);
  function mobileMenu() {
    setclick(!click)
  }
  return (
    <header className="py-7 z-20 bg-white relative ">
      <div className="max-w-7xl mx-auto w-full px-2">
        <DesktopNavigation className="md:hidden" />
        <MobileNavigation className="hidden md:flex md:items-center"></MobileNavigation>
      </div>
    </header>
  )
}
