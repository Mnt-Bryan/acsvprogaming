
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIAssistantInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
  isMinimized: boolean;
}
const AIAssistantInput = ({
  value,
  onChange,
  onSend,
  onKeyDown,
  disabled,
  isMinimized
}: AIAssistantInputProps) => {
  if (isMinimized) return null;
  return (
    <div className="p-3 border-t border-gaming-black">
      <div className="flex items-end">
        <Textarea
          placeholder="Ask me anything about ACSV..."
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="resize-none bg-black/30 border-gaming-black text-white min-h-[60px]"
        />
        <Button
          onClick={onSend}
          disabled={disabled}
          className="ml-2 bg-gaming-red hover:bg-red-700 h-10 w-10 p-0"
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
};
export default AIAssistantInput;
