"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Home() {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log(token);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>This is first page for course management system</h1>
    </div>
  );
}
