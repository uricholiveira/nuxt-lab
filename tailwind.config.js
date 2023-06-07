/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite.{js,ts}"
    ],
    // enable dark mode via class strategy
    darkMode: 'class',
    theme: {
        extend: {
            // extend base Tailwind CSS utility classes
        }
    },
    plugins: [
        // include Flowbite as a plugin in your Tailwind CSS project
        require('flowbite/plugin')
    ]
}
