"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select className='py-3 px-6 w-fit' value={theme} defaultValue={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">Predeterminado del sistema</option>
      <option value="dark">Activado</option>
      <option value="light">Desactivado</option>
    </select>
  )
}

export default ThemeSwitch