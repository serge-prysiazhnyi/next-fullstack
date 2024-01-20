import { lusitana } from "@/app/ui/fonts";

export default function About() {
  return (
    <div>
      <h1 className="text-blue-500">About</h1>
      <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
      <div className={lusitana.className}>Lorem ipsum dolor sit amet.</div>
    </div>
  );
}
