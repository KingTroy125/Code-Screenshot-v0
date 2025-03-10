import { useState, useCallback } from "react";
import useStore from "../../store";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { toBlob, toPng, toSvg } from "html-to-image";
import { toast } from "sonner";
import { cn } from "../../lib/utils";
import { DownloadIcon, CopyIcon, ImageIcon, CodeIcon } from "@radix-ui/react-icons";

export default function ExportOptions({ targetRef }) {
  const [isLoading, setIsLoading] = useState(false);

  const copyImage = useCallback(async () => {
    try {
      setIsLoading(true);
      const imgBlob = await toBlob(targetRef.current, {
        pixelRatio: 2,
      });
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": imgBlob,
        }),
      ]);
      toast.success("Image copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy image");
    } finally {
      setIsLoading(false);
    }
  }, [targetRef]);

  const copyCode = useCallback(async () => {
    try {
      const code = targetRef.current.querySelector("code");
      await navigator.clipboard.writeText(code.innerText);
      toast.success("Code copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy code");
    }
  }, [targetRef]);

  const exportToPNG = useCallback(async () => {
    try {
      setIsLoading(true);
      const dataUrl = await toPng(targetRef.current, {
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = "code-screenshot.png";
      link.href = dataUrl;
      link.click();
      toast.success("Exported as PNG");
    } catch (error) {
      toast.error("Failed to export as PNG");
    } finally {
      setIsLoading(false);
    }
  }, [targetRef]);

  const exportToSVG = useCallback(async () => {
    try {
      setIsLoading(true);
      const dataUrl = await toSvg(targetRef.current, {
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = "code-screenshot.svg";
      link.href = dataUrl;
      link.click();
      toast.success("Exported as SVG");
    } catch (error) {
      toast.error("Failed to export as SVG");
    } finally {
      setIsLoading(false);
    }
  }, [targetRef]);

  return (
    <div className="flex gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "gap-2 bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800",
              "transition-colors"
            )}
            disabled={isLoading}
          >
            <ImageIcon className="w-4 h-4" />
            Export Image
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={copyImage}
            className="gap-2 cursor-pointer hover:bg-neutral-800/50"
          >
            <CopyIcon className="w-4 h-4" />
            Copy Image
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={exportToPNG}
            className="gap-2 cursor-pointer hover:bg-neutral-800/50"
          >
            <DownloadIcon className="w-4 h-4" />
            Save as PNG
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={exportToSVG}
            className="gap-2 cursor-pointer hover:bg-neutral-800/50"
          >
            <DownloadIcon className="w-4 h-4" />
            Save as SVG
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="outline"
        className={cn(
          "gap-2 bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800",
          "transition-colors"
        )}
        onClick={copyCode}
      >
        <CodeIcon className="w-4 h-4" />
        Copy Code
      </Button>
    </div>
  );
}
