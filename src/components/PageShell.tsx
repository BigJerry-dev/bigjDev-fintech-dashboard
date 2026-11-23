import type { ReactNode } from "react";
import Header from "./Header";
import TitleBar from "./TitleBar";

type Props = {
  title: string;
  pill?: string;
  children: ReactNode;
};

export default function PageShell({ title, pill, children }: Props) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl p-6 flex flex-col gap-6">
      <Header />
      <TitleBar title={title} pill={pill} />
      {children}
    </main>
  );
}