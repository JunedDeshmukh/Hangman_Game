import { create } from 'zustand';

// create function creates a store for us

const useHintStore = create((set) => ({
    
    hint: '',

    setHint: (newHint) => {
        set((state) => {
            return {
                ...state,
                hint: newHint
            }
        });
    }
}));

export default useHintStore;