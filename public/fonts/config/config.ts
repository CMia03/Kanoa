import localfont from "next/font/local";
export const gilroyRegular = localfont({
  src: [
    {
      path: "../../materials/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../materials/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../materials/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-butler-regular",
});

export const gilroyBold = localfont({
  src: [
    {
      path: "../../materials/Gilroy-SemiBold.ttf",
      weight: "400",
    },
  ],
  variable: "--font-brandon-grotesque-thin",
});
