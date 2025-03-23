import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { ThemeToggle } from "../../components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Doctor", href: "#" },
    { label: "Patient", href: "#" },
    { label: "Lab portal", href: "#" },
    { label: "About us", href: "#" },
    { label: "Login", href: "/login" },
  ];

  // User role cards data
  const roleCards = [
    {
      title: "Patient",
      imageSrc: "/ellipse-42.png",
      imageAlt: "Patient icon",
    },
    {
      title: "Lab Portal",
      imageSrc: "/ellipse-43.png",
      imageAlt: "Lab Portal icon",
    },
    {
      title: "Doctor",
      imageSrc: "/ellipse-43-1.png",
      imageAlt: "Doctor icon",
    },
  ];

  // Feature sections data
  const featureSections = [
    {
      title: "Keeping your health records secure and accessible, always.",
      description:
        "Your health data is safeguarded with advanced encryption, multi-layer security, and privacy-first measures, ensuring complete protection and peace of mind.",
      label: "Secure & Confidential",
      iconSrc: "/security-shield-9017172-1.png",
      imageSrc: "/rectangle-129.png",
      imagePosition: "left",
    },
    {
      title: "Access Your Health Records Instantly, With One Click",
      description:
        "Get all your medical records, prescriptions, and doctor notes in one click—fast, secure, and always available.",
      label: "Quick & Effortless",
      iconSrc: "/user-interface-8150620-1.png",
      imageSrc: "/rectangle-130.png",
      imagePosition: "right",
    },
    {
      title: "E-prescriptions: Fast, paperless, and hassle-free!",
      description:
        "Access, manage, and refill your prescriptions online with ease—no paperwork, no hassle.",
      label: "Fast & Convenient",
      iconSrc: "/user-interface-8150620-1-1.png",
      imageSrc: "/rectangle-131.png",
      imagePosition: "left",
    },
    {
      title: "Instant patient history—just one click away!",
      description:
        "Instantly view your medical records, treatments, and prescriptions with a personalized ID.",
      label: "Effortless & Reliable",
      iconSrc: "/user-interface-8150620-1-2.png",
      imageSrc: "/rectangle-132.png",
      imagePosition: "right",
    },
  ];

  // Footer links
  const quickLinks = ["Contact Us", "Privacy Policy", "Terms & Conditions"];

  // Social media icons
  const socialIcons = [
    { src: "/mask-group.png", alt: "Facebook" },
    { src: "/vector.svg", alt: "Twitter" },
    { src: "/vector-1.svg", alt: "Instagram" },
    { src: "/mask-group-1.png", alt: "YouTube" },
  ];

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-row justify-center w-full">
      <div className="bg-white dark:bg-gray-900 overflow-hidden w-full max-w-[1440px] relative">
        {/* Header and Navigation */}
        <header className="relative w-full h-auto md:h-[138px] bg-white dark:bg-gray-800 rounded-[20px] shadow-[4px_8px_4px_#00000040] z-10 px-4 md:px-0">
          <img
            className="w-[200px] md:w-[369px] h-auto md:h-[250px] object-contain mx-auto md:mx-0 md:-top-14 md:left-0"
            alt="HealthSafe Logo"
            src="/whatsapp-image-2025-03-03-at-19-24-30-0ccf92f8-removebg-preview-.png"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute top-4 right-4 p-2 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* Navigation Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:top-[101px] right-0 md:right-[76px] w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out`}
          >
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.href);
                      }}
                      className="font-normal text-black dark:text-white text-xl md:text-2xl tracking-[0] leading-[normal] block"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <ThemeToggle />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative w-full min-h-[500px] md:h-[700px] mt-[69px] bg-[#e2f4db] dark:bg-gray-800 px-4 md:px-0">
          <div className="md:absolute w-full md:w-[728px] py-12 md:py-0 md:top-[166px] md:left-[88px]">
            <h1 className="font-semibold text-black dark:text-white text-4xl md:text-[64px] tracking-[0] leading-[1.2]">
              Your Health Records, Simplified &amp; Secure.
            </h1>
            <p className="mt-6 font-normal text-black dark:text-gray-300 text-xl md:text-2xl tracking-[0] leading-[normal]">
              Access all your medical documents in one place anytime, anywhere.
              Stay organized, stay healthy.
            </p>
            <Button
              onClick={handleGetStarted}
              className="mt-10 w-full md:w-[299px] h-[54px] bg-[#1b4261] dark:bg-blue-600 rounded-[20px] text-white font-semibold text-xl md:text-2xl"
            >
              Let&apos;s Get Started!
            </Button>
          </div>

          <img
            className="w-full md:w-[589px] h-auto md:h-[394px] mt-8 md:mt-0 md:absolute md:top-[109px] md:left-[803px] object-cover"
            alt="Medical professional using computer"
            src="/rectangle-123.png"
          />
        </section>

        {/* Role Cards Section */}
        <section className="flex flex-col md:flex-row justify-center gap-8 mt-16 px-4 md:px-0">
          {roleCards.map((card, index) => (
            <Card
              key={index}
              className="w-full md:w-96 h-[276px] rounded-[40px] shadow-[8px_4px_4px_#00000040] dark:bg-gray-800"
            >
              <CardContent className="flex flex-col items-center justify-center pt-12 pb-8 w-full h-full">
                <img
                  className="w-[73px] h-[73px] object-cover mb-6"
                  alt={card.imageAlt}
                  src={card.imageSrc}
                />
                <Button
                  onClick={() => navigate("/login")}
                  className="w-[232px] h-[65px] bg-[#1b4261] dark:bg-blue-600 rounded-[20px] font-semibold text-white text-2xl md:text-3xl"
                >
                  {card.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Feature Sections */}
        {featureSections.map((feature, index) => (
          <section
            key={index}
            className={`flex flex-col md:flex-row items-center mt-16 px-4 md:px-0 ${
              feature.imagePosition === "right"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`flex-1 ${
                feature.imagePosition === "right" ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <h2 className="font-semibold text-black dark:text-white text-3xl md:text-5xl tracking-[0] leading-[normal] mb-8">
                {feature.title}
              </h2>
              <p className="font-normal text-black dark:text-gray-300 text-2xl md:text-4xl tracking-[0] leading-[normal] mb-8">
                {feature.description}
              </p>
              <div className="flex items-center">
                <span className="font-medium text-black dark:text-white text-2xl md:text-4xl tracking-[0] leading-[normal]">
                  {feature.label}
                </span>
                <div className="ml-4 w-[66px] h-[66px] bg-[#e2f4db] dark:bg-gray-700 rounded-[33px] flex items-center justify-center">
                  <img
                    className="w-[45px] h-[45px] object-cover"
                    alt="Feature icon"
                    src={feature.iconSrc}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <img
                className="w-full md:w-[549px] h-auto md:h-[523px] object-cover"
                alt="Feature illustration"
                src={feature.imageSrc}
              />
            </div>
          </section>
        ))}

        {/* Footer */}
        <footer className="w-full min-h-[358px] mt-16 bg-[#e2f4db] dark:bg-gray-800 flex flex-col md:flex-row px-4 md:px-0">
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <img
              className="w-[300px] md:w-[500px] h-auto md:h-[339px] object-contain"
              alt="HealthSafe Logo"
              src="/img-20250303-wa0090--1--removebg-preview-2.png"
            />
          </div>

          <div className="flex-1 pt-[30px] md:pt-[59px]">
            <h3 className="font-semibold text-[#1b4261] dark:text-white text-2xl leading-[63.4px]">
              Quick Links
            </h3>
            <ul className="font-semibold text-black dark:text-gray-300 text-2xl leading-[63.4px]">
              {quickLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          <div className="flex-1 pt-[30px] md:pt-[117px]">
            <h3 className="font-semibold text-[#1b4261] dark:text-white text-2xl leading-[63.4px]">
              Contact With Us
            </h3>
            <div className="flex items-center mt-2">
              <img
                className="w-[25px] h-[29px]"
                alt="Mail icon"
                src="/mail.png"
              />
              <span className="ml-2 font-semibold text-black dark:text-gray-300 text-xl leading-[52.8px]">
                Support@healthsafe.in
              </span>
            </div>
          </div>

          <div className="flex-1 pt-[30px] md:pt-[104px] pr-0 md:pr-8">
            <h3 className="font-semibold text-[#1b4261] dark:text-white text-2xl leading-[70.6px]">
              Follow us
            </h3>
            <div className="flex gap-4 mt-2">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  className="w-[39px] h-[38px]"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};