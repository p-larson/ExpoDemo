import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Flasher() {
  return (
    <Toaster />
  )
}

Flasher.success = toast.success;
Flasher.warning = toast.error;
Flasher.error = toast.error;
Flasher.chat = toast.custom()

export { Flasher };