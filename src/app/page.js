import Image from "next/image";
import bg from "../../public/background/test3.webp";
// import girl from "../../public/background/girl1.png";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-60"
      />
      <div className="w-full h-screen">
        <Navigation />
        {/* navigation and 3d model */}
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
