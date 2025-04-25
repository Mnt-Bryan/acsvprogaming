
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface CreateThreadDialogProps {
  onThreadCreate: (thread: {
    title: string;
    content: string;
    category: string;
  }) => void;
}

const CreateThreadDialog = ({ onThreadCreate }: CreateThreadDialogProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content || !category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to create a thread.",
        variant: "destructive",
      });
      return;
    }

    onThreadCreate({
      title,
      content,
      category,
    });

    setTitle("");
    setContent("");
    setCategory("");
    setOpen(false);
    
    toast({
      title: "Thread Created",
      description: "Your thread has been successfully created!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gaming-red hover:bg-red-700 text-white">
          New Thread
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gaming-gray text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Thread</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Thread Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-black/30 border-gaming-black text-white"
            />
          </div>
          <div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-black/30 border-gaming-black text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                <SelectItem value="game-discussion">Game Discussion</SelectItem>
                <SelectItem value="hardware-tech">Hardware & Tech</SelectItem>
                <SelectItem value="tournaments">Tournaments</SelectItem>
                <SelectItem value="tips-guides">Tips & Guides</SelectItem>
                <SelectItem value="lfg">LFG</SelectItem>
                <SelectItem value="off-topic">Off-Topic</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Textarea
              placeholder="Thread Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-black/30 border-gaming-black text-white min-h-[200px]"
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-gaming-red hover:bg-red-700">
              Create Thread
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateThreadDialog;
