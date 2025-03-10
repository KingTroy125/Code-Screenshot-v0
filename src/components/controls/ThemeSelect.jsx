import { themes } from "../../options";
import useStore from "../../store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "../../lib/utils";

export default function ThemeSelect() {
  const theme = useStore((state) => state.theme);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-neutral-400 font-medium">Theme</label>
      <Select
        value={theme}
        onValueChange={(theme) => useStore.setState({ theme })}
      >
        <SelectTrigger
          className="w-[180px] bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 transition-colors"
        >
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent className="max-h-[500px]">
          {/* Object.entries(themes) returns an array of key-value pairs, where each pair consists of a theme name (name) and its corresponding theme object (theme) */}
          {Object.entries(themes).map(([name, theme]) => (
            <SelectItem
              key={name}
              value={name}
              className={cn(
                "hover:bg-neutral-800/50 focus:bg-neutral-800/50 cursor-pointer",
                "transition-colors duration-200"
              )}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full border border-neutral-700/50"
                  style={{ background: theme.background }}
                />
                <span className="capitalize">{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
