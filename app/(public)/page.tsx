import { Header } from "@/src/components/main/Header"
import { Body } from "@/src/components/main/Body";
import { Bottom } from "@/src/components/main/Bottom";

export default function Home() {
  return (
    <>
      <header><Header/></header>
      <body><Body/></body>
      <section><Bottom/></section>      
   </>
    
  );
}
