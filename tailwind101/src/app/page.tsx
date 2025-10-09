import Image from "next/image";
import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative 
     [background:radial-gradient(var(--background-width)_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}
