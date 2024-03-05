import { theme } from 'ant-design-vue'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: theme.defaultConfig.token
    }
  },
  plugins: []
}
