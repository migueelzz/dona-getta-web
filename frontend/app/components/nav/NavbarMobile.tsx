'use client'

import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const NavbarMobile = () => {
    const [isMenu, setIsMenu] = useState(false)

    const openMenu = () => setIsMenu(true);
    const closeMenu = () => setIsMenu(false);

    return ( 
        <div className="md:hidden sticky top-0 w-full bg-white z-30 shadow-lg">
            <div className="flex items-center justify-between p-4">
                <div
                    onClick={openMenu} 
                    className="lg:hidden cursor-pointer">
                    <GiHamburgerMenu size={30} />
                </div>
                <div className="flex items-center gap-4">
                    <div className="cursor-pointer">
                        <FaRegUserCircle size={30} />
                    </div>
                    <div className="cursor-pointer">
                        <FiShoppingBag size={30} />
                    </div>
                </div>
            </div>

            {isMenu ? null : null }
        </div>
     );
}
 
export default NavbarMobile;