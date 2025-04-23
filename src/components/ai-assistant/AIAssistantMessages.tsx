
import { cn } from "@/lib/utils";
import { Message } from "@/components/ai-assistant/types";
import { RefObject } from "react";

interface AIAssistantMessagesProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: RefObject<HTMLDivElement>;
  isMinimized: boolean;
}

const AIAssistantMessages = ({
  messages,
  isLoading,
  messagesEndRef,
  isMinimized,
}: AIAssistantMessagesProps) => {
  if (isMinimized) return null;
  return (
    <div className="p-3 h-[calc(32rem-6rem)] overflow-y-auto bg-black/20">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={cn(
            "mb-3 p-3 rounded-lg max-w-[85%]",
            msg.role === "user"
              ? "bg-gaming-red/80 ml-auto text-white"
              : "bg-gaming-gray/80 border border-gaming-black text-white"
          )}
        >
          <p className="text-sm">{msg.content}</p>
          <p className="text-xs opacity-70 mt-1 text-right">
            {msg.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      ))}
      {isLoading && (
        <div className="bg-gaming-gray/80 border border-gaming-black text-white mb-3 p-3 rounded-lg max-w-[85%]">
          <div className="flex space-x-1 items-center">
            <div
              className="w-2 h-2 bg-gaming-red rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-gaming-red rounded-full animate-bounce"
              style={{ animationDelay: "100ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-gaming-red rounded-full animate-bounce"
              style={{ animationDelay: "200ms" }}
            ></div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default AIAssistantMessages;
