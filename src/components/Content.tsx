import { ReactNode } from "react"

interface PageProps {
  children: ReactNode
}

export function Content({ children }: PageProps) {
  return (
    <main className="h-full">
      <div className="mx-auto lg:max-w-[1330px] w-[95%] h-full">{children}</div>
    </main>
  )
}
