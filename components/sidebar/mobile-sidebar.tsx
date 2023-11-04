'use client';
import React from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Sidebar from '.';
import { useSidebarStore } from '@/store/sidebar-store';

type Props = {
    isProPlan?: boolean;
    userLimitCount: number;
};

const MobileSidebar: React.FC<Props> = ({ isProPlan, userLimitCount }) => {
    const { isOpen } = useSidebarStore();

    return (
        <Sheet open={isOpen}>
            <SheetContent
                side="left"
                className="w-screen border-none bg-black p-0 pt-8"
            >
                <Sidebar
                    userLimitCount={userLimitCount}
                    isProPlan={isProPlan}
                />
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
