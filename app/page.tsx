"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Mail, MapPin, Calendar, Home, HandHeart, Baby } from "lucide-react"
import { HoldingHandsIcon } from "@/components/ui/holding-hands-icon"
import Image from "next/image"
import React, { useEffect, useState } from "react"

import { Yeseva_One } from "next/font/google"

const yeseva = Yeseva_One({  weight: '400', subsets: ["latin"] })

export default function HomePage() {
  const [year, setYear] = useState(2025);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Hero Section - Teal */}
      <header className="header-bg-sunrise bg-teal-50 py-24 text-left shadow-lg rounded-b-3xl">
        <div className="container px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className={`${yeseva.className} text-5xl font-bold tracking-tight text-teal-800 sm:text-6xl md:text-7xl text-left drop-shadow-md`}>Early Days with Chelsea</h1>
          <p className="mt-6 text-2xl text-teal-700 text-left font-light max-w-2xl">Compassionate doula support for birth and postpartum.</p>
          <Button asChild className="mt-10 bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-700 hover:to-teal-500 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold transition-all duration-200" size="lg">
            <a href="#contact">Book a Free Consultation</a>
          </Button>
        </div>
      </header>

      {/* About Me Section - White */}
      <section id="about" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className={`mb-6 text-center text-3xl font-bold text-teal-800 ${yeseva.className}`}>About Me</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-4 justify-center">
            <div className="md:w-1/3 flex items-start justify-start">
              <div className="w-full max-w-sm aspect-[3/4] overflow-hidden rounded-lg protect-container">
                <Image
                  src="/images/chelsea-headshot.jpg"
                  alt="Chelsea Matthews - Doula"
                  width={375}
                  height={500}
                  className="h-full w-full object-cover object-top protect-image"
                  priority
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <p className="mb-4 text-gray-700">
                <b>Hello, I'm Chelsea Matthews!</b> (she/her) I'm a birth and postpartum doula supporting individuals and families in the San Francisco Bay Area. I believe everyone deserves to feel empowered throughout their birth journey. My approach combines evidence-based expertise with compassionate, non-judgmental care to help
                you feel informed and truly supported during this transformative time.
              </p>
              <p className="mb-4 text-gray-700">
                My path to doula work began after 12+ years as a climate justice advocate, campaigning for systemic
                change on a global scale. Over time, I found myself wanting to do work that is hands-on and directly connected to my local community. Supporting family and friends with their newborns brought joy and clarity: I wanted to
                be of service to new families. My background in advocacy helps me show up calm and with purpose. At its core, my work past and present is rooted in justice, healing, and holding
                space with compassion.
              </p>
              <p className="mb-4 text-gray-700">
                I serve all birthing people and specialize in supporting LGBTQ families. I'm here to help you navigate
                decisions with confidence, hold space for your feelings, and offer physical and emotional support.
                Whether you need a hand, a voice of reassurance, or someone to walk alongside you, I'm
                here. <b>I would be honored to help make your early days of parenthood feel a little lighter.</b>
              </p>
              <p className="mb-4 text-gray-700">
                I am based in San Francisco where I live with my partner and two cuddly cats. In my free time you can find me playing congas in a community Cuban ensemble, dancing salsa with friends, or watching Valkyries games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Light Teal */}
      <section id="services" className="py-16" style={{ backgroundColor: '#B7D9D3' }}>
        <div className="container px-4 md:px-6">
          <h2 className={`mb-12 text-center text-3xl font-bold text-teal-800 ${yeseva.className}`}>Services Offered</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Service Card 1 */}
            <Card className="border-teal-200 bg-white min-h-[340px] w-full max-w-xs mx-auto flex-1 shadow-md">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mx-auto flex-shrink-0">
                  <Baby className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-teal-800 text-center">Birth Doula</h3>
                <p className="text-gray-700 text-center flex-grow">
                  Support from pregnancy through birth, including personalized prenatal visits, practice with comfort techniques, 24/7 on-call availability after 37 weeks, and continuous labor support.
                  <br /> <br /> $1,500
                </p>
              </CardContent>
            </Card>
            {/* Service Card 2 */}
            <Card className="border-teal-200 bg-white min-h-[340px] w-full max-w-xs mx-auto flex-1 shadow-md">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mx-auto flex-shrink-0">
                  <Home className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-teal-800 text-center">Postpartum Doula</h3>
                <p className="text-gray-700 text-center flex-grow break-normal hyphens-none" style={{ wordBreak: 'normal', hyphens: 'none' }}>
                  In-home assistance after birth, including newborn guidance, breastfeeding / chestfeeding instruction, aid with physical recovery, light household help, and emotional support.
                  <br /> <br />
                  Starting at $1000
                  <br />
                  $40/hr (25 hour minimum)
                </p>
              </CardContent>
            </Card>
            {/* Service Card 3: Full Spectrum Doula */}
            <Card className="border-teal-200 bg-white min-h-[340px] w-full max-w-xs mx-auto flex-1 shadow-md">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mx-auto flex-shrink-0">
                  <Heart className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-teal-800 text-center">Full Spectrum Doula</h3>
                <p className="text-gray-700 text-center flex-grow">
                  Compassionate doula support for all pregnancy outcomes, including abortion, miscarriage, stillbirth, surrogacy, and adoption.
                  <br /> <br />
                  Pricing based on individual needs. Please inquire.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LGBTQ and Gender Affirming Support Section - White, two-column */}
      <section id="lgbtq-support" className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <h2 className={`mb-8 text-center text-3xl font-bold text-teal-800 ${yeseva.className}`}>LGBTQ and Gender Affirming Support</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-8 max-w-4xl mx-auto">
            <div className="md:w-1/2 w-full">
              <p className="text-gray-700">
                As a queer person, I understand the barriers to inclusive care in healthcare settings. I'm here to provide affirming, respectful support for LGBTQ and gender non-conforming families of all shapes and sizes. My work is grounded in a commitment to queer and gender justice, and I believe that protecting LGBTQ reproductive autonomy is both a direct action and a pathway to cultivating queer joy. Whether you're seeking a safe space, guidance on LGBTQ-friendly perinatal providers, or resources for gender-affirming birth and postpartum care, I'm here to support you. Every family deserves to feel seen, heard, and celebrated in their reproductive journey.
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="overflow-hidden rounded-lg w-full max-w-xs h-[400px] flex items-center justify-center protect-container">
                <Image
                  src="/images/doula-with-baby.jpg"
                  alt="Chelsea providing gentle newborn care"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover protect-image"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education / Training Section - Light Teal */}
      <section id="education" className="py-16" style={{ backgroundColor: '#B7D9D3' }}>
        <div className="container px-4 md:px-6">
          <h2 className={`mb-12 text-center text-3xl font-bold text-teal-800 ${yeseva.className}`}>Education & Training</h2>
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md text-gray-700">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Birth Doula Training</span>
                <span className="text-sm sm:text-base">Natural Resources</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Postpartum Doula Training</span>
                <span className="text-sm sm:text-base">Natural Resources</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm sm:text-base">Foundations of Laction Education</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - White */}
      <section id="faq" className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <h2 className={`mb-12 text-center text-3xl font-bold text-teal-800 ${yeseva.className}`}>Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                What exactly does a doula do?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                As your doula, I provide physical, emotional, and informational support before, during and after birth. I don't perform clinical tasks and I am not a medical professional, but I work
                alongside your medical team to help you have the most positive birth experience possible. I am
                professionally trained to help with comfort measures, labor positioning, decision-making,
                and to provide evidence-based guidance for newborn care. 
                <br /> <br />
                Studies show that doulas help improve maternal
                health and birth outcomes, and increase parental satisfaction with the birth experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                How is a doula different from a midwife?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                Midwives are medical professionals responsible for the clinical aspects of your pregnancy and birth. As
                a doula, I focus exclusively on the birthing person's comfort and emotional well-being. I don't perform
                medical procedures or make decisions about your care. But I can help you understand your options and
                guide you to make informed decisions in alignment with your personal preferences.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                When should I hire a doula?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                Many families hire a doula in the second trimester, around 20-24 weeks, but I can be hired at any point
                in your pregnancy. Booking earlier gives us more time to build a relationship and prepare for your
                birth, but I also accept last-minute clients when availability allows.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                Do you support all types of births?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                Yes! I support people planning to give birth at the hospital, at a birth center, and at home. I
                provide support for unmedicated births, epidurals, and cesarean births. I also speak
                Spanish.
                <br />  <br /> 
                I can also provide full spectrum doula support, honoring and assisting individuals through all pregnancy outcomes, not just live birth but also abortion, miscarriage, stillbirth, surrogacy, and adoption.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4b">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                Do you take insurance or workplace benefits like Carrot?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                At this time you will not be able to get reimbursement for my services through insurance or benefits
                like Carrot and Maven. I am working towards becoming an approved provider for these programs, which I
                hope to complete in the near future. In the meantime, I am willing to discuss a rate or payment plan
                that works for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-medium text-teal-700">
                Can you tell me more about your pricing and what's included?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                <p>I am currently offering discounted rates while I work towards getting certified, including some free hours for a limited number of clients. I also reserve a limited number of sliding scale spots for families in need. Please reach out to discuss packages, payment options, payment plans, or a reduced fee.</p>
                <br /> 
                <p><strong>Birth support is a flat rate of $1,500</strong>, which includes:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-6">
                  <li>Two prenatal visits</li>
                  <li>Continuous labor support</li>
                  <li>Two postpartum visits</li>
                  <li>Ongoing email, text, and phone support</li>
                </ul>
                <br /> 
                <p>Additional prenatal or postpartum visits can be added for an extra fee.</p>
                <br /> 
                <p><strong>Postpartum support is $40 per hour</strong>, with a minimum of <strong>24 total hours</strong> (totaling $960).</p>
                <p>Postpartum scheduling is flexible. We'll work together to create a package of visits spread out over several weeks, with the option to extend.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-6">
                  <li>Daytime and evening visits: Minimum of 3 hours</li>
                  <li>Overnight visits: Minimum of 8 hours (I schedule a limited number of overnight shifts. If you need more extensive overnight support, I'm happy to refer you to a night doula.)</li>
                </ul>
                <br />
                <p><strong>Full spectrum support</strong> is priced based on individual needs. Please reach out to discuss your specific situation and how I can best support you. Some examples of support I can provide:</p> 
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-6">
                  <li>Accompany you to medical appointments and procedures, or provide physical support at your home </li>
                  <li>Offer rituals, memory-making ideas, or help planning farewells</li>
                  <li>Hold space to feel and process emotions (grief, relief, confusion, etc.)</li>
                  <li>Provide information and resources on what to expect and how to care for oneself</li>
                  <li>Offer referrals to other providers (therapists, body workers, support groups, etc.)</li>
                  </ul>
                <br />
                <p><strong>All my clients are provided with reliable backup from trusted doulas in my network, so you can count on support as expected.</strong></p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section - Teal-800 */}
      <section id="contact" className="bg-teal-800 py-16">
        <div className="container px-4 md:px-6">
          <h2 className={`mb-12 text-center text-3xl font-bold text-white ${yeseva.className}`}>Contact Me</h2>
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
            <p className="mb-6 text-center text-gray-700">
              I'd love to hear from you! Reach out to schedule a free consultation or ask any questions. <br />In your message please include your EDD, where you live, and what services you are interested in.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex-shrink-0 shadow">
                  <Mail className="h-7 w-7 text-teal-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-teal-800 text-lg">Email</h3>
                  <p className="text-gray-700 break-all text-base">earlydayswithchelsea@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex-shrink-0 shadow">
                  <MapPin className="h-7 w-7 text-teal-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-teal-800 text-lg">Service Area</h3>
                  <p className="text-gray-700 text-base">San Francisco, and parts of the East Bay, Marin, and the Peninsula.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex-shrink-0 shadow">
                  <Calendar className="h-7 w-7 text-teal-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-teal-800 text-lg">Availability</h3>
                  <p className="text-gray-700 text-base">Currently accepting clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Teal (matching header) */}
      <footer className="bg-teal-800 py-8 text-center text-white">
        <div className="container px-4 md:px-6">
          <p>© {year} Early Days with Chelsea. All rights reserved.</p>
          <p className="mt-2 text-sm text-teal-50">Support for the early days of parenthood.</p>
        </div>
      </footer>
    </div>
  )
}
