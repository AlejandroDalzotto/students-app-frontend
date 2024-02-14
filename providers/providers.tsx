"use client";

import CreateModuleModal from '@/app/ui/dashboard/modals/CreateModuleModal';
import { useModalStore } from '@/stores';
import { ThemeProvider } from 'next-themes'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {

  const { isOpen, modal } = useModalStore()

  return (
    <ThemeProvider>
      {isOpen && modal === "create-module" && <CreateModuleModal />}
      {children}
    </ThemeProvider>
  )
}
