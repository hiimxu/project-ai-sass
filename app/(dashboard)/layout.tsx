import UpgradeProModal from '@/components/dashboard/upgrade-pro-model';
import Sidebar from '@/components/sidebar';
import MobileSidebar from '@/components/sidebar/mobile-sidebar';
import TopBar from '@/components/top-bar';
import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
    const isProPlan: boolean = false;
    const userLimitCount: number = 0;
    return (
        <div>
            <header>
                <TopBar />
            </header>
            <main className="lg:bg-gray-950 lg:overflow-hidden lg:pl-80 [&:has([is-navbar-minimal])]:lg:pl-20 lg:pr-7 lg:py-7">
                <Sidebar
                    isProPlan={isProPlan}
                    userLimitCount={userLimitCount}
                    className={cn(
                        'fixed left-0 z-20 w-80 [&:has([is-navbar-minimal])]:w-fit hidden',
                        'lg:block',
                    )}
                />
                <MobileSidebar
                    isProPlan={isProPlan}
                    userLimitCount={userLimitCount}
                />
                <UpgradeProModal isProPlan={isProPlan} />
                <div
                    className={cn(
                        'bg-background h-[calc(100vh-56px)]',
                        'lg:rounded-3xl lg:p-7',
                    )}
                >
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
