import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    icon: string;
    title: string;
    url: string;
    slug: 'code' | 'audio' | 'video' | 'photo' | 'conversation';
};

const toolItemColorVariants = cva('absolute inset-0 opacity-20 rounded-xl', {
    variants: {
        color: {
            code: 'bg-green-500',
            audio: 'bg-orange-500',
            video: 'bg-amber-500',
            photo: 'bg-violet-500',
            conversation: 'bg-blue-500',
        },
    },
    defaultVariants: {
        color: 'code',
    },
});

const ToolItem: React.FC<Props> = ({ icon, title, url, slug }) => {
    return (
        <div
            className={cn(
                'group flex items-center mb-5 p-3.5 border rounded-xl transition-all',
                'hover:border-transparent hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] last:mb-0 2xl:p-2.5 lg:p-3.5',
                'last:mb-0',
                'lg:p-3.5',
                '2xl:p-2.5'
            )}
        >
            <Link className="w-full" href={url}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="mr-6 rounded-lg p-1 w-16 h-16 relative flex justify-center">
                            <div
                                className={cn(
                                    toolItemColorVariants({ color: slug })
                                )}
                            />
                            <Image
                                alt={title}
                                height={24}
                                src={icon}
                                width={24}
                            />
                        </div>
                        <span className="font-medium">{title}</span>
                    </div>
                    <ArrowRight />
                </div>
            </Link>
        </div>
    );
};

export default ToolItem;
