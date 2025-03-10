import useStore from "../../store";
import { Input } from "../ui/input";

export default function FontSizeInput() {
  const fontSize = useStore((state) => state.fontSize);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-neutral-400 font-medium">Font Size</label>
      <Input
        type="number"
        className="w-24 h-9 bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 transition-colors"
        min={6}
        max={40}
        value={fontSize}
        onChange={(e) => useStore.setState({ fontSize: Number(e.target.value) })}
      />
    </div>
  );
}
