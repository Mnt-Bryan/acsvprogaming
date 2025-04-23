
import { Bot, X, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIAssistantHeaderProps {
  isMinimized: boolean;
  onMinimizeToggle: (e: React.MouseEvent) => void;
  onClose: (e: React.MouseEvent) => void;
  onExpand: () => void;
}
const AIAssistantHeader = ({
  isMinimized,
  onMinimizeToggle,
  onClose,
  onExpand,
}: AIAssistantHeaderProps) => (
  <div
    className={cn(
      "flex items-center justify-between p-3 bg-gaming-red text-white rounded-t-lg cursor-pointer",
      isMinimized && "rounded-lg"
    )}
    onClick={() => isMinimized && onExpand()}
    data-testid="ai-header"
  >
    <div className="flex items-center">
      <Bot className="mr-2" size={20} />
      <h3 className="font-semibold">ACSV Assistant</h3>
    </div>
    <div className="flex space-x-1">
      <button
        onClick={onMinimizeToggle}
        className="p-1 hover:bg-red-700 rounded"
        aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
      >
        {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <button
        onClick={onClose}
        className="p-1 hover:bg-red-700 rounded"
        aria-label="Close assistant"
      >
        <X size={16} />
      </button>
    </div>
  </div>
);
export default AIAssistantHeader;
