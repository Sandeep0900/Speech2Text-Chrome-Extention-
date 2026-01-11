let recognition;
let listening = false;
let lastFocused = null;
let micBtn = null;
let micVisible = false;

/* Track cursor position */
document.addEventListener("focusin", () => {
  const el = document.activeElement;
  if (
    el &&
    (el.tagName === "INPUT" ||
     el.tagName === "TEXTAREA" ||
     el.isContentEditable)
  ) {
    lastFocused = el;
  }
});

/* Listen for extension icon click */
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "toggle-mic-ui") {
    toggleMicButton();
  }
});

/* Create / Remove mic button */
function toggleMicButton() {
  if (micVisible) {
    removeMicButton();
  } else {
    createMicButton();
  }
  micVisible = !micVisible;
}

/* Create floating mic */
function createMicButton() {
  if (micBtn) return;

  micBtn = document.createElement("button");
  micBtn.innerText = "🎤";

  Object.assign(micBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "999999",
    padding: "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    background: "#4CAF50",
    color: "#fff"
  });

  micBtn.onclick = () => {
    if (!listening) {
      startVoice();
      micBtn.style.background = "#f44336";
    } else {
      stopVoice();
      micBtn.style.background = "#4CAF50";
    }
  };

  document.body.appendChild(micBtn);
}

/* Remove mic */
function removeMicButton() {
  if (micBtn) {
    stopVoice();
    micBtn.remove();
    micBtn = null;
  }
}

/* Start voice typing */
function startVoice() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Speech Recognition not supported");
    return;
  }

  recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const text = event.results[event.results.length - 1][0].transcript;
    if (lastFocused) {
      insertText(lastFocused, text + " ");
    }
  };

  recognition.start();
  listening = true;
}

/* Stop voice typing */
function stopVoice() {
  if (recognition) recognition.stop();
  listening = false;
}

/* Insert text at cursor */
function insertText(el, text) {
  el.focus();

  if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? el.value.length;

    el.value =
      el.value.slice(0, start) +
      text +
      el.value.slice(end);

    el.selectionStart = el.selectionEnd = start + text.length;
  } else if (el.isContentEditable) {
    document.execCommand("insertText", false, text);
  }
}
