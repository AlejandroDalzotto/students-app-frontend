import { create } from "zustand"

type ModalName = "create-module"

interface State {
  isOpen: boolean;
  modal: ModalName | null,
  openModal: (m: ModalName) => void;
  closeModal: () => void;
}

export const useModalStore = create<State>()((set, get) => ({
  isOpen: false,
  modal: null,

  openModal: (m: ModalName) => set({ isOpen: true, modal: m }),
  closeModal: () => set({ isOpen: false, modal: null }),
}))