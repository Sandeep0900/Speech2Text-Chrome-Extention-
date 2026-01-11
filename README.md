# 🎤 VoiceType-Anywhere

VoiceType-Anywhere is a Chrome extension that enables **voice typing on any website** using a clean, on-demand floating microphone button.  
The mic UI appears **only when the user clicks the extension icon**, ensuring a smooth and distraction-free browsing experience.

---

## 🚀 Features

- 🎙️ Voice typing on **any input field**
- 🧩 Works across all websites (ChatGPT, Gmail, WhatsApp Web, Google Docs, etc.)
- 🎯 Types exactly **where the cursor is placed**
- 🖱️ Floating mic button appears **only when enabled**
- 🔒 No data storage, no server, fully client-side
- ⚡ Lightweight and fast
- 🧠 Uses Chrome’s built-in **Web Speech API**

---

## 🏗️ How It Works

1. User clicks the **Chrome extension icon**
2. A floating 🎤 button appears on the webpage
3. User clicks the 🎤 button
4. Chrome asks for **microphone permission**
5. Spoken words are converted to text
6. Text is inserted at the active cursor position

---

## 📂 Project Structure

VoiceType-Anywhere/
├── manifest.json # Chrome extension configuration
├── background.js # Handles extension icon click
├── content.js # Injects mic UI and handles speech-to-text
├── README.md # Project documentation
└── icons/ # Extension icons (optional)


---

## 🧪 Supported Input Types

- `<input>`
- `<textarea>`
- `contenteditable` elements  
  (Google Docs, rich text editors, etc.)

---

## 🛠️ Technologies Used

- JavaScript (ES6+)
- Chrome Extensions API (Manifest V3)
- Web Speech API (`webkitSpeechRecognition`)
- DOM Manipulation

---

## 🔐 Privacy & Security

- 🎧 Microphone is accessed **only after user interaction**
- 🔒 No audio or text is stored
- 🌐 No external servers or APIs
- 📵 Mic stops immediately when disabled

---

## 📥 Installation (Local Setup)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/VoiceType-Anywhere.git

   ```
2. Open Chrome and go to:
    ```bash
   chrome://extensions

   ```
3. Enable Developer Mode
4. Click Load unpacked
5. Select the project folder

## Usage Guide

1. Open any website
2. Click inside a text field
3. Click the VoiceType-Anywhere extension icon
4. 🎤 Floating mic button appears
5. Click 🎤 and start speaking
6. Click 🎤 again to stop
7. Click extension icon again to hide the mic

## Limitations

1. Works only in Chrome / Chromium-based browsers
2. Requires internet connection for speech recognition
3. Language support depends on browser settings