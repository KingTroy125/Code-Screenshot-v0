import useStore from "../../store";
import { Switch } from "../ui/switch";

export default function DarkModeSwitch() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <div className="flex items-center gap-3">
      <Switch
        id="dark-mode"
        checked={darkMode}
        onCheckedChange={(darkMode) => useStore.setState({ darkMode })}
        className="bg-neutral-800/50 data-[state=checked]:bg-neutral-600 border border-neutral-700/50"
      />
      <label
        htmlFor="dark-mode"
        className="text-xs text-neutral-400 font-medium cursor-pointer select-none"
      >
        Dark Mode
      </label>
    </div>
  );
}
