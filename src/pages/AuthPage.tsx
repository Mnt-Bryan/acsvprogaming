
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

type AuthMode = "login" | "signup";

const AuthPage = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("signup");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // Session check/redirect
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/profile");
      }
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate("/profile");
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    if (!email && !phone) {
      setErrorMsg("Please provide either an email or phone number.");
      setLoading(false);
      return;
    }

    let res;
    if (authMode === "signup") {
      if (email) {
        res = await supabase.auth.signUp({ email, password });
      } else {
        res = await supabase.auth.signUp({ phone, password });
      }
    } else {
      if (email) {
        res = await supabase.auth.signInWithPassword({ email, password });
      } else {
        res = await supabase.auth.signInWithPassword({ phone, password });
      }
    }
    if (res.error) {
      setErrorMsg(res.error.message);
      toast.error(res.error.message);
    } else {
      setErrorMsg("");
      toast.success(authMode === "signup" ? "Account created successfully!" : "Login successful!");
      // Redirect happens in onAuthStateChange
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setErrorMsg("");
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({ 
        provider: "google",
        options: {
          redirectTo: window.location.origin + "/auth"
        }
      });
      
      if (error) {
        setErrorMsg(error.message);
        toast.error(error.message);
        console.error("Google sign-in error:", error);
      } else {
        console.log("Google sign-in initiated:", data);
      }
    } catch (err) {
      console.error("Unexpected error during Google sign-in:", err);
      setErrorMsg("An unexpected error occurred. Please try again.");
      toast.error("Failed to connect with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gaming-black">
      <Card className="w-full max-w-md bg-gaming-gray shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-gaming-red">
            {authMode === "signup" ? "Join ACSV" : "Login to your Account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email (optional)"
              value={email}
              autoComplete="username"
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
            <Input
              type="tel"
              placeholder="Phone (optional)"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              disabled={loading}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete={authMode === "signup" ? "new-password" : "current-password"}
              onChange={e => setPassword(e.target.value)}
              disabled={loading}
            />
            <Button type="submit" className="w-full bg-gaming-red hover:bg-red-700" disabled={loading}>
              {authMode === "signup" ? "Sign Up" : "Login"}
            </Button>
          </form>
          <div className="my-4 flex justify-between text-sm">
            <button
              className="underline text-gray-400"
              onClick={() => setAuthMode(authMode === "signup" ? "login" : "signup")}
              disabled={loading}
              type="button"
            >
              {authMode === "signup"
                ? "Already have an account? Login"
                : "Don't have an account? Sign up"}
            </button>
          </div>
          <div className="my-4 flex flex-col items-center gap-2">
            <span className="text-gray-300 text-xs">or</span>
            <Button
              onClick={handleGoogleSignIn}
              className="w-full bg-white text-black hover:bg-gray-200 flex items-center justify-center"
              disabled={loading}
              variant="outline"
              type="button"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
              Continue with Google
            </Button>
          </div>
          {errorMsg && (
            <div className="my-2 text-sm text-red-400 text-center">{errorMsg}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
