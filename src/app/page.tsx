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
        { name: "الرئيسية", id: "home" },
        { name: "من نحن", id: "about" },
        { name: "خدماتنا", id: "services" },
        { name: "اتصل بنا", id: "contact" },
      ]}
      brandName="ديلي ووش"
      button={{ text: "احجز الآن", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="ديلي ووش: تألق في كل تفصيل"
      description="خدمات غسيل وتنظيف سيارات متميزة مصممة للسائق العصري. نحن نتعامل مع سيارتك كأنها سيارتنا، لضمان لمعان لا مثيل له في كل مرة."
      testimonials={[
        { name: "أحمد علي", handle: "@ahmed", testimonial: "خدمة ممتازة، بدت سيارتي وكأنها جديدة تماماً بعد الغسيل الممتاز.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-driving-car-positive-emotions-bright-daylight-interior_169016-68621.jpg" },
        { name: "سارة خالد", handle: "@sara", testimonial: "طاقم عمل محترف جداً وجودة تنظيف من الدرجة الأولى.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-man-posing-near-his-modern-car_651396-2811.jpg" },
        { name: "عمر سعيد", handle: "@omar", testimonial: "سريع، بأسعار معقولة، وشامل للغاية. أنصح به بشدة.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-business-woman-choosing-car_1303-22398.jpg" },
        { name: "ليلى ن.", handle: "@layla", testimonial: "أفضل تجربة تنظيف وتلميع حصلت عليها لسيارتي.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/you-are-special-rare-unique-different_53876-133683.jpg" },
        { name: "فهد م.", handle: "@fahad", testimonial: "نتائج رائعة باستمرار وخدمة ودودة في كل مرة.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-looking-car_23-2150171223.jpg" }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-groomed-man-is-washing-his-own-car-car-washing-station_613910-21477.jpg?_wi=1"
      imageAlt="خدمة احترافية لتنظيف السيارات"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/man-washing-car-carwash-station-wearing-orange-vest_651396-2008.jpg", alt: "رجل يغسل السيارة" },
        { src: "http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212212.jpg", alt: "سيارة جميلة" },
        { src: "http://img.b2bpic.net/free-photo/male-car-washer-cleaning-auto-supervision-owner_651396-3547.jpg", alt: "منظف سيارات" },
        { src: "http://img.b2bpic.net/free-photo/young-man-washing-car-carwash-station-outdoor_651396-2787.jpg", alt: "شاب يغسل السيارة" },
        { src: "http://img.b2bpic.net/free-photo/high-angle-man-driving_23-2148514903.jpg", alt: "منظور علوي للقيادة" }
      ]}
      avatarText="موثوق من قبل أكثر من 15,000 سائق"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "شغفنا بالكمال" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/medium-shot-man-fixing-car_23-2149385729.jpg", alt: "فريقنا أثناء العمل" }
      ]}
      buttons={[{ text: "اعرف المزيد", href: "#" }]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "غسيل خارجي", author: "فريقنا المحترف", description: "غسيل بضغط عالٍ وصابون صديق للبيئة لنهاية لا تشوبها شائبة.", tags: ["تنظيف"], imageSrc: "http://img.b2bpic.net/free-photo/man-s-hand-is-cleaning-waxing-car_1150-6629.jpg" },
        { id: "f2", title: "تنظيف داخلي عميق", author: "متخصصو التفاصيل", description: "تنظيف شامل بالمكنسة الكهربائية والبخار لمقصورة منعشة.", tags: ["عناية"], imageSrc: "http://img.b2bpic.net/free-photo/still-life-cleaning-tools_23-2150552297.jpg" },
        { id: "f3", title: "تلميع وشمع", author: "الخبراء", description: "طبقة شمع واقية لحماية تدوم ولمعان يشبه صالات العرض.", tags: ["حماية"], imageSrc: "http://img.b2bpic.net/free-photo/man-polish-car-garage_1157-26060.jpg" }
      ]}
      title="عناية شاملة"
      description="خدماتنا المتميزة تحافظ على سيارتك في أفضل حالة، من الداخل والخارج."
    />
  </div>

  <div id="packages" data-section="packages">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        { id: "basic", title: "غسيل سريع", price: "50 ر.س", period: "للغسلة", features: ["غسيل خارجي بالرغوة", "شطف العجلات", "تجفيف بالهواء"], button: { text: "احجز الآن", href: "#" }, imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-spraying-powder-paint_52683-98216.jpg" },
        { id: "pro", title: "عناية كاملة", price: "250 ر.س", period: "للجلسة", features: ["غسيل خارجي كامل", "تنظيف بالمكنسة", "تلميع الطبلون", "تنظيف المحرك"], button: { text: "احجز الآن", href: "#" }, imageSrc: "http://img.b2bpic.net/free-photo/young-groomed-man-is-washing-his-own-car-car-washing-station_613910-21477.jpg?_wi=2" },
        { id: "prem", title: "تألق صالات العرض", price: "450 ر.س", period: "للجلسة", features: ["كل ما في الباقة الكاملة", "علاج الطين", "وضع الشمع", "تكييف الجلد"], button: { text: "احجز الآن", href: "#" }, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-fixing-car_23-2149385729.jpg" }
      ]}
      title="اختر غسلتك"
      description="خطط مرنة تناسب جميع الميزانيات واحتياجات المركبات."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="تأثيرنا بالأرقام"
      tag="جودة موثوقة"
      metrics={[
        { id: "m1", value: "15,000+", description: "سيارة تم غسلها هذا العام" },
        { id: "m2", value: "98%", description: "نسبة رضا العملاء" },
        { id: "m3", value: "12", description: "سنة من الخبرة" }
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
        { id: "1", name: "سارة ج.", role: "عميلة", testimonial: "ببساطة أفضل مغسلة سيارات في المدينة، موثوقة حقاً.", imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434340.jpg" },
        { id: "2", name: "مارك د.", role: "عميل وفي", testimonial: "طاقم العمل محترف للغاية ومهذب.", imageSrc: "http://img.b2bpic.net/free-photo/business-people-collaborating-close-up_23-2148336894.jpg" },
        { id: "3", name: "إميلي ف.", role: "عميلة", testimonial: "سيارتي تبدو وكأنها خرجت للتو من خط التجميع.", imageSrc: "http://img.b2bpic.net/free-photo/business-woman-looking-auto-mobile-car-showroom_1303-21381.jpg" },
        { id: "4", name: "جون ر.", role: "عضو", testimonial: "خدمة سريعة وقيمة رائعة للجودة العالية المقدمة.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-woman-holding-speech-bubble-with-various-type-emoticons_23-2147849477.jpg" },
        { id: "5", name: "أليس ك.", role: "عميلة", testimonial: "لن أذهب لأي مكان آخر، الخدمة هي الكمال بعينه.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-customer-with-business-person-car-dealership_23-2149117135.jpg" }
      ]}
      title="ماذا يقول سائقونا"
      description="استمع مباشرة ممن يثقون في ديلي ووش مع مركباتهم العزيزة."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "هل أحتاج إلى موعد؟", content: "نحن نرحب بالزوار، لكن يوصى بالحجز لضمان خدمة سريعة." },
        { id: "q2", title: "ما هي المنتجات التي تستخدمونها؟", content: "نستخدم منتجات تنظيف صديقة للبيئة وعالية الأداء لحماية طلاء سيارتك والبيئة." },
        { id: "q3", title: "كم تستغرق عملية التنظيف؟", content: "تعتمد المدة على الباقة، وعادة ما تستغرق ما بين ساعة إلى 4 ساعات." }
      ]}
      mediaAnimation="slide-up"
      title="أسئلة متكررة"
      description="كل ما تحتاج لمعرفته حول عملية خدمتنا."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/auto-mechanic-wearing-face-mask-gloves-while-using-computer-workshop-s-office_637285-9821.jpg?_wi=1"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="احجز غسلتك اليوم"
      description="اتصل بنا لحجز موعدك أو طرح أي أسئلة."
      inputs={[
        { name: "name", type: "text", placeholder: "الاسم الكامل", required: true },
        { name: "email", type: "email", placeholder: "البريد الإلكتروني", required: true }
      ]}
      textarea={{ name: "message", placeholder: "رسالتك هنا...", rows: 4, required: true }}
      imageSrc="http://img.b2bpic.net/free-photo/auto-mechanic-wearing-face-mask-gloves-while-using-computer-workshop-s-office_637285-9821.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="ديلي ووش"
      columns={[
        { title: "الخدمات", items: [ { label: "خارجي", href: "#services" }, { label: "داخلي", href: "#services" }, { label: "تفاصيل", href: "#services" } ] },
        { title: "الدعم", items: [ { label: "الأسئلة", href: "#faq" }, { label: "اتصل بنا", href: "#contact" }, { label: "الخصوصية", href: "#" } ] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
