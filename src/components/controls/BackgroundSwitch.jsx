import useStore from "../../store";
import { Switch } from "../ui/switch";

export default function BackgroundSwitch() {
  const showBackground = useStore((state) => state.showBackground);

  return (
    <div className="flex items-center gap-3">
      <Switch
        id="background"
        checked={showBackground}
        onCheckedChange={(showBackground) => useStore.setState({ showBackground })}
        className="bg-neutral-800/50 data-[state=checked]:bg-neutral-600 border border-neutral-700/50"
      />
      <label
        htmlFor="background"
        className="text-xs text-neutral-400 font-medium cursor-pointer select-none"
      >
        Background
      </label>
    </div>
  );
}
