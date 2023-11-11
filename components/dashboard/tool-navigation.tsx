import { TOOLS } from '@/constants';
import { cn } from '@/lib/utils';
import React from 'react';
import ToolItem from './tool-item';

const ToolNavigation = () => {
    return (
        <div
            className={cn(
                'flex flex-col w-full items-center grow px-10 py-20 overflow-auto scroll-smooth scrollbar-none',
                'lg:px-4 lg:pt-0 lg:pb-6',
                '2xl:py-12'
            )}
        >
            <div className="text-center mb-14">
                <h3>Unlock the power of AI</h3>
                <p className=" text-muted-foreground text-lg mt-2">
                    Chat with the smartest AI - Experience the power of AI with
                    us
                </p>
            </div>
            <div className="w-full max-w-[30.75rem] mx-auto">
                {TOOLS.map((item) => (
                    <ToolItem key={item.url} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ToolNavigation;
