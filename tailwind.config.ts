import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'cyber-dark': '#0f0f0f',
				'cyber-aqua': '#00fff7',
				'neon-pink': '#ff4ecd',
				'soft-gray': '#c0c0c0',
			},
			fontFamily: {
				'sora': ['Sora', 'sans-serif'],
				'space': ['Space Grotesk', 'sans-serif'],
				'orbitron': ['Orbitron', 'monospace'],
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(135deg, #00fff7, #ff4ecd)',
				'cyber-gradient-dark': 'linear-gradient(135deg, rgba(0,255,247,0.1), rgba(255,78,205,0.1))',
			},
			animation: {
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 15s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-slow': 'bounce 3s infinite',
				'fade-in': 'fadeIn 0.5s ease-in',
				'slide-up': 'slideUp 0.6s ease-out',
				'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
			},
			keyframes: {
				glow: {
					'0%': { boxShadow: '0 0 5px #00fff7, 0 0 10px #00fff7, 0 0 15px #00fff7' },
					'100%': { boxShadow: '0 0 10px #00fff7, 0 0 20px #00fff7, 0 0 30px #00fff7' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' },
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				cyberPulse: {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0,255,247,0.5), inset 0 0 5px rgba(0,255,247,0.2)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(0,255,247,0.8), inset 0 0 10px rgba(0,255,247,0.4)' 
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
