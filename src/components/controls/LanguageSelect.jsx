import { languages } from "../../options"
import useStore from "../../store"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { cn } from "../../lib/utils"

export default function LanguageSelect() {
  const language = useStore((state) => state.language)
  const autoDetectLanguage = useStore((state) => state.autoDetectLanguage)

  const handleChange = (language) => {
    if (language === "auto") {
      useStore.setState({ autoDetectLanguage: true, language: "plaintext" })
    } else {
      useStore.setState({ autoDetectLanguage: false, language })
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-neutral-400 font-medium">Language</label>
      <Select value={autoDetectLanguage ? "auto" : language} onValueChange={handleChange}>
        <SelectTrigger 
          className="w-[180px] bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 transition-colors"
        >
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="max-h-[500px]">
          <SelectItem
            value="auto"
            className={cn(
              "hover:bg-neutral-800/50 focus:bg-neutral-800/50 cursor-pointer",
              "transition-colors duration-200"
            )}
          >
            Auto Detect
          </SelectItem>
          {Object.entries(languages).map(([lang, name]) => (
            <SelectItem
              key={lang}
              value={lang}
              className={cn(
                "hover:bg-neutral-800/50 focus:bg-neutral-800/50 cursor-pointer",
                "transition-colors duration-200"
              )}
            >
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}