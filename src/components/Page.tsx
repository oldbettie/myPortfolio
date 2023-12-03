import { ReactNode } from "react";
import { Background } from "@/components/Background";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <main className="h-full">
      <Background />
      <div className="mx-auto mt-12 lg:max-w-[1330px] w-[95%] h-full relative">
        {children}
      </div>
    </main>
  );
}
