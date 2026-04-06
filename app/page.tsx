"use client"

import { Button } from "@/components/ui/button"
import "../styles/image-privacy.css"
import "../styles/header-bg.css"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Mail, MapPin, Calendar, Home, HandHeart, Baby } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Merriweather } from "next/font/google"
import { DesktopNav } from "@/components/desktop-nav"

import Link from "next/link"

const merriweather = Merriweather({ weight: ['400', '700'], subsets: ["latin"] })

export default function HomePage() {
  const [year, setYear] = useState(2025);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-gray-50">
      <DesktopNav />
      {/* Hero Section - with SF Background */}
      <header className="header-bg-sunrise relative">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative">
          <Navigation />
        </div>
        <div className="container px-6 md:px-12 max-w-4xl mx-auto py-12 sm:py-20 md:py-28 text-left rounded-b-3xl flex flex-col items-start">
          <h1 className={`${merriweather.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-white drop-shadow-lg font-bold mt-12`}>
            <span className="block mb-4">Postpartum</span>
            <span className="block mb-4">Doula Support</span>
            <span className="block mb-4">in San Francisco</span>
          </h1>
          <p className="mt-8 text-2xl text-white font-light max-w-2xl leading-relaxed drop-shadow-md text-left"><strong>Support for the early days of parenthood.</strong></p>
          <div className="w-full flex justify-start">
            <Button asChild className="mt-12 bg-teal-800 hover:bg-teal-900 text-white rounded-lg shadow-lg text-xl font-semibold transition-all duration-200 h-14 px-10 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400" size="lg">
              <a href="#contact" className="max-w-xs w-full flex items-center justify-start"><Calendar className="inline-block mr-2 h-6 w-6" /> Book a Free Consultation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* About Me Section - White */}
      <section id="about" className="py-20 bg-white scroll-mt-16">
        <div className="container px-6 md:px-12">
          <h2 className={`mb-8 text-center text-4xl font-bold text-teal-800 tracking-wide ${merriweather.className} font-bold`}>Hi, I'm Chelsea Matthews!</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-8 justify-center">
            <div className="md:w-1/3 flex items-start justify-start">
              <div className="w-full max-w-sm aspect-[3/4] overflow-hidden rounded-xl shadow-lg protect-container">
                <div onContextMenu={e => e.preventDefault()} className="w-full h-full">
                  <Image
                    src="/images/chelsea-headshot.jpg"
                    alt="Chelsea Matthews - Doula"
                    width={375}
                    height={500}
                    className="h-full w-full object-cover object-top protect-image select-none pointer-events-none"
                    priority
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center text-lg leading-relaxed text-gray-700 space-y-6">
              <p className="text-gray-700">
                <br /> Your journey as a new parent deserves to be met with compassion, confidence, and respect. Whether you’re preparing for your first baby or expanding your family, having a <strong>trusted San Francisco doula</strong> that honors your choices can make all the difference.
              </p>
              <p className="text-gray-700">
                At <strong>Early Days Doula</strong>, you’ll find a blend of evidence-based care and warm, nonjudgmental guidance designed to help you feel informed, empowered, and truly supported during this transformative time. Whether it’s navigating newborn care, offering a calm and steady presence, or providing hands-on help, I’m here for you.
              </p>
              <p className="text-gray-700">
                I support all families, and proudly specialize in inclusive, affirming support for <strong>LGBTQ families.</strong> I offer postpartum doula services, as well as lactation education, <strong>tailored to your unique needs.</strong> My doula practice is rooted in community advocacy and a genuine joy in nurturing new families, bringing together empowerment and grounding for your individual path.
              </p>
              <p className="text-gray-700">
                It would be my honor to help make your early days of parenthood feel a little lighter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Card Layout */}
      <section id="services" className="py-20 scroll-mt-16" style={{ backgroundColor: '#B7D9D3' }}>
        <div className="container px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className={`mb-16 text-center text-4xl font-bold text-teal-800 tracking-wide ${merriweather.className} font-bold`}>Services Offered</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-12">
            {/* Service Card 1 */}
            <div className="w-full lg:w-auto flex justify-center">
              <Link href="/services#postpartum-doula" className="block focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-xl w-full max-w-sm">
                <Card className="border-none bg-white h-full shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <CardContent className="p-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-teal-50 mx-auto flex-shrink-0 shadow-md">
                        <Home className="h-8 w-8 text-teal-700" />
                      </div>
                      <h3 className="mb-6 text-2xl font-semibold text-teal-800 text-center">Postpartum Doula</h3>
                      <p className="text-gray-700 text-center text-base leading-relaxed">
                        In-home assistance after birth, including newborn guidance, lactation support, and aid with physical recovery.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-teal-100 text-center">
                      <p className="text-teal-700 font-semibold">Click for details and pricing</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-auto flex justify-center">
              <div className="overflow-hidden rounded-xl w-full max-w-sm h-96 flex items-center justify-center protect-container shadow-lg">
                <div onContextMenu={e => e.preventDefault()} className="w-full h-full">
                  <Image
                    src="/images/doula-with-baby.jpg"
                    alt="Chelsea providing gentle newborn care"
                    width={400}
                    height={384}
                    className="h-full w-full object-cover protect-image select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button asChild className="bg-teal-800 hover:bg-teal-900 text-white rounded-lg shadow-lg text-lg font-semibold transition-all duration-300 h-14 px-8 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:shadow-xl" size="lg">
              <a href="#contact" className="flex items-center justify-center gap-2"><Calendar className="h-5 w-5" /> Book a Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - White modern */}
      <section id="faq" className="bg-white py-20">
        <div className="container px-6 md:px-12">
          <h2 className={`mb-12 text-center text-4xl font-bold text-teal-800 tracking-wide ${merriweather.className} font-bold`}>Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                What exactly does a doula do?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                As your postpartum doula, I provide physical, emotional, and informational support after birth. I don't perform clinical tasks and I am not a medical professional, but I support you in many ways to transition into life with a baby and recover from birth. I am
                professionally trained to help with self-care recovery measures and evidence-based newborn care. Please note that working with a doula is not a substitute for medical care. 
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                When should I hire a doula?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                Many families hire a doula in the second trimester, around 20-24 weeks, but I can be hired at any point
                in your pregnancy (or after birth, if I have availability).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                Are you up-to-date on vaccinations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                Yes, I am fully vaccinated with all recommended vaccines, including COVID-19 (with boosters), Tdap, and influenza. I also have a current negative TB test on file. I take the health and safety of my clients very seriously and I am happy to wear a mask upon request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                Do you take insurance or workplace benefits like Carrot?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                At this moment I don't accept insurance. I am working towards becoming an approved provider for insurance carriers and for benefit programs like Carrot, Maven, and Progyny. In the meantime, I am willing to discuss a rate or payment plan
                that works for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                Do you offer financial assistance or flexible payment options?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                <p>My current rates are discounted while I work towards getting certified. I also reserve a limited number of sliding scale spots for families in need. Please reach out to discuss payment options, payment plans, or a reduced fee.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Education / Training Section - Modern Card Layout */}
      <section id="education" className="py-20 scroll-mt-16" style={{ backgroundColor: '#B7D9D3' }}>
        <div className="container px-6 md:px-12">
          <h2 className={`mb-12 text-center text-4xl font-bold text-teal-800 tracking-wide ${merriweather.className} font-bold`}>Education & Training</h2>
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-10 shadow-lg text-gray-700">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">UCSF Doula Program</span>
                <span className="text-sm sm:text-base">ZSFG Labor & Delivery</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Birth Doula Training</span>
                <span className="text-sm sm:text-base">DONA International</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Birth Doula Training</span>
                <span className="text-sm sm:text-base">Natural Resources</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Postpartum Doula Training</span>
                <span className="text-sm sm:text-base">Natural Resources</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Lactation Education Counselor</span>
                <span className="text-sm sm:text-base">UC San Diego</span>
                </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Racism and Privilege in Birth Work</span>
                <span className="text-sm sm:text-base">Birthing Advocacy Doula Training</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Perinatal Loss: The Invisible Grief </span>
                <span className="text-sm sm:text-base">Heart Bridge Training</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Adult and Pediatric First Aid/CPR/AED</span>
                <span className="text-sm sm:text-base">American Red Cross</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Bloodborne Pathogens</span>
                <span className="text-sm sm:text-base">American Red Cross</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Volunteer and Project Staff Alumni</span>
                <span className="text-sm sm:text-base">Amigos de las Américas</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">BA International Studies</span>
                <span className="text-sm sm:text-base">University of San Francisco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Teal-800 modern */}
      <section id="contact" className="py-20 scroll-mt-16 bg-teal-800">
        <div className="container px-6 md:px-12">
          <h2 className={`mb-12 text-center text-4xl font-bold text-white tracking-wide ${merriweather.className} font-bold`}>Contact Me</h2>
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-10 shadow-lg">
            <p className="mb-8 text-center text-gray-700 text-lg leading-relaxed">
              I'd love to hear from you! Reach out to schedule a free consultation or ask any questions.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 flex-shrink-0 shadow">
                  <Mail className="h-7 w-7 text-teal-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-teal-800 text-lg">Email</h3>
                  <p className="text-gray-700 break-all text-lg leading-relaxed">earlydayswithchelsea@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 flex-shrink-0 shadow">
                  <MapPin className="h-7 w-7 text-teal-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-teal-800 text-lg">Service Area</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">San Francisco</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 flex-shrink-0 shadow">
                  <Calendar className="h-7 w-7 text-teal-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-teal-800 text-lg">Availability</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Currently accepting clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Teal (matching header) modern */}
  <footer className="bg-teal-800 py-10 text-center text-white">
        <div className="container px-6 md:px-12">
          <p>© {year} Early Days Doula, LLC. All rights reserved.</p>
          <p className="mt-3 text-base text-teal-50">Support for the early days of parenthood.</p>
        </div>
      </footer>
    </div>
  )
}
