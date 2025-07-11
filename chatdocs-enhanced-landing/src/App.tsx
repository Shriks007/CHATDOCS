import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { 
  ArrowRight, 
  FileText, 
  Search, 
  MessageSquare, 
  Quote,
  Sun,
  Moon,
  Menu,
  X,
  Twitter,
  Github,
  Linkedin,
  Check,
  Upload,
  Zap,
  Shield,
  Globe,
  Clock,
  Users,
  Star
} from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('scroll-animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
      >
        Skip to main content
      </a>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <FileText className="h-8 w-8 text-primary" />
                  <span className="font-bold text-xl text-foreground">ChatDocs</span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 touch-target rounded-md hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Home
                </a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 touch-target rounded-md hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  How it Works
                </a>
                <a href="#features" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 touch-target rounded-md hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Features
                </a>
                <a href="#pricing" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 touch-target rounded-md hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Pricing
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Dark mode toggle */}
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
              
              <Button variant="ghost" size="sm" className="btn-enhanced touch-target" aria-label="Sign in to your account">
                Sign In
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary-hover active:bg-primary-active btn-enhanced touch-target" aria-label="Upload a document to get started">
                <Upload className="mr-2 h-4 w-4" aria-hidden="true" />
                Upload Document
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="btn-enhanced touch-target"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-foreground hover:text-primary py-2 text-base font-medium transition-all duration-300 touch-target rounded-md hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#how-it-works" 
              className="block text-muted-foreground hover:text-primary py-2 text-base font-medium transition-all duration-300 touch-target rounded-md hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#features" 
              className="block text-muted-foreground hover:text-primary py-2 text-base font-medium transition-all duration-300 touch-target rounded-md hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block text-muted-foreground hover:text-primary py-2 text-base font-medium transition-all duration-300 touch-target rounded-md hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            
            {/* Mobile Dark Mode Toggle */}
            <div className="flex items-center justify-between py-2">
              <span className="text-muted-foreground text-base font-medium" id="dark-mode-label">Dark Mode</span>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" aria-hidden="true" />
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={toggleDarkMode}
                  aria-labelledby="dark-mode-label"
                />
                <Moon className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3 touch-safe-spacing">
              <Button variant="ghost" size="sm" className="w-full justify-start btn-enhanced touch-target">
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-primary hover:bg-primary-hover active:bg-primary-active btn-enhanced touch-target">
                <Upload className="mr-2 h-4 w-4" />
                Upload Document
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Advanced Video Background */}
      <main id="main-content">
        <section id="home" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" role="banner" aria-label="Hero section">
        {/* Simple Gradient Background */}
        <div className="video-background-hero"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-5xl mx-auto">
                Chat with any{" "}
                <span className="gradient-text">
                  Document
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Upload your documents and start asking questions instantly. Get summaries, find specific information, and extract insights with AI-powered conversations.
              </p>
            </div>
            
            {/* Upload Area */}
            <div className="max-w-2xl mx-auto mt-8 lg:mt-12">
              <div className="border-2 border-dashed border-primary/30 rounded-2xl p-8 sm:p-10 lg:p-12 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:bg-background/70 group card-enhanced touch-feedback cursor-pointer">
                <div className="text-center space-y-4 lg:space-y-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110 float-gentle">
                    <Upload className="h-8 w-8 lg:h-10 lg:w-10 text-primary icon-grow" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">Drop your document here or click to upload</h3>
                    <p className="text-sm lg:text-base text-muted-foreground">Supports PDF, DOC, DOCX files up to 50MB</p>
                  </div>
                  <Button size="lg" className="bg-primary hover:bg-primary-hover active:bg-primary-active btn-enhanced touch-target" aria-label="Choose a document file to upload">
                    <Upload className="mr-2 h-5 w-5" aria-hidden="true" />
                    Choose Document
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 md:space-x-8 text-sm text-muted-foreground touch-safe-spacing flex-wrap gap-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span>No account required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-muted/20 relative" aria-labelledby="how-it-works-title">
          <div className="video-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 scroll-animate">
              <h2 id="how-it-works-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
                How It Works
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get answers from your documents in three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto stagger-children">
            <div className="text-center space-y-4 scroll-animate fade-in-up group cursor-pointer card-enhanced touch-feedback p-6 rounded-xl" role="region" aria-labelledby="step-1">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Upload className="h-10 w-10 text-primary transition-all duration-300 group-hover:text-primary-hover icon-bounce" aria-hidden="true" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:bg-primary-hover bounce-in" aria-hidden="true">
                  1
                </div>
              </div>
              <h3 id="step-1" className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">Upload Document</h3>
              <p className="text-muted-foreground">
                Simply drag and drop your document or click to upload. We support PDF, DOC, DOCX files up to 50MB.
              </p>
            </div>
            
            <div className="text-center space-y-4 scroll-animate fade-in-up group cursor-pointer card-enhanced touch-feedback p-6 rounded-xl">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <MessageSquare className="h-10 w-10 text-primary transition-all duration-300 group-hover:text-primary-hover icon-bounce" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:bg-primary-hover bounce-in">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">Ask Questions</h3>
              <p className="text-muted-foreground">
                Type your questions in natural language. Ask for summaries, specific details, or explanations.
              </p>
            </div>
            
            <div className="text-center space-y-4 scroll-animate fade-in-up group cursor-pointer card-enhanced touch-feedback p-6 rounded-xl">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Zap className="h-10 w-10 text-primary transition-all duration-300 group-hover:text-primary-hover icon-bounce" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:bg-primary-hover bounce-in">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">Get Instant Answers</h3>
              <p className="text-muted-foreground">
                Receive accurate answers with page references and citations from your document.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              Why Choose ChatDocs?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Powerful AI technology meets intuitive design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto stagger-children">
            <Card className="border-0 shadow-lg scroll-animate fade-in-up card-enhanced touch-feedback cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-primary-hover icon-wiggle" />
                </div>
                <CardTitle className="text-2xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Get instant answers from your documents. Our AI processes files in seconds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg scroll-animate fade-in-up card-enhanced touch-feedback cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Shield className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-primary-hover icon-wiggle" />
                </div>
                <CardTitle className="text-2xl">100% Secure</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Your documents are encrypted and never stored permanently. Complete privacy guaranteed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg scroll-animate fade-in-up card-enhanced touch-feedback cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Globe className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-primary-hover icon-wiggle" />
                </div>
                <CardTitle className="text-2xl">Any Language</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Chat with documents in over 95 languages. Get answers in your preferred language.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 scroll-animate fade-in-up">
            <p className="text-muted-foreground font-medium">Trusted by over 1 million users worldwide</p>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current scale-pulse" style={{animationDelay: `${i * 100}ms`}} />
              ))}
              <span className="ml-2 text-foreground font-semibold shimmer-text">4.8/5 from 50,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              Simple Pricing
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Start free, upgrade when you need more
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border shadow-lg scroll-animate card-enhanced touch-feedback cursor-pointer group">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold transition-colors duration-300 group-hover:text-primary">Free</CardTitle>
                <div className="text-5xl font-bold text-foreground my-6 transition-colors duration-300 group-hover:text-primary">
                  $0
                  <span className="text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-lg">Perfect for trying out ChatDocs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">2 documents per day</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">120 questions per document</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Up to 10MB file size</span>
                  </li>
                </ul>
                <Button className="w-full btn-enhanced touch-target" variant="outline" size="lg" aria-label="Start with free plan">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 border-primary shadow-xl scroll-animate scale-105 card-enhanced touch-feedback cursor-pointer group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 group-hover:bg-primary-hover">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold transition-colors duration-300 group-hover:text-primary">Pro</CardTitle>
                <div className="text-5xl font-bold text-foreground my-6 transition-colors duration-300 group-hover:text-primary">
                  $20
                  <span className="text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-lg">For power users and professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Unlimited documents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Unlimited questions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Up to 50MB file size</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-hover active:bg-primary-active btn-enhanced touch-target" size="lg" aria-label="Upgrade to Pro plan">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto scroll-animate">
            <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border card-enhanced touch-feedback">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors duration-300">
                  Is ChatDocs free to use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes! ChatDocs offers a free plan that allows you to chat with 2 documents per day with up to 120 questions each.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border card-enhanced touch-feedback">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors duration-300">
                  Is my data safe and private?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Absolutely. Your documents are securely processed and automatically deleted after your session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border card-enhanced touch-feedback">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors duration-300">
                  How accurate are the answers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  ChatDocs uses advanced AI to provide highly accurate answers with page references.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
        <div className="video-background-hero opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 lg:space-y-8 max-w-5xl mx-auto scroll-animate">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Ready to chat with your{" "}
              <span className="gradient-text">Documents?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join over 1 million users who are already getting instant answers from their documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover active:bg-primary-active btn-enhanced touch-target text-lg px-8 py-4">
                <Upload className="mr-2 h-5 w-5" />
                Upload Your First Document
              </Button>
              <Button variant="outline" size="lg" className="btn-enhanced touch-target text-lg px-8 py-4">
                Try Demo Document
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">ChatDocs</span>
              </div>
              <p className="text-gray-300 max-w-xs">
                Transform your documents into interactive conversations with AI-powered precision.
              </p>
              <div className="flex space-x-2">
                <div className="p-2 rounded-md hover:bg-white/10 transition-colors touch-target touch-feedback cursor-pointer">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors icon-bounce" />
                </div>
                <div className="p-2 rounded-md hover:bg-white/10 transition-colors touch-target touch-feedback cursor-pointer">
                  <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors icon-bounce" />
                </div>
                <div className="p-2 rounded-md hover:bg-white/10 transition-colors touch-target touch-feedback cursor-pointer">
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors icon-bounce" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors touch-target py-1 block">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ChatDocs. All rights reserved. Made with ❤️ for document lovers.</p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
