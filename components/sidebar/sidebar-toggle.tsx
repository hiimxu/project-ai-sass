import { useSidebarStore } from '@/store/sidebar-store';
import Image from 'next/image';
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

const SidebarToggle = () => {
    const { isMinimal, handleChangeSidebar, handleOpenOrClose } =
        useSidebarStore();

    return (
        <div>
            <div
                className="cursor-pointer hidden lg:block"
                is-navbar-minimal={isMinimal ? 'true' : undefined}
                onClick={handleChangeSidebar}
                role="presentation"
            >
                <Image
                    alt="navbar icon"
                    height={24}
                    src={`/icons/menu-${isMinimal ? 'open' : 'close'}.svg`}
                    width={24}
                />
            </div>
            <Button
                className="lg:hidden"
                onClick={handleOpenOrClose}
                size="icon"
                variant="ghost"
            >
                <X />
            </Button>
        </div>
    );
};

export default SidebarToggle;
