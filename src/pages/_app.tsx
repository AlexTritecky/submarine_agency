import Home from '@/app/page'
import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
    const handlePageLoad = () => {
        console.log('Page is fully loaded!');
        // You can perform additional actions here after the page is loaded
      };
    
      // Check if window is defined before attaching the event
      if (typeof window !== 'undefined') {
        window.onload = handlePageLoad;
      }
  return <Home {...pageProps} />
}