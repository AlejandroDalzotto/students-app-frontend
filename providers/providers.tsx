"use client";

import CreateCourseModal from '@/app/ui/dashboard/modals/CreateCourseModal';
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
      {isOpen && modal === "create-course" && <CreateCourseModal />}
      {children}
    </ThemeProvider>
  )
}
