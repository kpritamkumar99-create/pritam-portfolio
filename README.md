# Pritam Kumar | Executive Portfolio

A high-end, solo-brand digital flagship for Pritam Kumar (Founder & CEO of AayuVeda AI & PriMA Tech AI). Built with logic, engineered for impact, and designed with a premium iOS-inspired glassmorphism aesthetic.

## 🚀 Key Features

- **iOS Glassmorphism UI**: A custom-designed interface using Tailwind CSS and Framer Motion, featuring smooth transitions and "spring" micro-animations.
- **PriMA AI Assistant**: A persistent, intelligent executive assistant powered by the Groq Llama 3 model. Supports Hindi, English, and Hinglish.
- **Executive Admin Command Center**: A secure, passkey-protected dashboard for managing projects, leads, chat logs, and digital assets.
- **Immersive Narrative**: Long-form storytelling focusing on the journey from Chhapra to Gurugram.
- **Dynamic Showcase**: A cinematic project gallery and verified credential system.

## 🛠️ Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **AI Engine**: Groq API (Llama 3)
- **Notifications**: CallMeBot (WhatsApp API)

## 📦 Getting Started

1. **Clone & Install**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file with the following keys:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_GROQ_API_KEY=your_groq_api_key
   ```

3. **Development**:
   ```bash
   npm run dev
   ```

4. **Build**:
   ```bash
   npm run build
   ```

## 🔒 Security

The admin panel at `/admin` is protected by a master passkey.
Default Passkey: `Pritam@2026` (Please update in `src/pages/Admin.jsx` before production).

---
© 2026 Pritam Kumar. Engineered with pure logic.
