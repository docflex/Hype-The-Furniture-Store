import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "about",
        url: "/about",
    },
    {
        id: 3,
        text: "products",
        url: "/products",
    },
];

export const services = [
    {
        id: 1,
        icon: <GiCompass />,
        title: "mission",
        text: "Since the very beginnging, it was our primary objective to provide goods that keeps our Carbon Footprint in mind. We spend 30% Less energy while manufacturing our products.",
    },
    {
        id: 2,
        icon: <GiDiamondHard />,
        title: "vision",
        text: "We want to reach Carbon Neutrality by using Vegan Leather, Recycling Materials and being Renewable Energy Compliant. We plan on achieving a negative carbon footprint on the planet by 2024.",
    },
    {
        id: 3,
        icon: <GiStabbedNote />,
        title: "history",
        text: 'We have a rich history of being the only remaining institution that still produces "Living-Art" the Old-Fashioned Way. We have 30 Years of heritage and expertise that makes us the best at what we do.',
    },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
