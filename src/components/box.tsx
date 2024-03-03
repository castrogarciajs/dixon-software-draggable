import React from 'react'

export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <button className="shadow size-12 rounded-full bg-white flex items-center justify-center cursor-grab">
      {children}
    </button>
  )
}
