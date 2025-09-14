"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
        >
            <p className="text-sm text-red-300 mb-4 border-[3px] border-red-600 rounded-full p-2 px-3 w-fit mx-auto">Known Issue: Brave browser does not support the Web Speech API.</p>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 glow-text"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Transform Your Voice into Art
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Experience the Future of AI Drawing with AlienBoard - Convert Speech
            to Flowcharts, Class Diagrams, Sequence Diagrams, ER Diagrams, Gantt
            Charts, Mind Maps, Network Diagrams, System Architecture in
            Real-Time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/draw" className="alien-button text-lg px-8 py-4">
              🎙️ Start Creating
            </Link>
            <a
              href="#demo"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 text-lg"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full animate-bounce opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full"
          style={{ animation: "float 3s ease-in-out infinite" }}
        ></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 glow-text"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the revolutionary capabilities that make AlienBoard the
              ultimate voice-controlled drawing experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="smoke-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <span className="text-2xl">🎙️</span>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Voice Recognition
              </h3>
              <p className="text-muted-foreground">
                Real-time speech-to-text using advanced Web Speech API
                technology for seamless voice input
              </p>
            </div>

            {/* Feature 2 */}
            <div className="smoke-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <span className="text-2xl">🤖</span>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                AI-Powered Generation
              </h3>
              <p className="text-muted-foreground">
                Converts voice commands to stunning Mermaid diagrams using
                Google Gemini AI intelligence
              </p>
            </div>

            {/* Feature 3 */}
            <div className="smoke-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <span className="text-2xl">🎨</span>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Interactive Canvas
              </h3>
              <p className="text-muted-foreground">
                Excalidraw integration provides beautiful, editable diagrams
                with real-time collaboration
              </p>
            </div>

            {/* Feature 4 */}
            <div className="smoke-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <span className="text-2xl">⚡</span>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Real-time Updates
              </h3>
              <p className="text-muted-foreground">
                Live conversion from speech to visual diagrams with instant
                feedback and processing
              </p>
            </div>

            {/* Feature 5 */}
            <div className="smoke-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <span className="text-2xl">🧠</span>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Smart Processing
              </h3>
              <p className="text-muted-foreground">
                Natural language processing with intelligent "let's draw"
                trigger phrase recognition
              </p>
            </div>

            {/* Feature 6 */}
            <div className="smoke-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <span className="text-2xl">📱</span>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Responsive Design
              </h3>
              <p className="text-muted-foreground">
                Works seamlessly on desktop and mobile devices with adaptive
                alien-themed interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 glow-text"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              See How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch AlienBoard transform voice commands into stunning visual
              diagrams in real-time
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden smoke-card p-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <iframe
                width="1521"
                height="629"
                src="https://www.youtube.com/embed/FS8ISArr5FE"
                title="AlienBoard"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Diagrams Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 glow-text"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Diagram Universe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create any type of diagram with just your voice - from simple
              flowcharts to complex system architectures
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Flowcharts", icon: "📊" },
              { name: "Class Diagrams", icon: "🏗️" },
              { name: "Sequence Diagrams", icon: "🔄" },
              { name: "ER Diagrams", icon: "🗃️" },
              { name: "Gantt Charts", icon: "📅" },
              { name: "Mind Maps", icon: "🧠" },
              { name: "Network Diagrams", icon: "🌐" },
              { name: "System Architecture", icon: "🏛️" },
            ].map((diagram, index) => (
              <div
                key={index}
                className="smoke-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl mb-3">{diagram.icon}</div>
                <h3
                  className="font-bold"
                  style={{ fontFamily: "var(--font-fredoka)" }}
                >
                  {diagram.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="download"
        className="py-20 bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 glow-text"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Join the Creative Revolution
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is an open source project. Feel free to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="https://github.com/tarinagarwal/AlienBoard"
              target="_blank"
              className="bg-transparent border-2 border-primary hover:text-secondary-foreground px-8 py-4 rounded-lg transition-all duration-300 text-lg text-primary"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2025 AlienBoard. Made with ❤️ by Tarin. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
