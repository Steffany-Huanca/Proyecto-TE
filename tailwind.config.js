/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'aura-red': '#E63946',
                'aura-light': '#F1FAEE',
                'aura-lightblue': '#A8DADC',
                'aura-blue': '#457B9D',
                'aura-dark': '#1D3557',
            },
            fontFamily: {
                title: ['Cinzel', 'serif'],
                body: ['Lora', 'serif'],
            }
        },
    },
    plugins: [],
}