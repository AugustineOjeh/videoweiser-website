import localFont from "next/font/local";

export const gilroy = localFont({
    src: [
        { path: "../fonts/Gilroy-Bold.ttf", weight: "700", style: "normal" },
        { path: "../fonts/Gilroy-Medium.ttf", weight: "500", style: "normal" },
        { path: "../fonts/Gilroy-SemiBold.ttf", weight: "600", style: "normal" },
    ],
    variable: "--font-gilroy",
});
export const aeonik = localFont({
    src: [
        { path: "../fonts/Aeonik-Bold.ttf", weight: "700", style: "normal" },
        { path: "../fonts/Aeonik-Regular.ttf", weight: "500", style: "normal" },
    ],
    variable: "--font-aeonik",
});
