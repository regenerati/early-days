"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { Merriweather } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { DesktopNav } from "@/components/desktop-nav"
import Link from "next/link"

const merriweather = Merriweather({ weight: ['400', '700'], subsets: ["latin"] })

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="hidden md:block"><DesktopNav /></div>
      <div className="block md:hidden"><Navigation /></div>
      {/* Small Header */}
      <header className="relative header-bg-sunrise py-16 overflow-hidden">
  <div className="relative container mx-auto px-6 md:px-12 max-w-5xl text-justify">
          <h1 className={`${merriweather.className} text-4xl sm:text-5xl font-bold tracking-wide text-white text-center drop-shadow-lg mt-16 font-bold`}>Services & Pricing</h1>
           <Button asChild className="mx-auto mt-8 bg-teal-800 hover:bg-teal-900 text-white rounded-lg shadow-lg text-xl font-semibold transition-all duration-200 h-14 px-10 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400" size="lg">
            <Link href="/#contact" className="max-w-xs w-full flex items-center justify-start"><Calendar className="inline-block mr-2 h-6 w-6" /> Book a Free Consultation</Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow">
        {/* Section - Light Teal */}
  <section id="postpartum-doula" className="py-16 scroll-mt-0 md:scroll-mt-14" style={{ backgroundColor: '#B7D9D3' }}>
          <div className="container px-6 md:px-12 max-w-5xl mx-auto md:grid md:grid-cols-2 gap-8 flex flex-col">
            {/* Column 1: Heading, paragraph, image */}
            <div className="flex flex-col items-start mb-8 md:mb-0">
              <h2 className={`mb-8 text-left text-4xl font-bold text-teal-800 tracking-wide ${merriweather.className} font-bold`}>Postpartum Doula</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As your postpartum doula, I provide physical, emotional, and informational support during the weeks and months after your baby is born. My role is to help ease your transition into parenthood by offering practical assistance, newborn care guidance, and a supportive presence as you recover and adjust. Research shows that postpartum doula support can reduce the risk of postpartum depression, improve infant feeding outcomes, and enhance overall family well-being during this critical period.</p>
              <div className="w-full flex justify-center">
                <div className="w-64 h-40 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image src="/images/breastfeeding.jpg" alt="Breastfeeding support" width={256} height={160} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
            {/* Column 2: price, scheduling, bullet list */}
            <div className="flex flex-col justify-center mt-8 md:mt-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-4"><strong>Daytime postpartum support is offered on a sliding scale of $55–$65 per hour, with a minimum of 30 total hours.</strong> (Minimum investment: $1650-$1950.) Longer-term support can be reserved with a commitment to a set number of hours per week for an agreed duration.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4"><strong>Overnight postpartum support is offered on a sliding scale of $70–$75 per hour, with a minimum of 8 hours per visit.</strong></p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Postpartum support is tailored to your needs and may include:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-6 mb-4">
                <li>Hands-on assistance with self-care recovery measures for healing after birth</li>
                <li>Newborn care support (diapering, soothing, bathing) to give parents time to rest and recharge</li>
                <li>Support for all feeding choices, including breastfeeding / chestfeeding and bottle feeding</li>
                <li>Help with light household tasks, such as laundry, dishes, and tidying</li>
                <li>Preparation of simple, nourishing meals and snacks</li>
                <li>Emotional support and a listening ear</li>
                <li>Referrals to trusted professionals and local resources as needed</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">I will create a personalized package of visits, with the option to extend if I'm available. <Link href="/#contact"><strong style={{color: 'teal'}}>Email me</strong></Link> to learn more.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
