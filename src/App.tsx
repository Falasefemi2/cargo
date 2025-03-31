import './App.css'
import FAQSection from './components/faq'
import Features from './components/features'
import FooterSection from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import ValueProposition from './components/valueprop'
import { ThemeProvider } from "./components/theme-provider"


export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Header />
        <Hero />
        <Features />
        <ValueProposition />
        <FAQSection />
        <FooterSection />
      </main>
    </ThemeProvider>
  )
}

