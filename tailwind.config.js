/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily: {
        custom: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        nunito: ['Nunito Sans', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        orbitron: ['orbitron', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        logo: '#2B3D42',
        blue: {
          1: '#183E65',
          2: '#17a2b8',
          3: '#1F77B4',
          4: '#13A5DE',
        },
        green: {
          1: '#28A745',
          2: '#99cc33',
          3: '#06D6A0',
          4: '#e5ffde',
        },
        gray: {
          1: '#f6f7f8',
          2: '#4F5155',
        },
        orange: {
          1: '#FF7F0F',
        },
        'custom-blue-1': '#1e538a',
        'custom-blue-2': '#1F5FB4',
        'custom-blue-3': '#1331DE',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        move: {
          '0%': {
            transform: 'translateX(-200px)',
          },
          '100%': {
            transform: 'translateX(200px)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        move: 'move 5s linear infinite',
      },
    },
  },
  plugins: [],
}
