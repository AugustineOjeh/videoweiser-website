export const GridBlockLocations = [
    { row: 1, col: 3, width: 2, height: 1, opacity: 15 as const },
    { row: 7, col: 2, width: 1, height: 1, opacity: 15 as const },
    { row: 5, col: 9, width: 2, height: 1, opacity: 15 as const },
    { row: 6, col: 9, width: 1, height: 1, opacity: 15 as const },
    { row: 1, col: 12, width: 3, height: 1, opacity: 15 as const },
    { row: 8, col: 5, width: 2, height: 1, opacity: 15 as const },
    { row: 7, col: 15, width: 1, height: 2, opacity: 15 as const },
    { row: 7, col: 14, width: 1, height: 1, opacity: 15 as const },
]

export const VideoweiserProjects = {
    MadFit: {
        url: "https://youtube.com/shorts/xFiTDvJxV-M?si=tfqn84jsOfjfpJQD",
        orientation: "protrait",
        aspectRatio: 9 / 16
    },
    GritKoa: {
        url: "https://youtube.com/shorts/Q6_xKMv-ySs?si=dWL8syQUMHXJPLlk",
        orientation: "protrait",
        aspectRatio: 9 / 16
    },
    Siemens: {
        url: "https://youtu.be/jh5U5BnpGN8?si=_HZTS2rf9qk9IYdb",
        orientation: "landscape",
        aspectRatio: 16 / 9
    },
    Coviant: {
        url: "https://youtu.be/_pUBz83-doA?si=A3CdVDOWFLQ_9Zi0",
        orientation: "landscape",
        aspectRatio: 16 / 9
    },
    NextGenOffice: {
        url: "https://youtu.be/R1FJXoT-I0c?si=lgdSdGqjrTH9a9fe",
        orientation: "landscape",
        aspectRatio: 16 / 9
    },
    NextGenAmbientAssist: {
        url: "https://youtube.com/shorts/WDRpdPZemTE?si=mLBSG1MRCBHBcpff",
        orientation: "portrait",
        aspectRatio: 9 / 16
    },
} as const;

export const ClientLogos = {
    Eleos: {
        alt: "Eleos Health Logo",
        light: "/ClientLogos/eleos-logo-light.png",
        dark: "/ClientLogos/eleos-logo-dark.png",
    },
    Headway: {
        alt: "Headway Mental Health Logo",
        light: "/ClientLogos/headway-logo-light.webp",
        dark: undefined,
    },
    Valera: {
        alt: "Valera Health Logo",
        light: "/ClientLogos/valera-logo-light.svg",
        dark: "/ClientLogos/valera-logo-dark.svg",
    },
    SimplePractice: {
        alt: "Simple Practice Logo",
        light: "/ClientLogos/simple-practice-logo-light.png",
        dark: undefined,
    },
    BeckmanCoulter: {
        alt: "Beckman Coulter Logo",
        light: "/ClientLogos/beckman-coulter-logo-light.png",
        dark: "/ClientLogos/beckman-coulter-logo-dark.png",
    },
    ABSKids: {
        alt: "ABS Kids Logo",
        light: "/ClientLogos/abs-kids-logo-light.svg",
        dark: undefined,
    },
    PsychInsight: {
        alt: "Psych Insight Logo",
        light: "/ClientLogos/psych-insight-logo-light.webp",
        dark: undefined,
    },
    BioRad: {
        alt: "Bio Radiation Logo",
        light: undefined,
        dark: "/ClientLogos/bio-rad-logo-light.png",
    },
    CentralReach: {
        alt: "Central Reach Logo",
        light: "/ClientLogos/central-reach-logo-light.webp",
        dark: undefined,
    },
    ButterflyEffect: {
        alt: "Butterfly Effect Logo",
        light: "/ClientLogos/butterfly-effect-logo-light.webp",
        dark: undefined,
    },
    Talkspace: {
        alt: "Talkspace Logo",
        light: "/ClientLogos/talkspace-logo-light.webp",
        dark: undefined,
    },
    Bruker: {
        alt: "Bruker Logo",
        light: "/ClientLogos/bruker-logo-light.png",
        dark: undefined,
    },
    TherapyNotes: {
        alt: "Therapy Notes Logo",
        light: "/ClientLogos/therapy-note-logo-light.webp",
        dark: undefined,
    },
} as const
