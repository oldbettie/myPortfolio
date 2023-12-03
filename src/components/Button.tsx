import Link from "next/link"
import { twMerge } from "tailwind-merge"
import React from "react"

export interface ButtonProps {
  children: React.ReactNode
  click?: () => void
  path?: string
  className?: string
  target?: string
}

export function Button({ children, click, path, target, className = "" }: ButtonProps): JSX.Element {
  return (
    <button className={twMerge(`p-2 hover:text-font_main`, className)} onClick={click}>
      {path ? (
        <Link target={target} href={path}>
          {children}
        </Link>
      ) : (
        <p>{children}</p>
      )}
    </button>
  )
}
