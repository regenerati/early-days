"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { Yeseva_One } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { DesktopNav } from "@/components/desktop-nav"

const yeseva = Yeseva_One({ weight: '400', subsets: ["latin"] })

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="hidden md:block"><DesktopNav /></div>
      <div className="block md:hidden"><Navigation /></div>
      {/* Small Header */}
      <header className="relative header-bg-sunrise py-24 overflow-hidden">
        <div className="relative container mx-auto px-6 md:px-12 max-w-4xl text-justify">
          <h1 className={`${yeseva.className} text-4xl sm:text-5xl font-bold tracking-wide text-white text-center drop-shadow-lg mt-12`}>Services & Pricing</h1>
           <Button asChild className="mx-auto mt-12 bg-teal-800 hover:bg-teal-900 text-white rounded-lg shadow-lg text-xl font-semibold transition-all duration-200 h-14 px-10 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400" size="lg">
            <a href="#contact" className="max-w-xs w-full flex items-center justify-start"><Calendar className="inline-block mr-2 h-6 w-6" /> Book a Free Consultation</a>
          </Button>
        </div>
      </header>
      <main className="flex-grow">
        {/* Section 1 - White */}
  <section id="birth-doula" className="py-16 bg-white scroll-mt-0 md:scroll-mt-14">
          <div className="container px-6 md:px-12 max-w-4xl mx-auto md:grid md:grid-cols-2 gap-8 flex flex-col">
            {/* Column 1: Heading, paragraph, image */}
            <div className="flex flex-col items-start mb-8 md:mb-0">
              <h2 className={`mb-8 text-left text-4xl font-bold text-teal-800 tracking-wide ${yeseva.className}`}>Birth Doula</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As your birth doula, I provide physical, emotional, and informational support to you before, during, and shortly after childbirth. My role is to help create a calm, empowering environment while offering guidance and comfort measures throughout labor. Studies show that professional doula support is associated with a significant reduction in medical interventions during childbirth, which contributes to improved maternal health outcomes and increased parental satisfaction with the birth experience.
              </p>
              <div className="w-full flex justify-center">
                <div className="w-48 h-64 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image src="/images/baby-hospital.jpg" alt="Newborn baby in hospital" width={192} height={256} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
            {/* Column 2: price, bullet list, extra info */}
            <div className="flex flex-col justify-start mt-8 md:mt-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-2"><strong>Birth support is a flat rate of $1,600</strong>, which includes:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-6 mb-4">
                <li>Two personalized, in-home prenatal visits where I supplement your childbirth education, clarify your birthing preferences, practice comfort techniques and labor positions, and teach your partner how to support you</li>
                <li>24/7 on-call availability from 37-42 weeks gestation</li>
                <li>Continuous labor support</li>
                <li>Two personalized, in-home postpartum visits, including assistance with self-care recovery measures, and lactation and baby feeding support</li>
                <li>Ongoing email, text, and phone support</li>
                <li>Access to evidence-based resources and referrals to healthcare providers</li>
                <li>Reliable back-up from trusted doulas in my network</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">Additional prenatal or postpartum visits can be added for an extra fee.</p>
            </div>
          </div>
        </section>
        {/* Section 2 - Light Teal */}
  <section id="postpartum-doula" className="py-16 scroll-mt-0 md:scroll-mt-14" style={{ backgroundColor: '#B7D9D3' }}>
          <div className="container px-6 md:px-12 max-w-4xl mx-auto md:grid md:grid-cols-2 gap-8 flex flex-col">
            {/* Column 1: Heading, paragraph, image */}
            <div className="flex flex-col items-start mb-8 md:mb-0">
              <h2 className={`mb-8 text-left text-4xl font-bold text-teal-800 tracking-wide ${yeseva.className}`}>Postpartum Doula</h2>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-4"><strong>Postpartum support is $40 per hour, with a minimum of 25 total hours (totaling $1000).</strong> Postpartum support is tailored to your needs and may include:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-6 mb-4">
                <li>Hands-on assistance with self-care recovery measures for healing after birth</li>
                <li>Newborn care support (diapering, soothing, bathing) to give parents time to rest and recharge</li>
                <li>Support for all feeding choices, including breastfeeding / chestfeeding and bottle feeding</li>
                <li>Help with light household tasks, such as laundry, dishes, and tidying</li>
                <li>Preparation of simple, nourishing meals and snacks</li>
                <li>Emotional support and a listening ear</li>
                <li>Referrals to trusted professionals and local resources as needed</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">I will create a package of visits tailored to your needs, with the option to extend if I'm available. I prioritize day shifts of 3hrs minimum but I can do occasional 8hr overnight shifts.</p>
            </div>
          </div>
        </section>
        {/* Section 3 - White */}
  <section id="full-spectrum-doula" className="py-16 bg-white scroll-mt-0 md:scroll-mt-14">
          <div className="container px-6 md:px-12 max-w-4xl mx-auto md:grid md:grid-cols-2 gap-8 flex flex-col">
            {/* Column 1: Heading, paragraph, image */}
            <div className="flex flex-col items-start mb-8 md:mb-0">
              <h2 className={`mb-8 text-left text-4xl font-bold text-teal-800 tracking-wide ${yeseva.className}`}>Full Spectrum Doula</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pregnancy can lead to many different outcomes, not all of which result in parenting or a live birth. As a full spectrum doula, I provide compassionate, non-medical support through the full range of reproductive experiences, including miscarriage, stillbirth, abortion, adoption, and surrogacy. My role is to offer emotional, physical, and informational care that's tailored to your unique circumstances, needs, and choices. I offer customizable doula packages to support your entire journey, from pregnancy through postpartum.
              </p>
              <div className="w-full flex justify-center">
                <div className="w-64 h-40 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image src="/images/holding-hands.jpg" alt="Holding hands support" width={256} height={160} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
            {/* Column 2: price and bullet list */}
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-2 mt-0"><strong>Full spectrum support is priced based on individual needs.</strong> Some examples of support I can provide:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-6 mb-4">
                <li>Accompany you to medical appointments and procedures, or provide physical support at your home</li>
                <li>Offer rituals, memory-making ideas, or help planning farewells</li>
                <li>Hold space to feel and process emotions (grief, relief, confusion, etc.)</li>
                <li>Provide information and resources on what to expect and how to care for oneself</li>
                <li>Help you set up your home for the arrival of a baby</li>
                <li>Offer referrals to other providers (therapists, body workers, support groups, etc.)</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-2 mt-0">Please reach out to discuss your specific situation and how I can best support you.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
