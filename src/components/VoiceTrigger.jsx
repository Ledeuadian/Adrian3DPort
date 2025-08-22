import { useEffect, useRef, useState } from "react";

const iframeStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const VoiceTrigger = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [showIframe2, setShowIframe2] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          const transcript = event.results[i][0].transcript.trim().toLowerCase();
          if (transcript.includes("who do you love")) {
            console.log("Captured transcript:", transcript);
            console.log("Triggering Video");
            setShowIframe(true);
          }
          if (transcript.includes("who is it again")) {
            console.log("Captured transcript:", transcript);
            console.log("Triggering Video");
            setShowIframe2(true);
          }
        }
      }
    };

    recognition.start();
    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <>
      {showIframe && (
        <div style={iframeStyle} onClick={() => setShowIframe(false)}>
            <video
                src="/VideosAI/Who.mp4"
                width="300"
                height="200"
                autoPlay
                onEnded={() => setShowIframe(false)}
                style={{ border: "none", borderRadius: "1rem" }}
                title="AI Video"
            />
          <div style={{
            position: "absolute",
            top: 20,
            right: 40,
            color: "#fff",
            cursor: "pointer",
            fontSize: "2rem",
            fontWeight: "bold"
          }}>
            ✕
          </div>
        </div>
      )}
      {showIframe2 && (
        <div style={iframeStyle} onClick={() => setShowIframe2(false)}>
            <video
                src="/VideosAI/Wala.mp4"
                width="300"
                height="200"
                autoPlay
                onEnded={() => setShowIframe2(false)}
                style={{ border: "none", borderRadius: "1rem" }}
                title="AI Video"
            />
          <div style={{
            position: "absolute",
            top: 20,
            right: 40,
            color: "#fff",
            cursor: "pointer",
            fontSize: "2rem",
            fontWeight: "bold"
          }}>
            ✕
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceTrigger;
