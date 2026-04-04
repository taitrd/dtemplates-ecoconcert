import {
  Music,
  Mic2,
  Library,
  ShoppingCart,
  Monitor,
  Layout,
  Sunset,
  Info,
  Mail,
  HelpCircle,
  LifeBuoy,
  Ticket,
  Lock,
  ShieldCheck,
  FileText,
  Scale,
  Cookie,
  ShieldAlert,
} from "lucide-react";

export const NAV_CATEGORIES = [
  {
    title: "Discover",
    items: [
      {
        href: "/concerts",
        title: "Concerts",
        description: "Explore upcoming concerts and events around the world.",
        icon: Music,
      },
      {
        href: "/singers",
        title: "Singers",
        description: "Find tours and tickets for your favorite artists.",
        icon: Mic2,
      },
      {
        href: "/blogs",
        title: "Blogs",
        description:
          "Read the latest news, reviews, and stories from the music world.",
        icon: Library,
      },
      {
        href: "/cart",
        title: "Shopping Cart",
        description: "Review your selected tickets before checkout.",
        icon: ShoppingCart,
      },
      {
        href: "/",
        title: "Modern Home Page",
        description: "Home page with background video.",
        icon: Monitor,
      },
      {
        href: "/home-2",
        title: "Legacy Home Page",
        description: "Home page with toolbar",
        icon: Layout,
      },
      {
        href: "/home-3",
        title: "Immersive Home Page",
        description: "Home page with Sunset Hero.",
        icon: Sunset,
      },
    ],
  },
  {
    title: "Help & Info",
    items: [
      {
        href: "/about",
        title: "About Us",
        description:
          "Learn about our mission to make ticketing secure and simple.",
        icon: Info,
      },
      {
        href: "/contact",
        title: "Contact Us",
        description: "Get in touch with our customer support team.",
        icon: Mail,
      },
      {
        href: "/faqs",
        title: "FAQs",
        description: "Find answers to commonly asked questions.",
        icon: HelpCircle,
      },
      {
        href: "/support",
        title: "Support",
        description: "Need help? Explore our help center.",
        icon: LifeBuoy,
      },
      {
        href: "/concert-ticketing",
        title: "Concert Ticketing",
        description: "Information about our ticketing process and services.",
        icon: Ticket,
      },
      {
        href: "/reset-password",
        title: "Reset Password",
        description: "Need to change your password? Start here.",
        icon: Lock,
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        href: "/privacy",
        title: "Privacy Policy",
        description: "How we handle your data and privacy.",
        icon: ShieldCheck,
      },
      {
        href: "/terms",
        title: "Terms & Conditions",
        description: "Our general terms and conditions.",
        icon: FileText,
      },
      {
        href: "/terms-of-use",
        title: "Terms of Use",
        description: "Rules for using our platform.",
        icon: Scale,
      },
      {
        href: "/cookies",
        title: "Cookies Policy",
        description: "Information about our cookie usage.",
        icon: Cookie,
      },
      {
        href: "/acceptable-use",
        title: "Acceptable Use",
        description: "Guidelines on acceptable platform usage.",
        icon: ShieldAlert,
      },
    ],
  },
];
