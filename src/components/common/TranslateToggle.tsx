
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TranslateToggle = () => {
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const translateContent = async () => {
    setIsTranslating(true);
    try {
      // Select all text content elements
      const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, button');
      
      for (const element of elements) {
        if (element.textContent && element.textContent.trim()) {
          const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              q: element.textContent,
              source: 'en',
              target: 'fr',
              key: 'YOUR_API_KEY' // Note: In a production environment, this should be handled securely
            })
          });

          const data = await response.json();
          if (data.data && data.data.translations && data.data.translations[0]) {
            element.textContent = data.data.translations[0].translatedText;
          }
        }
      }
      
      toast({
        title: "Translation Complete",
        description: "The content has been translated to French",
      });
    } catch (error) {
      console.error('Translation error:', error);
      toast({
        title: "Translation Error",
        description: "Failed to translate the content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={translateContent}
      disabled={isTranslating}
      className="fixed bottom-4 right-4 z-50"
    >
      <Languages className="h-4 w-4" />
    </Button>
  );
};

export default TranslateToggle;
