import { ClientLogos } from "./ClientLogos";

export const ClientTestimonials = {
  CentralReach: {
    fullName: "Mike Impelluso",
    image: {
      url: "/ClientHeadshots/Mike-Impelluso.png",
      alt: "Mike's photo"
    },
    position: "VP Marketing",
    company: ClientLogos.CentralReach,
    caseStudy: { url: undefined },
    testimonial: "Videoweiser took our software walkthrough and made it sleek, professional, and easy to follow. Their motion graphics work gave our product the premium look we needed, and our audience loved it. A true expert in video editing!",
  },
  Cosine: {
    fullName: "Gus Ojeh",
    image: {
      url: "/ClientHeadshots/Gus-Ojeh.webp",
      alt: "Gus's photo"
    },
    position: "Founder",
    company: ClientLogos.Cosine,
    caseStudy: { url: undefined },
    testimonial: "The guys at Videoweiser treats our videos with so much attention to detail. That sense of ownership is not easy to come by. We are super grateful to have them as our number one video partners. I'd highly recommend them any time. Well done guys!",
  },
  MacSports: {
    fullName: "Michael Cruciotti",
    image: {
      url: "/ClientHeadshots/Michael-Cruciotti.png",
      alt: "Michael's photo"
    },
    position: "Founder",
    company: ClientLogos.MacSports,
    caseStudy: { url: undefined },
    testimonial: "We wanted a branding video that captured our mission and vision. Videoweiser edited the footage perfectly and also helped us craft a compelling narrative that resonated with our audience. A fantastic partner for video production!",
  },

  Petersons: {
    fullName: "Anamarija Tkalec",
    image: {
      url: "/ClientHeadshots/Anamarija-Tkalec.png",
      alt: "Anamarija's photo"
    },
    position: "Content Specialist",
    company: ClientLogos.Petersons,
    caseStudy: { url: undefined },
    testimonial: "Our medical education videos required precision, clarity, and a human touch. Videoweiser delivered exactly that high-quality visuals with an easy-to-understand flow. Their professionalism and creativity set them apart!",
  },
  Three60Cookware: {
    fullName: "Beth Hurley",
    image: {
      url: "/ClientHeadshots/Beth-Hurley.png",
      alt: "Beth's photo"
    },
    position: "Owner/CEO",
    company: ClientLogos.Three60Cookware,
    caseStudy: { url: undefined },
    testimonial: "Our internal process and safety videos have never looked better! Videoweiser delivered clear, visually engaging content that made our material more digestible for investors and employees. Their ability to simplify complex information is unmatched.",
  },

} as const
