"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Daily Wash"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Daily Wash: Brilliance in Every Detail"
      description="Premium car detailing and washing services designed for the modern driver. We treat your vehicle like our own, ensuring a showroom shine every time."
      testimonials={[
        {
          name: "Ahmed Ali",
          handle: "@ahmed",
          testimonial: "Excellent service, my car looked brand new after the premium wash.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-driving-car-positive-emotions-bright-daylight-interior_169016-68621.jpg",
        },
        {
          name: "Sara Khalid",
          handle: "@sara",
          testimonial: "Very professional staff and top-tier cleaning quality.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-posing-near-his-modern-car_651396-2811.jpg",
        },
        {
          name: "Omar Said",
          handle: "@omar",
          testimonial: "Fast, affordable, and extremely thorough. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-business-woman-choosing-car_1303-22398.jpg",
        },
        {
          name: "Layla N.",
          handle: "@layla",
          testimonial: "The best detailing experience I've ever had for my vehicle.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/you-are-special-rare-unique-different_53876-133683.jpg",
        },
        {
          name: "Fahad M.",
          handle: "@fahad",
          testimonial: "Consistently great results and friendly service every time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-looking-car_23-2150171223.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-groomed-man-is-washing-his-own-car-car-washing-station_613910-21477.jpg?_wi=1"
      imageAlt="Professional car cleaning service"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-washing-car-carwash-station-wearing-orange-vest_651396-2008.jpg",
          alt: "Man washing car on carwash station wearing orange vest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212212.jpg",
          alt: "Beautiful car at washing service",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-car-washer-cleaning-auto-supervision-owner_651396-3547.jpg",
          alt: "Male car washer cleaning auto under supervision of owner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-washing-car-carwash-station-outdoor_651396-2787.jpg",
          alt: "Young man washing car on carwash station outdoor",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-man-driving_23-2148514903.jpg",
          alt: "High angle man driving",
        },
      ]}
      avatarText="Trusted by 15,000+ drivers"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Our Passion for Perfection",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-fixing-car_23-2149385729.jpg",
          alt: "Our team at work",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Exterior Wash",
          author: "Pro Team",
          description: "High-pressure wash and eco-friendly soap for a flawless finish.",
          tags: [
            "Cleaning",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-s-hand-is-cleaning-waxing-car_1150-6629.jpg",
        },
        {
          id: "f2",
          title: "Interior Deep Clean",
          author: "Detailers",
          description: "Comprehensive vacuuming and steam cleaning for a fresh cabin.",
          tags: [
            "Detailing",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-cleaning-tools_23-2150552297.jpg",
        },
        {
          id: "f3",
          title: "Wax & Polish",
          author: "Specialists",
          description: "Hard-shell wax protection for long-lasting showroom brilliance.",
          tags: [
            "Protection",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-polish-car-garage_1157-26060.jpg",
        },
      ]}
      title="Comprehensive Care"
      description="Our signature services keep your vehicle pristine, inside and out."
    />
  </div>

  <div id="packages" data-section="packages">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          title: "Express Wash",
          price: "50 SAR",
          period: "Per Wash",
          features: [
            "Exterior Foam Wash",
            "Wheel Rinse",
            "Air Dry",
          ],
          button: {
            text: "Book Now",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-spraying-powder-paint_52683-98216.jpg",
          imageAlt: "Front view man spraying powder paint",
        },
        {
          id: "pro",
          title: "Full Detail",
          price: "250 SAR",
          period: "Per Session",
          features: [
            "Full Exterior Wash",
            "Vacuuming",
            "Dashboard Polish",
            "Engine Bay Clean",
          ],
          button: {
            text: "Book Now",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/young-groomed-man-is-washing-his-own-car-car-washing-station_613910-21477.jpg?_wi=2",
          imageAlt: "Front view man spraying powder paint",
        },
        {
          id: "prem",
          title: "Showroom Shine",
          price: "450 SAR",
          period: "Per Session",
          features: [
            "Everything in Pro",
            "Clay Bar Treatment",
            "Wax Application",
            "Leather Condition",
          ],
          button: {
            text: "Book Now",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-fixing-car_23-2149385729.jpg",
          imageAlt: "Front view man spraying powder paint",
        },
      ]}
      title="Select Your Wash"
      description="Flexible plans for any budget and vehicle need."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact in Numbers"
      tag="Trusted Quality"
      metrics={[
        {
          id: "m1",
          value: "15,000+",
          description: "Cars washed this year",
        },
        {
          id: "m2",
          value: "98%",
          description: "Customer satisfaction rate",
        },
        {
          id: "m3",
          value: "12",
          description: "Years of expertise",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Client",
          testimonial: "Simply the best car wash in the city, really reliable.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434340.jpg",
        },
        {
          id: "2",
          name: "Mark D.",
          role: "Loyal Customer",
          testimonial: "Staff is extremely professional and polite.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-collaborating-close-up_23-2148336894.jpg",
        },
        {
          id: "3",
          name: "Emily V.",
          role: "Client",
          testimonial: "My SUV looks like it just came off the assembly line.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-looking-auto-mobile-car-showroom_1303-21381.jpg",
        },
        {
          id: "4",
          name: "John R.",
          role: "Member",
          testimonial: "Fast service and great value for the high quality provided.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-woman-holding-speech-bubble-with-various-type-emoticons_23-2147849477.jpg",
        },
        {
          id: "5",
          name: "Alice K.",
          role: "Client",
          testimonial: "I never go anywhere else, the service is perfection.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-customer-with-business-person-car-dealership_23-2149117135.jpg",
        },
      ]}
      title="What Our Drivers Say"
      description="Hear directly from those who trust Daily Wash with their pride and joy."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do I need an appointment?",
          content: "While we welcome walk-ins, appointments are recommended to ensure prompt service.",
        },
        {
          id: "q2",
          title: "Which products do you use?",
          content: "We use eco-friendly, high-performance cleaning products to protect your paint and the environment.",
        },
        {
          id: "q3",
          title: "How long does a detailing take?",
          content: "Depending on the package, detailing can take anywhere from 1 to 4 hours.",
        },
      ]}
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Everything you need to know about our service process."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/auto-mechanic-wearing-face-mask-gloves-while-using-computer-workshop-s-office_637285-9821.jpg?_wi=1"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Book Your Wash Today"
      description="Contact us to schedule your service or ask any questions."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your message here...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/auto-mechanic-wearing-face-mask-gloves-while-using-computer-workshop-s-office_637285-9821.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Daily Wash"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Exterior",
              href: "#services",
            },
            {
              label: "Interior",
              href: "#services",
            },
            {
              label: "Detailing",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
