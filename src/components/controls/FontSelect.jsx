import { fonts } from "../../options";
import useStore from "../../store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "../../lib/utils";

export default function FontSelect() {
  const fontStyle = useStore((state) => state.fontStyle);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-neutral-400 font-medium">Font</label>
      <Select
        value={fontStyle}
        onValueChange={(fontStyle) => useStore.setState({ fontStyle })}
      >
        <SelectTrigger
          className="w-[180px] bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 transition-colors"
        >
          <SelectValue placeholder="Select font" />
        </SelectTrigger>
        <SelectContent className="max-h-[500px]">
          {Object.entries(fonts).map(([id, font]) => (
            <SelectItem
              key={id}
              value={id}
              className={cn(
                "hover:bg-neutral-800/50 focus:bg-neutral-800/50 cursor-pointer",
                "transition-colors duration-200"
              )}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium" style={{ fontFamily: font.name }}>
                  {font.name}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
