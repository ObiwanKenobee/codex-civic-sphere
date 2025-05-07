
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mr-2"
            >
              <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              <path d="M2 17 12 22l10-5" />
              <path d="M2 12 12 17l10-5" />
            </svg>
            <span className="text-xl font-bold mr-6">Codex</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/laws" className="text-sm font-medium transition-colors hover:text-primary">
              Laws
            </Link>
            <Link to="/vote" className="text-sm font-medium transition-colors hover:text-primary">
              Vote
            </Link>
            <Link to="/learn" className="text-sm font-medium transition-colors hover:text-primary">
              Learn
            </Link>
            <Link to="/ai" className="text-sm font-medium transition-colors hover:text-primary">
              AI
            </Link>
            <Link to="/api-examples" className="text-sm font-medium transition-colors hover:text-primary">
              API Demo
            </Link>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {/* User dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
