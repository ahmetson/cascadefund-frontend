import { cn } from "@/lib/utils";

function GridSmallBackground() {
  return (
    <div className="fixed h-screen w-screen z-0 bg-gray-black">
      <div
        className={cn(
          "absolute inset-0 bg-fixed",
          "[background-size:20px_20px]",
          // "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          // "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "[background-image:linear-gradient(to_right,#969696_1px,transparent_1px),linear-gradient(to_bottom,#969696_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      {/* For Fark Mode <div className="bg-fixed pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
      <div className="bg-fixed pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] "></div>
    </div>
  );
}

export default GridSmallBackground