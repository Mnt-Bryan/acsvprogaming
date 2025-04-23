
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  AIAssistantHeader,
  AIAssistantMessages,
  AIAssistantInput,
  Message
} from "@/components/ai-assistant";

interface AIAssistantProps {
  initiallyOpen?: boolean;
}

const EDGE_FUNCTION_URL = "https://vqbzdwvfgbkczwbjdbfr.functions.supabase.co/site-ai-assistant";

const AIAssistant = ({ initiallyOpen = false }: AIAssistantProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm ACSV Assistant. How can I help you with gaming tournaments, news, reviews or anything else related to ACSV?",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (messagesEndRef.current && isOpen && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const messagesToSend = messages
        .map(m => ({ role: m.role, content: m.content }))
        .concat({ role: "user", content: message });

      const { data: { session } } = await supabase.auth.getSession();

      const res = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": session?.access_token ? `Bearer ${session.access_token}` : ""
        },
        body: JSON.stringify({ messages: messagesToSend })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Error response:", res.status, errorData);
        throw new Error(errorData.error || `Error: ${res.status}`);
      }

      const data = await res.json();

      if (!data.assistant) {
        throw new Error("No response received from assistant");
      }

      const aiMessage: Message = {
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        role: "assistant",
        content: data.assistant,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error
          ? error.message
          : "Could not get a response. Please try again later."
      });
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gaming-red text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-all duration-300"
      >
        <Bot size={24} />
      </Button>
    );
  }

  return (
    <div
      className={cn(
        "fixed right-4 bg-gaming-gray border border-gaming-black rounded-lg shadow-lg transition-all duration-300 z-50",
        isMinimized ? "bottom-4 w-72 h-auto" : "bottom-4 w-80 sm:w-96 h-[32rem]"
      )}
    >
      <AIAssistantHeader
        isMinimized={isMinimized}
        onMinimizeToggle={e => {
          e.stopPropagation();
          setIsMinimized(!isMinimized);
        }}
        onClose={e => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        onExpand={() => setIsMinimized(false)}
      />
      <AIAssistantMessages
        messages={messages}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
        isMinimized={isMinimized}
      />
      <AIAssistantInput
        value={message}
        onChange={e => setMessage(e.target.value)}
        onSend={handleSendMessage}
        onKeyDown={handleKeyPress}
        disabled={isLoading || !message.trim()}
        isMinimized={isMinimized}
      />
    </div>
  );
};

export default AIAssistant;
