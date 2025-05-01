import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowRightIcon, CodeIcon, ImageIcon, MixIcon, GitHubLogoIcon, TwitterLogoIcon, PlayIcon, ChevronRightIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Preview from '../components/Preview';
import HeroVideoDialogDemo from '../components/HeroVideoDialogDemo';
import RetroGrid from '../components/ui/Grid';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { title: "Features", path: "/features" },
    { title: "Editor", path: "/editor" },
    { title: "Customers", path: "/customers" },
    { title: "Pricing", path: "/pricing" },
  ];
  
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setMobileMenuOpen(false);
    };
    
    return () => {
      document.onclick = null;
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <Link to="/">
        <div className="text-xl font-bold">
          Code<span className="text-purple-400">Shot</span>
        </div>
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-white hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

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

  const tools = [
    {
      icon: <CodeIcon className="w-6 h-6" />,
      title: "Code Editor",
      description: "Write or paste your code with syntax highlighting for multiple programming languages.",
      action: "Launch",
      path: "/editor"
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Theme Gallery",
      description: "Browse through our collection of beautiful themes for your code screenshots.",
      action: "Launch",
      path: "/editor"
    },
    {
      icon: <MixIcon className="w-6 h-6" />,
      title: "Export Options",
      description: "Save as SVG/PNG, copy to clipboard or generate shareable links for your code.",
      action: "Launch",
      path: "/editor"
    },
    {
      icon: <GitHubLogoIcon className="w-6 h-6" />,
      title: "GitHub Integration",
      description: "Easily import code snippets from your GitHub repositories.",
      action: "Launch",
      path: "/editor"
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
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-900 via-purple-950/20 to-blue-950/20 text-white relative">
      <div className="absolute top-0 z-[0] h-full w-full bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <RetroGrid />
      
      {/* Navbar */}
      <header className="relative z-50">
        <div className="flex items-center justify-between py-5 px-4 md:hidden">
          <Link to="/" className="text-xl font-bold">
            Code<span className="text-purple-400">Shot</span>
          </Link>
          <div>
            <button
              className="menu-btn text-white hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="fixed inset-0 z-50 bg-neutral-900/95 backdrop-blur-lg md:hidden">
            <div className="flex items-center justify-between py-5 px-4">
              <Link to="/" className="text-xl font-bold">
                Code<span className="text-purple-400">Shot</span>
              </Link>
              <button
                className="menu-btn text-white hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            
            <div className="px-4 py-8">
              <ul className="flex flex-col space-y-6 items-center justify-center">
                {navigation.map((item, idx) => (
                  <li key={idx} className="text-white/80 hover:text-white w-full text-center">
                    <Link 
                      to={item.path} 
                      className="block text-lg font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-x-1 py-3 px-6 font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              
              <div className="mt-12 px-4">
                <div className="p-5 bg-neutral-800/50 rounded-lg text-center">
                  <h3 className="text-xl font-medium text-white mb-2">Create gorgeous code visuals</h3>
                  <p className="text-sm text-gray-300 mb-4">Build, customize, and share beautiful screenshots in seconds</p>
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center py-3 px-6 bg-purple-600 text-white rounded-full font-medium w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}
        
        {/* Desktop Navigation */}
        <div className="hidden md:block sticky top-0 w-full bg-transparent backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold z-10">
              Code<span className="text-purple-400">Shot</span>
            </Link>
            
            <div className="bg-neutral-900/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/5">
              <div className="flex items-center gap-8">
                {navigation.map((item, idx) => (
                  <Link 
                    key={idx}
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <span className="hidden md:inline-block relative overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950/80 text-xs font-medium text-white backdrop-blur-md px-1">
                <Link
                  to="/login"
                  className="inline-flex items-center rounded-full py-1.5 px-4 text-sm"
                >
                  Sign in <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section - Adjusted for Mobile */}
      <section className="relative max-w-full mx-auto z-10 pt-10 pb-28 md:py-28">
        <div className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-[2px] border-white/5 rounded-3xl w-fit md:block hidden">
              Code Screenshot Generator
              <ChevronRightIcon className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <h2 className="text-3xl md:text-4xl tracking-tighter font-geist bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent mx-auto md:text-6xl">
              Create gorgeous code<br className="md:hidden" /> visuals with<br className="hidden md:block" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-200">
                the best screenshot tool.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-300">
              Build, customize, and share beautiful screenshots of your code with elegant themes,
              multiple font styles, and extensive customization options for your projects.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium text-gray-50 backdrop-blur-3xl">
                  <Link
                    to="/login"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
                  >
                    Get Started
                  </Link>
                </div>
              </span>
            </div>
          </div>
          <div className="mt-32 mx-auto max-w-4xl">
            <HeroVideoDialogDemo />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-200">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="bg-neutral-900/30 backdrop-blur p-6 rounded-lg border border-white/5 hover:border-purple-500/50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <div className="p-3 bg-gradient-to-tr from-zinc-300/5 via-purple-400/10 to-transparent rounded-lg inline-block mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{tool.title}</h3>
                  <p className="text-gray-400">{tool.description}</p>
                </div>
                <Link to={tool.path} className="flex items-center text-purple-300 hover:text-purple-200 text-sm">
                  {tool.action} <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="bg-neutral-900/30 backdrop-blur p-10 rounded-lg border border-white/5 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-200">
            Ready to create beautiful code screenshots?
          </h2>
          <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium text-gray-50 backdrop-blur-3xl">
              <Link
                to="/login"
                className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
              >
                Start Using CodeShot Now
              </Link>
            </div>
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">© 2024 CodeShot. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="https://github.com/KingTroy125/Code-Screenshot-v0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterLogoIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 