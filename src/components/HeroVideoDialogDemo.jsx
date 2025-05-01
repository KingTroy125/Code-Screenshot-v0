import HeroVideoDialog from "./HeroVideoDialog";

export default function HeroVideoDialogDemo() {
  return (
    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 shadow-lg backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="relative rounded-2xl overflow-hidden bg-neutral-900/70 backdrop-blur-sm p-3">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc=""
          thumbnailSrc="https://tristan-hendricks.netlify.app/_astro/Code-Screenshot.BlQGiFQl_Z1GiEKl.webp"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc=""
          thumbnailSrc="https://tristan-hendricks.netlify.app/_astro/Code-Screenshot.BlQGiFQl_Z1GiEKl.webp"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
} 