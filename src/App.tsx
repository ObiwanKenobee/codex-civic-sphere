
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Laws from "./pages/Laws";
import Vote from "./pages/Vote";
import Learn from "./pages/Learn";
import AI from "./pages/AI";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ApiExamples from "./pages/api-examples";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/api-examples" element={<ApiExamples />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
