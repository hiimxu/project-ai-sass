'use client';
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import SubscriptionButton from '../subscription-button';
import { useProStore } from '@/store/pro-store';

type Props = {
    isProPlan?: boolean;
};

const UpgradeProModal: React.FC<Props> = ({ isProPlan }) => {
    const { isOpen, handleOpenOrCloseProModel } = useProStore();

    return (
        <Dialog open={isOpen}>
            <DialogContent
                onClose={() => {
                    handleOpenOrCloseProModel();
                }}
                showOverlay
            >
                <SubscriptionButton isPro={isProPlan} />
            </DialogContent>
        </Dialog>
    );
};

export default UpgradeProModal;
