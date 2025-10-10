import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import { Hero } from "@/components/ui/hero";
import Keyboard from "@/components/ui/keyboard";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-center bg-neutral-900">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <Hero />
      <Keyboard />
    </div>
  );
}
