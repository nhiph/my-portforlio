import Link from "next/link";
import React from "react";
import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Facebook,
  User,
} from "lucide-react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={3} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={3} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={3} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={3} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={3} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={3} />;
    case "facebook":
      return <Facebook className="w-full h-auto" strokeWidth={3} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={3} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{
        transform: `translate(${x}, ${y})`,
      }}
    >
      <Link
        className="text-foreground rounded-full flex items-center justify-center
        custom-bg"
        aria-label={label}
        name={label}
        href={link}
        target={newTab ? "_blank" : "_self"}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
          {getIcon(icon)}
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            {label}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default NavButton;