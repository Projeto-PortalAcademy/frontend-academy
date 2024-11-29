/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Ignora erros de lint no build
    },
    typescript: {
      ignoreBuildErrors: true, // Ignora erros de tipagem no build
    },
  };
  
  export default nextConfig;  