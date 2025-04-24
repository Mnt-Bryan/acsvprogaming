
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

type Profile = {
  id: string;
  username: string | null;
  email: string | null;
  phone: string | null;
  avatar_url: string | null;
};

const ProfilePage = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check & require auth
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        fetchProfile(session.user.id);
      }
    });
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();
    if (error) {
      setError(error.message);
      setProfile(null);
      toast.error("Failed to load profile");
    } else {
      setProfile(data);
      setUsername(data?.username || "");
      
      // Generate avatar if none exists
      if (!data?.avatar_url) {
        const generatedAvatar = generateAvatar(userId);
        setAvatar(generatedAvatar);
        // Save the generated avatar
        updateAvatarInDatabase(userId, generatedAvatar);
      } else {
        setAvatar(data.avatar_url);
      }
    }
    setLoading(false);
  };

  const generateAvatar = (userId: string) => {
    // Create a deterministic avatar URL based on user ID
    // Using DiceBear API for simple, consistent avatar generation
    const style = ["adventurer", "avataaars", "bottts", "identicon", "initials"][
      Math.abs(userId.charCodeAt(0) % 5)
    ];
    return `https://api.dicebear.com/7.x/${style}/svg?seed=${userId}`;
  };

  const updateAvatarInDatabase = async (userId: string, avatarUrl: string) => {
    const { error } = await supabase
      .from("profiles")
      .update({ avatar_url: avatarUrl })
      .eq("id", userId);
    
    if (error) {
      console.error("Failed to save avatar:", error);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { data, error: updateError } = await supabase
      .from("profiles")
      .update({ username, avatar_url: avatar })
      .eq("id", profile?.id)
      .select()
      .maybeSingle();
    if (updateError) {
      setError(updateError.message);
      toast.error("Failed to update profile");
    } else if (data) {
      setProfile(data);
      setEditing(false);
      toast.success("Profile updated successfully");
    }
    setLoading(false);
  };

  // Logout handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] text-white">
        Loading...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] text-white">
        <div>{error ? error : "Profile not found."}</div>
        <Button onClick={handleLogout} className="mt-4 bg-gaming-red text-white">Logout</Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gaming-black">
      <Card className="w-full max-w-md bg-gaming-gray">
        <CardHeader>
          <CardTitle className="text-gaming-red text-center">Profile</CardTitle>
        </CardHeader>
        <CardContent>
          {editing ? (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={avatar} alt="Avatar" className="object-cover" />
                  <AvatarFallback className="bg-gaming-red text-white text-lg">
                    {username?.charAt(0) || profile.email?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avatar">Avatar URL</Label>
                <Input
                  id="avatar"
                  placeholder="Enter avatar image URL"
                  value={avatar}
                  onChange={e => setAvatar(e.target.value)}
                  disabled={loading}
                />
              </div>
              <Button type="submit" className="w-full bg-gaming-red text-white" disabled={loading}>
                Save
              </Button>
              <Button type="button" variant="outline" className="w-full" onClick={() => setEditing(false)}>
                Cancel
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={avatar} alt="Avatar" className="object-cover" />
                  <AvatarFallback className="bg-gaming-red text-white text-lg">
                    {username?.charAt(0) || profile.email?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center text-lg font-semibold">{profile.username || "No username set"}</div>
              <div className="text-center text-sm text-gray-400">{profile.email || profile.phone}</div>
              <Button className="w-full" onClick={() => setEditing(true)}>
                Edit Profile
              </Button>
              <Button className="w-full bg-gaming-red text-white" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
