import localfont from "next/font/local"

export const gilroy = localfont({
  src : [
    {
      path : "../materials/Gilroy-Bold.ttf",
      style : "normal",
      weight : "700"
    },
    {
      path : "../materials/Gilroy-SemiBold.ttf",
      style : "normal",
      weight : "600"
    },
    {
      path : "../materials/Gilroy-Medium.ttf",
      style : "normal",
      weight : "500"
    },
    {
      path : "../materials/Gilroy-Regular.ttf",
      style : "normal",
      weight : "400"
    },
  ]
})