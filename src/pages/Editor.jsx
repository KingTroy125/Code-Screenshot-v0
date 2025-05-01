import { useEffect, useRef, useState } from "react";
import { themes, fonts } from "../options";
import useStore from "../store";
import { cn } from "../lib/utils";
import CodeEditor from "../components/CodeEditor";
import { Card, CardContent } from "../components/ui/card";
import ExportOptions from "../components/controls/ExportOptions";
import ThemeSelect from "../components/controls/ThemeSelect";
import LanguageSelect from "../components/controls/LanguageSelect";
import FontSelect from "../components/controls/FontSelect";
import FontSizeInput from "../components/controls/FontSizeInput";
import PaddingSlider from "../components/controls/PaddingSlider";
import BackgroundSwitch from "../components/controls/BackgroundSwitch";
import DarkModeSwitch from "../components/controls/DarkModeSwitch";
import { Resizable } from "re-resizable";
import { Button } from "../components/ui/button";
import { ResetIcon, ChevronLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import WidthMeasurement from "../components/WidthMeasurement";
import RetroGrid from "../components/ui/Grid";
import { Link } from "react-router-dom";

export default function Editor() {
  const [width, setWidth] = useState("auto");
  const [showWidth, setShowWidth] = useState(false);
  const [isControlsOpen, setIsControlsOpen] = useState(true);

  const theme = useStore((state) => state.theme);
  const padding = useStore((state) => state.padding);
  const fontStyle = useStore((state) => state.fontStyle);
  const showBackground = useStore((state) => state.showBackground);

  const editorRef = useRef(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size === 0) return;
    const state = Object.fromEntries(queryParams);

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : "",
      autoDetectLanguage: state.autoDetectLanguage === "true",
      darkMode: state.darkMode === "true",
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsControlsOpen(false);
      } else {
        setIsControlsOpen(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="min-h-screen flex flex-col gap-6 bg-gradient-to-br from-neutral-900 via-purple-950/20 to-blue-950/20 text-white p-4 md:p-6 relative">
      <div className="absolute top-0 z-[0] h-full w-full bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <RetroGrid />
      
      <link
        rel="stylesheet"
        href={themes[theme].theme}
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href={fonts[fontStyle].src}
        crossOrigin="anonymous"
      />

      {/* Header */}
      <div className="flex items-center justify-between relative z-10 mb-2">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="text-sm">Back to Home</span>
        </Link>
        <div className="text-xl font-bold">
          Code<span className="text-purple-400">Shot</span>
        </div>
        <div className="text-sm px-3 py-1 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-[1px] border-white/5 rounded-full">
          Editor
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="w-full overflow-hidden flex grow items-center justify-center p-3 md:p-6 bg-neutral-900/30 backdrop-blur-lg border rounded-2xl border-white/5 shadow-2xl">
            <Resizable
              enable={{ left: true, right: true }}
              minWidth={padding * 2 + 300}
              maxWidth="100%"
              size={{ width }}
              onResize={(e, dir, ref) => setWidth(ref.offsetWidth)}
              onResizeStart={() => setShowWidth(true)}
              onResizeStop={() => setShowWidth(false)}
            >
              <div
                className={cn(
                  "overflow-hidden mb-2 transition-all ease-out rounded-lg shadow-lg transform-gpu",
                  showBackground
                    ? themes[theme].background
                    : "ring-2 ring-neutral-700/50"
                )}
                style={{ padding }}
                ref={editorRef}
              >
                <CodeEditor />
              </div>
              <WidthMeasurement showWidth={showWidth} width={width} />
              <div
                className={cn(
                  "transition-opacity w-fit mx-auto -mt-4",
                  showWidth || width === "auto"
                    ? "invisible opacity-0"
                    : "visible opacity-100"
                )}
              >
                <Button 
                  size="sm" 
                  onClick={() => setWidth("auto")} 
                  variant="ghost"
                  className="hover:bg-neutral-800/50 transition-colors"
                >
                  <ResetIcon className="mr-2" />
                  Reset width
                </Button>
              </div>
            </Resizable>
          </div>
        </div>
      </div>

      {/* Toggle Controls Button (Mobile) */}
      <div className="md:hidden fixed bottom-24 right-4 z-30">
        <Button 
          className="rounded-full p-3 bg-purple-600 hover:bg-purple-700 shadow-xl"
          onClick={() => setIsControlsOpen(!isControlsOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </Button>
      </div>
      
      {/* Controls Panel */}
      <Card 
        className={`fixed ${isControlsOpen ? 'bottom-6' : '-bottom-full'} left-1/2 transform -translate-x-1/2 p-2 md:p-4 bg-neutral-900/80 backdrop-blur-xl border-white/10 rounded-2xl shadow-2xl transition-all duration-300 z-20 w-[95%] md:w-auto max-w-[1200px]`}
      >
        <Button 
          className="md:hidden absolute -top-12 left-1/2 transform -translate-x-1/2 rounded-t-lg rounded-b-none py-2 bg-neutral-900/80 backdrop-blur-xl border-white/10 border-b-0 text-xs"
          onClick={() => setIsControlsOpen(!isControlsOpen)}
        >
          {isControlsOpen ? 'Hide Controls' : 'Show Controls'}
        </Button>
        <CardContent className="p-2 overflow-x-auto">
          <div className="flex flex-nowrap md:flex-wrap gap-3 md:gap-6 min-w-max">
            <div className="flex flex-nowrap items-center gap-3 md:gap-6">
              <ThemeSelect />
              <LanguageSelect />
              <FontSelect />
              <FontSizeInput />
              <PaddingSlider />
              <BackgroundSwitch />
              <DarkModeSwitch />
            </div>
            <div className="hidden md:block w-px self-stretch bg-neutral-800/50" />
            <div className="place-self-center">
              <ExportOptions targetRef={editorRef} />
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
} 