  import { useEffect, useRef, useState } from "react";
  import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";
  import { api } from "../trpc/react";

  import { convertToExcalidrawElements } from "@excalidraw/excalidraw";
  import { type ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
  import { parseMermaidToExcalidraw } from "@excalidraw/mermaid-to-excalidraw";
  import { Eraser, Loader2Icon, Mic, MicOff, Pencil } from "lucide-react";
  import { Excalidraw } from "@excalidraw/excalidraw";
  import { toast } from "../hooks/use-toast";

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "../components/ui/dialog";

  const VoiceDraw = () => {
    const [filteredTranscript, setFilteredTranscript] = useState("");
    const [mermaid, setMermaid] = useState("");
    const [exAPI, setExAPI] = useState<ExcalidrawImperativeAPI | null>(null);
    const [dialogOpen, setDialogOpen] = useState<boolean>(true);
    const [retryCount, setRetryCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
      undefined
    );
    const [shouldRetry, setShouldRetry] = useState(false);

    const [gemInput, setGemInput] = useState<string>(
      "Please generate a rectangle with text that says Made By Tarin"
    );
    const {
      refetch: getMermaid,
      data,
      isLoading,
    } = api.mermaid.toMer.useQuery(
      { str: gemInput, current: mermaid, error: errorMessage },
      { enabled: false }
    );

    const regen = (in2: string, errorMsg?: string) => {
      setGemInput(in2);
      if (errorMsg) {
        setErrorMessage(errorMsg);
        setShouldRetry(true);
      } else {
        setErrorMessage(undefined);
        setShouldRetry(false);
      }
    };

    useEffect(() => {
      void getMermaid().then((res) => {
        if (!res.data) {
          return;
        }
        let sp = res.data.split("\n");
        sp.splice(0, 1);
        sp.splice(sp.length - 1, sp.length);
        sp = [sp.join("\n")];
        console.log(sp);
        setMermaid(sp.join("\n"));
        setRetryCount(0);
        setErrorMessage(undefined);
        setShouldRetry(false);
      });
    }, [gemInput]);

    useEffect(() => {
      if (shouldRetry && errorMessage) {
        void getMermaid().then((res) => {
          if (!res.data) {
            return;
          }
          let sp = res.data.split("\n");
          sp.splice(0, 1);
          sp.splice(sp.length - 1, sp.length);
          sp = [sp.join("\n")];
          console.log("Retry result:", sp);
          setMermaid(sp.join("\n"));
          setShouldRetry(false);
        });
      }
    }, [shouldRetry, errorMessage]);

    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    const lastTranscriptLength = useRef(transcript.length);

    useEffect(() => {
      void SpeechRecognition.startListening({ continuous: true });
    }, []);

    useEffect(() => {
      if (!listening) return;

      if (isLoading) return;

      if (transcript) {
        if (transcript.includes("clear the board")) {
          setMermaid("graph TD");
        }

        const words = transcript
          .split(" ")
          .map((word) => word.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ""));
        console.log(words);

        for (let i = 0; i < words.length - 1; i++) {
          if (words[i] === "lets" && words[i + 1] === "draw") {
            setDialogOpen(false);
            const filteredTranscript = words.slice(i).join(" ");
            setFilteredTranscript(filteredTranscript);
            break;
          }
        }
      }

      const timeoutId = setTimeout(() => {
        if (transcript.length === lastTranscriptLength.current) {
          console.log("FILTERED: ", filteredTranscript);
          if (filteredTranscript !== "") {
            regen(filteredTranscript);
            setFilteredTranscript("");
            resetTranscript();
          }
        }
      }, 2000);

      lastTranscriptLength.current = transcript.length;

      return () => clearTimeout(timeoutId);
    }, [transcript, listening, resetTranscript, filteredTranscript]);

    useEffect(() => {
      void convert(mermaid);
    }, [mermaid]);

    async function convert(mermaid: string) {
      if (exAPI) {
        try {
          const { elements } = await parseMermaidToExcalidraw(mermaid);

          if (!elements) {
            return;
          }

          const excalidrawElements = convertToExcalidrawElements(elements);
          exAPI.updateScene({ elements: excalidrawElements });
          exAPI.scrollToContent(excalidrawElements, { fitToViewport: true });

          setRetryCount(0);
          setErrorMessage(undefined);
          setShouldRetry(false);
        } catch (err) {
          console.error("Error converting Mermaid to Excalidraw:", err);

          if (retryCount < 5) {
            const errorMessage =
              err instanceof Error ? err.message : "Unknown parsing error";
            setRetryCount((prev) => prev + 1);

            toast({
              title: "Error",
              description: `Retrying to convert Mermaid to Excalidraw... (Attempt ${
                retryCount + 1
              }/5)`,
            });

            console.error(
              `Retrying with error aware Mermaid graph generation... (Attempt ${
                retryCount + 1
              }/5)`
            );

            regen(gemInput, errorMessage);
          } else {
            toast({
              title: "Error",
              description: "Maximum retry attempts reached. Clearing the board.",
            });
            console.error(
              "Maximum retry attempts reached. Resetting to empty graph."
            );
            setMermaid("graph TD");
            setRetryCount(0);
            setErrorMessage(undefined);
            setShouldRetry(false);
          }
        }
      }
    }

    if (!browserSupportsSpeechRecognition) {
      return (
        <span className="text-alien-green">
          Browser doesn&apos;t support speech recognition.
        </span>
      );
    }

    async function reset() {
      await SpeechRecognition.stopListening();
      setFilteredTranscript("");
      resetTranscript();
    }

    return (
      <div className="items between h-full w-full flex-col items-center">
        <div className="mr-4 mt-2 w-full flex-row justify-end py-2 text-center font-bold text-alien-green lg:hidden glow-text">
          AlienBoard
        </div>
        <div className="grid justify-center text-white lg:grid-cols-2">
          <div className="flex w-full flex-row px-4 py-2 text-center md:px-12 md:py-4">
            <div
              className="cursor-pointer text-3xl font-bold md:px-2"
              onClick={() =>
                listening
                  ? reset()
                  : SpeechRecognition.startListening({ continuous: true })
              }
            >
              <div
                className={`relative mr-2 p-2 transition duration-200 ease-in-out ${
                  listening
                    ? "rounded-full bg-alien-green text-royal-black shadow-alien-glow"
                    : "rounded bg-smoke-gray border border-smoke-light"
                }`}
              >
                {listening ? (
                  <div>
                    <Mic />
                    <span className="absolute left-0 top-0 inline-flex h-full w-full animate-ping rounded-full bg-alien-green opacity-75"></span>
                  </div>
                ) : (
                  <MicOff />
                )}
              </div>
            </div>
            <div className="flex cursor-pointer flex-row px-1 italic md:px-2">
              <div
                className="rounded bg-smoke-gray border border-smoke-light p-2 hover:bg-smoke-light transition-colors"
                onClick={() => setMermaid("graph TD")}
              >
                <Eraser className="text-alien-green" />
              </div>
            </div>
            <div className="flex flex-row px-1 italic md:px-2">
              <div className="p-2">
                <Pencil className="text-alien-green" />
              </div>
              <div className="ml-4 mt-2 text-sm md:text-base text-gray-300">
                "Say 'let&apos;s draw' to start"
              </div>
            </div>
          </div>
          <div className="mr-4 mt-2 hidden w-full flex-row justify-end px-12 py-4 text-center font-bold lg:flex glow-text">
            <p className="text-alien-green text-xl">AlienBoard</p>
          </div>
        </div>
        <div className="px-4 md:px-12">
          <div className="relative h-[88vh] w-full border rounded-xl bg-smoke-gray shadow-alien-glow">
            <Excalidraw excalidrawAPI={(api) => setExAPI(api)} />
            <div className="flex flex-grow items-center justify-center px-12 pt-8 text-white">
              {filteredTranscript || !listening ? (
                <p className="animate-grow absolute bottom-20 z-20 rounded-xl bg-royal-black border border-alien-green p-4 text-center text-xl text-alien-green opacity-90 md:bottom-4 shadow-alien-glow">
                  <div className="opacity-100">
                    {filteredTranscript ? (
                      filteredTranscript
                    ) : !listening ? (
                      <MicOff />
                    ) : (
                      ""
                    )}
                  </div>
                </p>
              ) : (
                <div />
              )}
              {isLoading && (
                <div className="absolute bottom-1/2 z-20 flex flex-row rounded-xl bg-royal-black border border-alien-green px-2 italic opacity-90">
                  <div className="p-2">
                    <Loader2Icon className="animate-spin stroke-alien-green opacity-100" />
                  </div>
                  <div className="ml-2 mt-2 text-alien-green opacity-100">
                    loading...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default VoiceDraw;
