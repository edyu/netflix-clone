import React from "react";

interface MobileMenuItemProps {
    label: string;
    active?: boolean;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ label, active }) => {
    return (
        <div className={`px-3 text-center ${active ? 'text-white cursor-default' : 'text-gray-200 hover:underline cursor-pointer transition'}
        `}>
            {label}
        </div>
    )
}

export default MobileMenuItem;
