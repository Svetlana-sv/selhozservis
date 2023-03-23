import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        // target: 'http://localhost:{PORT}',
        changeOrigin: true,
        secure: false,
        headers: {
          Connection: 'keep-alive',
          // Тестовый токен (полный доступ ко всем функциям)
          Authorization: 'Bearer 966f62047366c43c73834904a77cfd615c87030a2ffd0949fe566875800e27b2617cd1ecd1396197222114d866353e8602b6ad2a7c80ec05bc3b14f27a8fd14266103f4ac08e1295c12520dcfcb49c4c439254c1a9e65f1315ea0493299a122b3f82fa818e453d3c9587c778b77e999f63ebeb54980c88f1ce850efe28499771'
        },
      },
    }
  }
})