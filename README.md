# 🎤 AlienBoard - Voice-Controlled Drawing Application

A real-time voice-controlled drawing application that converts speech to visual diagrams using AI. Simply speak your ideas and watch them transform into interactive Mermaid diagrams rendered on an Excalidraw canvas.

[![image.png](https://i.postimg.cc/qBPRdfvn/image.png)](https://postimg.cc/K45FnHLv)


## ✨ Features

- **🎙️ Voice Recognition**: Real-time speech-to-text using Web Speech API
- **🤖 AI-Powered Diagram Generation**: Converts voice commands to Mermaid diagrams using Google Gemini AI
- **🎨 Interactive Drawing Canvas**: Excalidraw integration for beautiful, editable diagrams
- **🔄 Real-time Updates**: Live conversion from speech to visual diagrams
- **🎯 Smart Command Processing**: Natural language processing with "let's draw" trigger phrase
- **🧹 Board Management**: Clear board functionality with voice commands
- **📱 Responsive Design**: Works on desktop and mobile devices
- **🎨 Alien Theme**: Futuristic UI with glowing effects and dark theme

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd voiceboard-react
   ```

2. **Install dependencies**

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `server` directory:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=4000
   NODE_ENV=development
   ```

4. **Get a Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env` file

### Running the Application

1. **Start the server** (Terminal 1)

   ```bash
   cd server
   npm run dev
   ```

2. **Start the client** (Terminal 2)

   ```bash
   cd client
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 How to Use

1. **Grant microphone permissions** when prompted
2. **Say "let's draw"** followed by your diagram description
3. **Watch your words transform** into interactive diagrams
4. **Use voice commands** like:
   - "Let's draw a flowchart showing the user registration process"
   - "Let's draw a class diagram for a shopping cart system"
   - "Let's draw a sequence diagram for API authentication"
   - "Clear the board" to start over

## 🛠️ Technology Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Excalidraw** for interactive drawing canvas
- **React Speech Recognition** for voice input
- **tRPC** for type-safe API calls
- **Radix UI** for accessible components

### Backend

- **Node.js** with Express
- **TypeScript** for type safety
- **tRPC** for end-to-end type safety
- **Google Gemini AI** for diagram generation
- **CORS** for cross-origin requests

### AI Integration

- **Google Gemini 2.5 Pro** for natural language to Mermaid conversion
- **Mermaid-to-Excalidraw** for diagram rendering
- **Error handling and retry logic** for robust AI interactions

## 📁 Project Structure

```
voiceboard-react/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/         # Reusable UI components
│   │   │   └── VoiceDraw.tsx # Main voice drawing component
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── trpc/           # tRPC client configuration
│   ├── public/             # Static assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── api/            # tRPC API routes
│   │   │   └── routers/    # API route handlers
│   │   └── server.ts       # Express server setup
│   └── package.json
└── README.md
```

## 🎨 Supported Diagram Types

The application supports various Mermaid diagram types:

- **Flowcharts**: `graph TD`, `graph LR`, `graph TB`, `graph BT`
- **Class Diagrams**: `classDiagram`
- **Sequence Diagrams**: `sequenceDiagram`
- **Entity Relationship Diagrams**: Converted to flowcharts
- **Gantt Charts**: Converted to timeline flowcharts

## 🔧 Development

### Available Scripts

**Client:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Server:**

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### API Endpoints

- `GET /health` - Health check endpoint
- `POST /api/trpc/mermaid.toMer` - Generate Mermaid diagram from text

## 🚨 Troubleshooting

### Common Issues

1. **Microphone not working**

   - Ensure you've granted microphone permissions
   - Check if your browser supports Web Speech API
   - Try refreshing the page
   - Brave Broswer doesnt support Web Speech API

2. **AI not generating diagrams**

   - Verify your Gemini API key is correct
   - Check the server console for error messages
   - Ensure you have sufficient API quota

3. **Diagrams not rendering**
   - Check browser console for parsing errors
   - The app includes automatic retry logic for failed conversions
   - Try rephrasing your voice command

### Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari (limited support)
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Excalidraw](https://excalidraw.com/) for the amazing drawing canvas
- [Mermaid](https://mermaid.js.org/) for diagram syntax
- [Google Gemini AI](https://ai.google.dev/) for natural language processing
- [React Speech Recognition](https://github.com/JamesBrill/react-speech-recognition) for voice input
- [tRPC](https://trpc.io/) for type-safe APIs

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the development team or mail me at tarinagarwal@gmail.com

---

**Made with ❤️ by Tarin** - Transform your ideas into visual reality with the power of voice!
