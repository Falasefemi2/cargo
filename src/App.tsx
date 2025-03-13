import './App.css'
import FAQSection from './components/faq'
import Features from './components/features'
import FooterSection from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import ValueProposition from './components/valueprop'


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <ValueProposition />
      <FAQSection />
      <FooterSection />
    </main>
  )
}

