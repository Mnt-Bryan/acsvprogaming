
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, X, Send, Minimize, Maximize, ChevronDown, ChevronUp, PanelRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

interface AIAssistantProps {
  initiallyOpen?: boolean;
}

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
      // Simulate AI response for now - in a real implementation, this would call an API
      setTimeout(() => {
        const botResponses = [
          "I can help you find tournaments that match your interests. What games do you play?",
          "The next ACSV FIFA tournament is scheduled for May 15th, 2025 in Yaoundé.",
          "You can register for tournaments through the links provided on each tournament card.",
          "ACSV organizes tournaments for FIFA, Call of Duty, League of Legends, and many other popular games.",
          "Yes, ACSV hosts both online and in-person tournaments across Cameroon.",
          "Our mission is to promote esports and gaming culture in Cameroon and across Africa."
        ];
        
        // For demo purposes, choose a random response
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        
        const assistantMessage: Message = {
          id: Date.now().toString(),
          role: 'assistant',
          content: randomResponse,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error getting AI response:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not get a response. Please try again later."
      });
      setIsLoading(false);
    }
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
      {/* Header */}
      <div 
        className={cn(
          "flex items-center justify-between p-3 bg-gaming-red text-white rounded-t-lg cursor-pointer",
          isMinimized && "rounded-lg"
        )}
        onClick={() => isMinimized && setIsMinimized(false)}
      >
        <div className="flex items-center">
          <Bot className="mr-2" size={20} />
          <h3 className="font-semibold">ACSV Assistant</h3>
        </div>
        <div className="flex space-x-1">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }}
            className="p-1 hover:bg-red-700 rounded"
          >
            {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="p-1 hover:bg-red-700 rounded"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Container */}
          <div className="p-3 h-[calc(32rem-6rem)] overflow-y-auto bg-black/20">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={cn(
                  "mb-3 p-3 rounded-lg max-w-[85%]",
                  msg.role === 'user' 
                    ? "bg-gaming-red/80 ml-auto text-white" 
                    : "bg-gaming-gray/80 border border-gaming-black text-white"
                )}
              >
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1 text-right">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="bg-gaming-gray/80 border border-gaming-black text-white mb-3 p-3 rounded-lg max-w-[85%]">
                <div className="flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-gaming-red rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gaming-red rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
                  <div className="w-2 h-2 bg-gaming-red rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Container */}
          <div className="p-3 border-t border-gaming-black">
            <div className="flex items-end">
              <Textarea
                placeholder="Ask me anything about ACSV..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="resize-none bg-black/30 border-gaming-black text-white min-h-[60px]"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={isLoading || !message.trim()}
                className="ml-2 bg-gaming-red hover:bg-red-700 h-10 w-10 p-0"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIAssistant;
