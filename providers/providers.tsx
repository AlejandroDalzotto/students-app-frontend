"use client";

import CreateCourseModal from '@/app/ui/dashboard/modals/CreateCourseModal';
import CreateExamModal from '@/app/ui/dashboard/modals/CreateExamModal';
import CreateModuleModal from '@/app/ui/dashboard/modals/CreateModuleModal';
import RegisterToExamModal from '@/app/ui/dashboard/modals/RegisterToExamModal';
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
      {isOpen && modal === "register-to-exam" && <RegisterToExamModal />}
      {isOpen && modal === "create-exam" && <CreateExamModal />}
      {isOpen && modal === "create-module" && <CreateModuleModal />}
      {children}
    </ThemeProvider>
  )
}
