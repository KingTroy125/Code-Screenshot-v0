import useStore from "../../store";
import { Slider } from "../ui/slider";

export default function PaddingSlider() {
  const padding = useStore((state) => state.padding);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label className="text-xs text-neutral-400 font-medium">Padding</label>
        <span className="text-xs text-neutral-400">{padding}px</span>
      </div>
      <Slider
        className="w-36 my-1"
        value={[padding]}
        onValueChange={([padding]) => useStore.setState({ padding })}
        min={32}
        max={128}
        step={8}
        thumbClassName="h-3 w-3 bg-white border-2 border-neutral-700/50"
        trackClassName="bg-neutral-800/50"
      />
    </div>
  );
}
