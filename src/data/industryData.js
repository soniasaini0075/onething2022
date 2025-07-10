import mmmProject from "../assets/img/industry/bfsi/projects/mmm.webp";
import hdfcProject from "../assets/img/industry/bfsi/projects/hdfc.webp";
import orixProject from "../assets/img/industry/bfsi/projects/orix.webp";

import mmmTestimonial from "../assets/img/industry/bfsi/testimonials/mmm-testimonial.webp";
import rblTestimonial from "../assets/img/industry/bfsi/testimonials/rbl-testimonial.webp";
import orixTestimonial from "../assets/img/industry/bfsi/testimonials/orix-testimonial.webp";

import posableProject from "../assets/img/industry/retail/projects/posable.webp";
import crisilProject from "../assets/img/industry/saas/projects/crisil.jpeg";
import airtelProject from "../assets/img/home/airtel-home-thumbnail.webp";
import prescintoProject from "../assets/img/industry/saas/projects/prescinto.webp";

import saasBanner from "../assets/img/industry/saas/banner.webp";
import airtelTestimonial from "../assets/img/industry/saas/testimonials/kartik.webp";

import statiqHomeThumbnail from "../assets/img/home/statiq-home-thumbnail.webp";

import cocaCola from "../assets/img/industry/retail/projects/coca-cola.webp";
import healthKart from "../assets/img/industry/retail/projects/healthkart.webp";
import suprDaily from "../assets/img/industry/retail/projects/suprDaily.webp";

import bfsiBanner from "../assets/img/industry/retail/banner.webp";
import enegryBanner from "../assets/img/industry/enegry/banner.webp";

import healthkartTestimonial from "../assets/img/industry/retail/testimonials/healthkart-testimonial.webp";
import cokeTestimonial from "../assets/img/industry/retail/testimonials/coke-testimonial.webp";
import suprdailyTestimonial from "../assets/img/industry/retail/testimonials/suprdaily-testimonial.webp";
import itcUnikid from "../assets/img/industry/health/projects/itc.webp";
import atomProject from "../assets/img/industry/health/projects/atom.webp";
import noiseProject from "../assets/img/industry/health/projects/noise.webp";

import healthwellnessBanner from "../assets/img/industry/health/banner.webp";

export const INDUSTRY_DATA = {
  bfsi: {
    metaTitle:
      "Unlock Growth in BFSI: Design Thinking & UX Expertise | Onething Design",
    metaDesc:
      "Elevate your financial brand with Onething's data-driven design experience. Simplify complex finance, build trust, & accelerate growth. Case studies of RBL Bank, MyMoneyMantra, HDFC & more.",
    title: "BFSI",
    heading: "Accelerating growth for financial products",
    mainImg: bfsiBanner,
    desc1:
      "We simplify the complex mechanics of finance to make way for transparent, intuitive and",
    keyword: "bankable fintech experiences",
    desc2:
      ", while ensuring a friction balance to shield your users from financial blunders.",
    statsHead: "Look at what data says",

    stats1: "75%",
    stats1_desc:
      "of US’ population is drawn to fintech for a simple, fast, and accessible experience",
    stats2: "6",
    stats2_desc:
      "out of every 10 mobile users prefer finance apps over websites",
    stats3: "71%",
    stats3_desc:
      "of banking users don’t receive time-targeted product recommendations.",
    stats4: "25%",
    stats4_desc: "of the fintech market is held by digital payment products",
    component_heading: "Unlocking impact for the leading ones",
    components: [
      {
        id: 1,
        img: orixProject,
        heading: "Orix",
        desc: "Revolutionizing car leasing, lending, rentals, life insurance through an autonomous website for one of the pioneers in the segment.",
        link: "/projects/bfsi/orix/",
      },
      {
        id: 2,
        img: mmmProject,
        heading: "MyMoneyMantra",
        desc: "Designing for the legacy of a leading financial company by translating its trust to a digital context, bringing a 2.7x increase in their digital loan applications.",
        link: "/projects/bfsi/mymoneymantra/",
      },
      {
        id: 3,
        img: hdfcProject,
        heading: "HDFC SmartBuy",
        desc: "Redesigning the digital portal of the nation’s top bank to provide a new-age banking experience to customers; an experience beyond banking.",
        link: "/projects/bfsi/hdfc-smartbuy/",
      },
    ],
    testimonials: [
      {
        id: 1,
        img: mmmTestimonial,
        desc: "We did a major chunk of the project in the lockdown period. Although we were apprehensive of the outcomes, Onething made sure that the project went smoothly. They have a unique outlook towards problem solving while meeting business objectives.",
        name: "Aparna Sharma, ",
        position: "Director, MyMoneyMantra",
      },
      {
        id: 2,
        img: rblTestimonial,
        desc: "The team was able to breakdown a large scale communication system into granular touchpoints and create a segment-wise approach to cover all channels of communications.",
        name: "Utkarsh Saxena, ",
        position: "Senior Vice President, RBL Bank Limited",
      },
      {
        id: 3,
        img: orixTestimonial,
        desc: "The team grasped the problem statement and delivered solutions through a thorough design process. They also helped us understand best practices in the industry to create an autonomous platform that would cater to the needs of our users.",
        name: "Vikas Saini, ",
        position: "Assistant Vice President, Orix",
      },
    ],
    curated_large: [
      {
        id: 1,
        heading: "Blogs",
        text1: "Enhancing",
        grad_text: "Customer Service",
        text2: "Experience for Fintech Platforms",
        span_text: "Read More",
        link: "/blogs/how-to-enhance-customer-service-experience-for-your-fintech-platform/",
      },
      {
        id: 2,
        heading: "Blogs",
        text1: "Designing Trust for Fintech Products",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        time: "9 mins read",
        span_text: "Read More",
        link: "/blogs/design-tips-to-improve-the-trust-factor-of-fintech-products/",
      },
      {
        id: 3,
        heading: "Blogs",
        text1: "Digital Retail Banking Disruptions",
        time: "9 mins read",
        span_text: "Read More",
        link: "/static/media/EdTech-Whitepaper.a3c7e9c7b917c9584743.pdf",
      },
      {
        id: 4,
        heading: "Podcast",
        text1: "Neobanking Experience for SMBs & Entrepreneurs",
        grad_text: "Customer Service",
        text2: "Experience for Fintech Platforms",
        span_text: "Explore",
        link: "/podcast/future-of-brands-in-web-3-0-with-akshay-schbang%EF%BF%BC/",
      },
    ],
  },
  retail: {
    metaTitle: "Onething Design: Retail UX Design for Seamless Buying Journeys",
    metaDesc:
      "Onething Design crafts exceptional retail user experiences that drive sales and customer satisfaction. See their work and client testimonials for inspiration.",
    title: "Retail",
    heading: "Amplifying cart value for modern marketplaces",
    mainImg: bfsiBanner,
    desc1:
      "We prioritize personalisation and functionality to empower online shoppers with a seamless buying journey. As the number of consumers resorting to online shopping continues to rise, providing an uninterrupted",
    keyword: "digital retail experience",
    desc2: "has become paramount if the aim is to invoke more purchases.",
    statsHead: "Look at what data says",

    stats1: "88%",
    stats1_desc:
      "of online shoppers are less likely to return to a site after a bad customer experience",
    stats2: "23%",
    stats2_desc:
      "of online shoppers will share a positive shopping experience with 10+ people",
    stats3: "46%",
    stats3_desc:
      "of people say they would not purchase from a brand again if they had an interruptive mobile experience",
    stats4: "60%",
    stats4_desc: "of online shoppers use only mobile devices to make purchases",
    component_heading: "Top retail platforms, transformed with design",
    components: [
      {
        id: 1,
        img: healthKart,
        heading: "HealthKart",
        desc: "We reduced the bounce rate by 25% for India’s no. 1 sports and nutrition supplement marketplace.",
        link: "/projects/retail/healthkart/",
      },
      {
        id: 2,
        img: cocaCola,
        heading: "Coca-cola",
        desc: "We built a D2C shopping experience for a multinational beverage company, leading to a 55% increase in its cart value.",
        link: "/projects/retail/coca-cola/",
      },
      {
        id: 3,
        img: suprDaily,
        heading: "SuprDaily",
        desc: "By designing accessible buying flows for India’s pioneer player in micro-delivery, we increased their order value by 38%.",
        link: "/projects/retail/suprdaily/",
      },
      {
        id: 4,
        img: posableProject,
        heading: "POSable",
        desc: "Crafting a completely digital POS system, allowing business owners to fully-track their sales remotely.",
        link: "/projects/retail/posable/",
      },
    ],
    testimonials: [
      {
        id: 1,
        img: healthkartTestimonial,
        desc: "The team provided intuitive UX flows, user and competitor understanding and a high quality UI that encapsulates HK’s brand identity. The best part was that our team was included in the process and decisions, and was consulted at every milestone.",
        name: "Manish Goyal, ",
        position: "Head of Product and Analytics, Healthkart",
      },
      {
        id: 2,
        img: cokeTestimonial,
        desc: "The design work & attention to detail was commendable. This project was a new learning experience for me and the team made sure that they made a positive impact!",
        name: "Aabir Chatterjee, ",
        position: "Product Manager, Cocacola",
      },
      {
        id: 3,
        img: suprdailyTestimonial,
        desc: "Their team has a stunning ability to deliver well in complex use cases. They use straight thinking and effective improvisation of design principles to make experiences more intuitive.",
        name: "Ravish Malik, ",
        position: "Senior Product Designer, Swiggy",
      },
    ],
    curated_large: [
      {
        id: 1,
        heading: "Blogs",
        text1: "Enhancing",
        grad_text: "Customer Service",
        text2: "Experience for Fintech Platforms",
        span_text: "Read More",
        link: "/podcast/e-commerce-for-the-next-billion-with-bharath-ram-flipkart/",
      },
      {
        id: 2,
        heading: "Blogs",
        text1: "Designing Trust for Fintech Products",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        time: "9 mins read",
        span_text: "Read More",
        link: "/blogs/e-commerce-strategies-to-convert-first-time-visitors-to-loyal-customers/",
      },
      {
        id: 3,
        heading: "Blogs",
        text1: "Digital Retail Banking Disruptions",
        time: "9 mins read",
        span_text: "Read More",
        link: "/blogs/ux-design-in-retail-how-retail-experience-design-has-changed/",
      },
      {
        id: 4,
        heading: "Podcast",
        text1: "Neobanking Experience for SMBs & Entrepreneurs",
        grad_text: "Customer Service",
        text2: "Experience for Fintech Platforms",
        span_text: "Explore",
        link: "/podcast/decoding-the-direct-to-consumer-landscape-with-arjun-vaidya-dr-vaidyas",
      },
    ],
  },
  health_and_wellness: {
    metaTitle: "Onething Design: Design for Health and Wellness that Works",
    metaDesc:
      "Onething, a global UI/UX agency, crafts immersive health & wellness experiences. Boost patient engagement, improve care delivery, empower users. Design for good.",
    title: "Health and Wellness",
    heading: "Sustainable solutions to democratize healthcare",
    mainImg: healthwellnessBanner,
    desc1:
      "The healthcare industry is undergoing a significant transformation. With leading voices advocating a consumer-centric approach, we dedicatedly build digital solutions that enhance patient experience, revolutionize care delivery and help users monitor and take charge of their health. Partner with us to revolutionize your healthcare offerings and create ",
    keyword: "adaptable solutions",
    desc2: " that comply with the existing standards and also empower users.",
    statsHead: "Look at what data says",

    stats1: "$660B",
    stats1_desc:
      "is the projected revenue for the digital health market by 2025",
    stats2: "62%",
    stats2_desc:
      "of practitioners in the United States were unable to access telehealth through their Electronic Health Records (EHR) systems during the pandemic",
    stats3: "32%",
    stats3_desc:
      "improved cost efficiency can be achieved if healthcare players invest in digital transformation",
    stats4: "92%",
    stats4_desc:
      "increase projected in consumer(patient) satisfaction & engagement when businesses consider CX design",
    component_heading: "Building products for sustainable well-being",
    components: [
      {
        id: 1,
        img: healthKart,
        heading: "HealthKart",
        desc: "A wellness space where users can track and be in-charge of their health via a  personalized ecommerce experience.",
        link: "/projects/retail/healthkart/",
      },
      {
        id: 2,
        img: itcUnikid,
        heading: "ITC Unikid",
        desc: "A phygital ecosystem that combines the ease of online subscription models, and digital personalization tools to create a nutrition tracking product aimed at child development.",
        link: "/projects/health-wellness/itc-unikid/",
      },
      {
        id: 3,
        img: atomProject,
        heading: "Atom",
        desc: "We designed this habit-building app basis the principles of behavioral psychology, which led to the platform gaining 500K+ new users, along with a 4.9 rating on the Play Store.",
        link: "javascript:void(0)",
      },
      {
        id: 4,
        img: noiseProject,
        heading: "Noise",
        desc: "Noise Champ 2 made to the ‘Amazon choice product’; A wearable experience for kids, designed to add a new layer to parenting & habit development.",
        link: "/projects/iot/noise/",
      },
    ],
    testimonials: [
      {
        id: 1,
        img: healthkartTestimonial,
        desc: "The team provided intuitive UX flows, user and competitor understanding and a high quality UI that encapsulates HK’s brand identity. The best part was that our team was included in the process and decisions, and was consulted at every milestone.",
        name: "Manish Goyal, ",
        position: "Head of Product and Analytics, Healthkart",
      },
    ],
    curated_large: [
      {
        id: 1,
        heading: "Blogs",
        text1: "Human-centered design in healthcare",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        span_text: "Read More",
        time: "3 mins read",
        link: "blogs/using-human-centred-design-in-healthtech/",
      },
      {
        id: 2,
        heading: "Blogs",
        text1: "How IoT may transform healthcare",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        time: "5 mins read",
        span_text: "Read More",
        link: "/blogs/how-iot-may-transform-healthcare-in-the-coming-future/",
      },
      {
        id: 3,
        heading: "Blogs",
        text1: "Insights for healthcare product marketing",
        time: "9 mins read",
        span_text: "Read More",
        link: "/blogs/insights-for-healthcare-product-marketing/",
      },
      {
        id: 4,
        heading: "Podcast",
        text1: "Designing with care for healthcare",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        span_text: "Read More",
        link: "/blogs/designing-with-care-for-healthcare/",
      },
    ],
  },
  enterprise: {
    metaTitle: "Elevate Your Enterprise Software with Our UX Experts",
    metaDesc:
      "We simplify complex enterprise software into user-centric experiences that drive efficiency, adoption, and ROI.",
    title: "Enterprise",
    heading: "Catalyzing productivity <br/>with Enterprise UX",
    mainImg: saasBanner,
    desc1:
      "The main objective of Enterprise UX is centered around increasing efficiency and productivity for all user groups within an organization. Hence, our approach to enterprise UX is focussed at streamlining complex processes and creating intuitive interfaces, to minimize cognitive load & reduce distractions. Our commitment to creating goal-oriented experiences help employees to work seamlessly with B2B SaaS applications, ",
    // keyword: "adaptable solutions",
    // desc2:
    //   " that comply with the existing standards and also empower users.",
    statsHead: "Look at what data says",
    stats1: "50%",
    stats1_desc:
      "of companies using multiple SaaS applications will centralize management in the next five years",
    stats2: "53%",
    stats2_desc:
      "of surveyed IT decision makers said ERP was an investment priority, in addition to CRM",
    stats3: "38%",
    stats3_desc:
      "of companies say that they are running almost completely on SaaS",
    stats4: "80%",
    stats4_desc: "of businesses plan to make all their systems SaaS by 2025",
    component_heading: "Enhancing user-software interaction for",
    components: [
      {
        id: 1,
        img: airtelProject,
        heading: "Airtel",
        desc: "Designing an enterprise-grade solution enabling support-employees to establish clear customer communications, that led to 125% increase in customer base.",
        link: "/projects/enterprise/airtel/",
      },
      {
        id: 2,
        img: crisilProject,
        heading: "Crisil",
        desc: "Recreating the portal of a 360 degree internal management tool, to enable employees in performing their tasks efficiently and seamlessly.",
        link: "javascript:void(0)",
      },
      {
        id: 3,
        img: prescintoProject,
        heading: "Prescinto",
        desc: "Empowering solar power plants by streamlining energy management with a customizable dashboard.",
        link: "/projects/energy/prescinto/",
      },
      {
        id: 4,
        img: posableProject,
        heading: "POSable",
        desc: "Crafting a completely digital POS system, allowing business owners to fully-track their sales remotely.",
        link: "/projects/retail/posable/",
      },
    ],
    testimonials: [
      {
        id: 1,
        img: airtelTestimonial,
        desc: "They have a very solid design team. The team came up with some interesting design angles with an insightful creative flow. Even though the work happened remotely, the desired output was delivered on time.",
        name: "Kartik Bhandari, ",
        position: "Product Manager, Airtel",
      },
    ],
    curated_large: [
      {
        id: 1,
        heading: "Blogs",
        text1: "Customer retention strategy for ",
        grad_text: "SaaS",
        // text2:"Experience for Fintech Platforms",
        span_text: "Read More",
        link: "/blogs/often-ignored-customer-retention-strategies-for-saas-companies/",
        // time:"3 mins read "
      },
      {
        id: 2,
        heading: "Blogs",
        text1: "Changing face of B2B design",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        time: "9 mins read",
        span_text: "Read More",
        link: "/blogs/the-changing-face-of-b2b-and-enterprise-designing/",
      },
      {
        id: 3,
        heading: "Blogs",
        text1: "UX design for improved RoI",
        time: "9 mins read",
        span_text: "Read More",
        link: "/blogs/benefits-of-ux-and-ui-design/",
      },
      {
        id: 4,
        heading: "Podcast",
        text1: "Decoding the need for enterprise UX",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        span_text: "Explore",
        link: "/podcast/decoding-the-need-for-enterprise-ux",
      },
    ],
  },
  energy: {
    metaTitle:
      "Onething Design: Streamlining Efficiency in the Energy Industry",
    metaDesc:
      "Onething Design helps energy companies optimize UX for maximum efficiency. Learn about their services, client success stories, and how they can help your business.",
    title: "Energy",
    heading: "Improving efficiency for a sustainable future",
    mainImg: enegryBanner,
    desc1:
      "The energy industry grapples with efficiency challenges spanning over various stages - production, storage, transmission and distribution. Recognising the critical role that digital transformation plays here, we extend our expertise across a diverse spectrum of services, from smart grid technology to battery management, mobility solutions, etc. By harnessing the power of strategic design coupled with a mindful approach, we are committed to taking functional optimization to its peak.",

    // keyword: "adaptable solutions",
    // desc2:
    //   " that comply with the existing standards and also empower users.",
    statsHead: `How do we optimize energy<br/> platforms to reduce efficiency losses?`,
    // stats1: "50%",
    stats1_desc:
      "Crafting intuitive and easy to understand systems to improve efficiency",
    // stats2: "53%%",
    stats2_desc: "Making systems modular and scalable to remove added costs",
    // stats3: "38%",
    stats3_desc:
      "Creating solutions that not only address immediate needs but also align with future's ever-evolving demands",
    // stats4: "80%",
    stats4_desc: "Embracing AI driven automation to take the industry forward",
    component_heading: "Simplifying energy management for",
    components: [
      {
        id: 1,
        img: statiqHomeThumbnail,
        heading: "Statiq",
        desc: "Bringing convenient and lightning quick EV charging to India with interactive and intuitive design.",
        link: "/projects/energy/statiq/",
      },
      {
        id: 2,
        img: prescintoProject,
        heading: "Prescinto",
        desc: "Empowering solar plants by streamlining energy management for solar plants with a customizable dashboard. ",
        link: "/projects/energy/prescinto/",
      },
      {
        id: 3,
        img: prescintoProject,
        heading: "Prescinto Web",
        desc: "Crafting a digital presence for Prescinto’s AI-powered platform to effectively communicate key business offerings.",
        link: "/projects/energy/prescinto-web/",
      },
    ],
    testimonials: [
      {
        id: 1,
        img: mmmTestimonial,
        desc: "We did a major chunk of the project in the lockdown period. Although we were apprehensive of the outcomes, Onething made sure that the project went smoothly. They have a unique outlook towards problem solving while meeting business objectives.",
        name: "Aparna Sharma, ",
        position: "Director, MyMoneyMantra",
      },
      {
        id: 2,
        img: rblTestimonial,
        desc: "The team was able to breakdown a large scale communication system into granular touchpoints and create a segment-wise approach to cover all channels of communications.",
        name: "Utkarsh Saxena, ",
        position: "Senior Vice President, RBL Bank Limited",
      },
      {
        id: 3,
        img: orixTestimonial,
        desc: "The team grasped the problem statement and delivered solutions through a thorough design process. They also helped us understand best practices in the industry to create an autonomous platform that would cater to the needs of our users.",
        name: "Vikas Saini, ",
        position: "Assistant Vice President, Orix",
      },
    ],
    curated_large: [
      {
        id: 1,
        heading: "Blogs",
        // text1:"Customer retention strategy for ",
        grad_text: "Sustainable",
        text2: "UX design ",
        span_text: "Read More",
        link: "/blogs/sustainable-ux-design/",
        // time:"3 mins read "
      },
      {
        id: 2,
        heading: "Case Study",
        text1: "Making way for sustainable intercity commute",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        // time:"9 mins read",
        span_text: "Read More",
        link: "/projects/automotive/nuego/",
      },
      {
        id: 3,
        heading: "Podcast",
        text1: "Sustainability through smarter battery systems",
        // time:"9 mins read",
        span_text: "Read More",
        link: "/podcast/driving-sustainability-through-smarter-battery-systems/",
      },
      {
        id: 4,
        heading: "Podcast",
        text1: "Biking in the EV revolution",
        // grad_text:"Customer Service",
        // text2:"Experience for Fintech Platforms",
        span_text: "Explore",
        link: "/podcast/biking-in-the-ev-revolution",
      },
    ],
  },
};
