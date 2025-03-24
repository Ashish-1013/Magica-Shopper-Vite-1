import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins:[react()],
    // server:{
    //     port:3000,   //if we want then use 3000
    //     open: true
    // },
    base: '/Magica-Shopper-Vite-1/',
});