import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  BookOpen,
  MessageSquare,
  Upload,
  Github,
  Mail,
  Heart,
  Zap,
  Shield,
  Users,
  ExternalLink,
  Map,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-smoke-gray/95 border-t border-smoke-light mt-20">
      {/* Bottom Bar */}
      <div className="bg-royal-black border-t border-smoke-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400 text-center sm:text-left">
              <span>© {new Date().getFullYear()} Alienboard</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center">
                <span>Made by</span>

                <a
                  href="https://tarinagarwal.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-alien-green hover:text-alien-green-hover"
                >
                  Tarin Agarwal
                </a>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-alien-green">
                <div className="w-2 h-2 bg-alien-green rounded-full animate-pulse"></div>
                <span className="font-cyber text-xs">SECURE CONNECTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-alien-green rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-32 right-20 w-1 h-1 bg-alien-green rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-16 right-32 w-3 h-3 bg-alien-green rounded-full animate-pulse opacity-20"></div>
    </footer>
  );
};

export default Footer;
