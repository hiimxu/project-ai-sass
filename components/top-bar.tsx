'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Menu } from 'lucide-react';
import { useSidebarStore } from '@/store/sidebar-store';
import Logo from './logo';
import { Button } from './ui/button';

const TopBar = () => {
    const { handleOpenOrClose } = useSidebarStore();

    return (
        <div
            className={cn(
                'flex items-center p-4 justify-between sticky top-0 z-30',
                'lg:hidden'
            )}
        >
            <Logo />
            <Button onClick={handleOpenOrClose} size="icon" variant="ghost">
                <Menu />
            </Button>
        </div>
    );
};

export default TopBar;
