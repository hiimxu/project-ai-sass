import { create } from 'zustand';

export type ProState = {
    isOpen: boolean;
    handleOpenOrCloseProModel: () => void;
    handleCloseProModel: () => void;
};

export const useProStore = create<ProState>((set) => ({
    isOpen: false,
    handleOpenOrCloseProModel: () =>
        set((state) => ({ ...state, isOpen: !state.isOpen })),
    handleCloseProModel: () => set((state) => ({ ...state, isOpen: false })),
}));
