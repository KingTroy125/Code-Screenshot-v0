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
import { ResetIcon } from "@radix-ui/react-icons";
import WidthMeasurement from "../components/WidthMeasurement";

export default function Editor() {
  const [width, setWidth] = useState("auto");
  const [showWidth, setShowWidth] = useState(false);

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

  return (
    <main className="dark min-h-screen flex flex-col gap-6 bg-gradient-to-br from-neutral-950 to-neutral-900 text-white p-6">
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

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="w-full overflow-hidden flex grow items-center justify-center p-6 bg-neutral-900/50 backdrop-blur-lg border rounded-2xl border-neutral-800/50 shadow-2xl">
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

      <Card className="fixed bottom-6 left-1/2 transform -translate-x-1/2 p-4 bg-neutral-900/90 backdrop-blur-xl border-neutral-800/50 rounded-2xl shadow-2xl">
        <CardContent className="flex flex-wrap gap-6 p-2">
          <div className="flex flex-wrap items-center gap-6">
            <ThemeSelect />
            <LanguageSelect />
            <FontSelect />
            <FontSizeInput />
            <PaddingSlider />
            <BackgroundSwitch />
            <DarkModeSwitch />
          </div>
          <div className="w-px self-stretch bg-neutral-800/50" />
          <div className="place-self-center">
            <ExportOptions targetRef={editorRef} />
          </div>
        </CardContent>
      </Card>
    </main>
  );
} 