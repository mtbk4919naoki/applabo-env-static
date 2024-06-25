import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import viteImagemin from "vite-plugin-imagemin"
import resizeWebp from './plugins/vite-plugin-resize-webp'

export default {
    plugins: [
      vituum(),
      twig(),
      tailwindcss(),
      resizeWebp(),
      viteImagemin(),
    ]
}