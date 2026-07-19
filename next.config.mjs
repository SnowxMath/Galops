/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Le contenu est bundlé côté client ; on garde une config simple.
  // La couche PWA (service worker + manifest) est gérée à la main dans /public
  // et enregistrée par le composant ServiceWorkerRegister.
};

export default nextConfig;
