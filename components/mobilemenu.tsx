import React from 'react';

import MobileMenuItem from './mobilemenuitem';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                <MobileMenuItem label="Home" active />
                <MobileMenuItem label="Series" />
                <MobileMenuItem label="Films" />
                <MobileMenuItem label="New & Popular" />
                <MobileMenuItem label="My List" />
                <MobileMenuItem label="Browse by languages" />
            </div>
        </div>
    )
};

export default MobileMenu;
