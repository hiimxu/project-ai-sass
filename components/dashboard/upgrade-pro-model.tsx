'use client';

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useProStore } from '@/store/pro-store';
import SubscriptionButton from '../subscription-button';

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

UpgradeProModal.defaultProps = {
    isProPlan: undefined,
};

export default UpgradeProModal;
