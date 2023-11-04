'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
// import axios from 'axios';
import { useToast } from './ui/use-toast';

type Props = {
    className?: string;
    isPro?: boolean;
};

const SubscriptionButton: React.FC<Props> = ({ className, isPro }) => {
    const { toast } = useToast();

    const [loading, setLoading] = useState<boolean>(false);

    const handleSubscribe = async () => {
        try {
            setLoading(true);
            // const { data } = await axios.get('/api/stripe');
        } catch (error) {
            toast({
                variant: 'destructive',
                description: 'Something when wrong. Please try again!',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={className}>
            <Button
                variant="outline"
                size="lg"
                disabled={loading}
                onClick={handleSubscribe}
                className={cn(
                    'text-white w-full font-semibold border-none gradient-btn',
                    'hover:text-white',
                )}
            >
                <span>{isPro ? 'Manage Subscription' : 'Upgrade to Pro'}</span>
                <Sparkles />
            </Button>
        </div>
    );
};

export default SubscriptionButton;
