'use client';

import React from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useSidebarStore } from '@/store/sidebar-store';
import Sidebar from '.';

type Props = {
    isProPlan?: boolean;
    userLimitCount: number;
};

const MobileSidebar: React.FC<Props> = ({ isProPlan, userLimitCount }) => {
    const { isOpen } = useSidebarStore();

    return (
        <Sheet open={isOpen}>
            <SheetContent
                className="w-screen border-none bg-black p-0 pt-8"
                side="left"
            >
                <Sidebar
                    isProPlan={isProPlan}
                    userLimitCount={userLimitCount}
                />
            </SheetContent>
        </Sheet>
    );
};

MobileSidebar.defaultProps = {
    isProPlan: undefined,
};

export default MobileSidebar;
