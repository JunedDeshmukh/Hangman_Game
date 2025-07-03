# 🎮 Hangman Game — Single & Local Multiplayer

A Hangman game built with **React**, using **Zustand** for state management and structured with the **Presenter-Container pattern**. It supports both **Single Player** and **Local Multiplayer** modes — all running completely on the frontend .

---

## 🚀 Live Demo

👉 [Play Now](hangman-game-three-sable.vercel.app
)

---

## 🛠 Tech Stack

- **React.js** — UI library
- **Zustand** — Lightweight global state management
- **Tailwind CSS** — Styling 
- **Vite** — Fast development bundler
- **Presenter-Container Pattern** — Clean architecture

---

## 🧠 Architecture Overview



## 🎯 Features

### ✅ Game Modes

- **Single Player**: Random word generator
- **Local Multiplayer**: 
  - One player sets a custom word.
  - The second player tries to guess it.
  - All handled within the same device/session.

### ✨ Gameplay

- QWERTY-style virtual keyboard
- Hangman figure reveals with wrong guesses
- Game reset / replay option

---

## 🧩 How to Play

### Single Player
- Click "Single Player" to start.
- The app randomly selects a word.
- Guess one letter at a time before the full hangman appears.

### Local Multiplayer
- Click "Multiplayer".
- Player 1 inputs a secret word.
- Player 2 then guesses using the virtual keyboard.
- All logic is handled on the frontend with local state.


