/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF', // Pure White
          secondary: '#F2F2F7', // Soft Grey
        },
        surface: {
          DEFAULT: '#FFFFFF',
          hover: '#F8F8FA', // Very subtle hover state
        },
        primary: {
          DEFAULT: '#1C1C1E', // Deep Charcoal
          muted: '#8E8E93',   // Muted Slate
        },
        accent: {
          DEFAULT: '#007AFF', // Electric Blue
          hover: '#0056b3',   // Darker blue for active states
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.04)', // Very soft Apple-like shadow
        'premium-hover': '0 10px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
