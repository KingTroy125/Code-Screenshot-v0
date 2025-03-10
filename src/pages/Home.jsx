import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowRightIcon, CodeIcon, ImageIcon, MixIcon, GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Preview from '../components/Preview';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <CodeIcon className="w-8 h-8 text-blue-400" />,
      title: "Beautiful Code Screenshots",
      description: "Transform your code into stunning, shareable images with customizable themes and styles."
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-purple-400" />,
      title: "Multiple Export Options",
      description: "Export your screenshots in PNG or SVG format, or copy directly to your clipboard."
    },
    {
      icon: <MixIcon className="w-8 h-8 text-pink-400" />,
      title: "Customizable Themes",
      description: "Choose from a variety of themes and customize padding, font size, and background to match your style."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-neutral-900/50 backdrop-blur-lg border-b border-neutral-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Code<span className="text-blue-500">Shot</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/editor">
                <Button variant="outline" className="bg-white/5">
                  Open Editor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">
          Transform Your Code Into Art
        </h1>
        <div className="max-w-3xl mx-auto">
          <Preview />
        </div>
      </div>
    </div>
  );
} 