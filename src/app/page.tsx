"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { pt } from "@/data/i18n/pt";
import { useEffect, useState } from "react";

const dict = { pt };

export default function Home() {
  const [formProduct, setFormProduct] = useState({
    pedra_de_dezena: "",
    pedra_dos_misterios: "",
    entremio: "",
    crucifixo: "",
    fio: "",
  });
  const [formEmail, setFormEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [locale, setLocale] = useState<"pt">("pt");
  const [isFading, setIsFading] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = dict[locale];
  const to = "richardwcamargo@gmail.com";
  const subject = encodeURIComponent(formEmail.subject);
  const body = encodeURIComponent(
    `Olá, meu nome é ${formEmail.name}.\nEmail: ${formEmail.email}\n\n${formEmail.message}\n\n(enviado pelo site)`,
  );

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const keyMap = {
    "Pedra de dezena": "pedra_de_dezena",
    "Pedra dos mistérios": "pedra_dos_misterios",
    Entremeio: "entremio",
    Crucifixo: "crucifixo",
    Fio: "fio",
  } as const;

  type FormProductKey = keyof typeof formProduct;
  type OptionName = keyof typeof keyMap;

  // function toggleLanguage() {
  //   setIsFading(true);

  //   setTimeout(() => {
  //     setLocale(locale === "pt" ? "en" : "pt");
  //     setIsFading(false);
  //   }, 200);
  // }

  return (
    <>
      <div
        className={`fixed z-100 top-0 px-20 transition-all hidden left-0 w-screen h-20 lg:flex justify-between bg-[#111]/30 font-playfair-display items-center duration-300
    ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        <p className="text-white text-2xl">Divinum Rosarium</p>
        <div className="flex items-center gap-8 text-xl text-white">
          <a
            className="bg-transparent text-lg hover:bg-transparent font-medium px-3"
            href="#hero"
          >
            {t.header[0]}
          </a>
          <a
            className="bg-transparent text-lg hover:bg-transparent font-medium px-3"
            href="#about"
          >
            {t.header[1]}
          </a>
          <a
            className="bg-transparent text-lg hover:bg-transparent font-medium px-3"
            href="#catalog"
          >
            {t.header[2]}
          </a>
          <a
            className="bg-transparent text-lg hover:bg-transparent font-medium px-3"
            href="#contact"
          >
            {t.header[3]}
          </a>
          <a
            href="https://github.com/RichinW"
            className="border-2 bg-transparent transition-colors hover:bg-[#111]/20 border-white/30 cursor-pointer p-2 flex items-center text-lg justify-center gap-2 rounded-md"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            <p>{t.header[4]}</p>
          </a>
        </div>
      </div>
      <div
        className={`flex scroll-mt-20 min-h-screen  flex-col transition-all items-center justify-center font-playfair-display bg-[#111] overflow-x-hidden ${
          isFading ? "opacity-90 blur-in-2xl" : "opacity-100"
        }`}
      >
        <div
          id="hero"
          className="w-full lg:px-20 px-6 h-screen relative justify-between flex items-center"
        >
          <div className="lg:max-w-2xl max-w-64 flex flex-col gap-5 z-10">
            <div className="flex flex-col w-full text-white">
              <p className="lg:text-7xl text-3xl">
                {t.hero.title1.start}{" "}
                <span className="text-[#F4C954]">
                  {t.hero.title1.highlight1}
                </span>
                <span>{t.hero.title1.mid}</span>
                <span className="text-[#F4C954]">
                  {t.hero.title1.highlight2}
                </span>
                {t.hero.title1.end}
              </p>
            </div>
            <p className="lg:text-xl text-base text-white/80">
              {t.hero.description}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#catalog"
                className="lg:py-3 lg:px-5 py-2 px-3 rounded-md transition-colors bg-[#F4C954] text-[#111] hover:bg-[#e4b841] lg:text-lg"
              >
                {t.hero.button1}
              </a>
              <Button className="text-[#F4C954] lg:text-lg text-base bg-transparent hover:bg-transparent gap-1 cursor-pointer">
                <FontAwesomeIcon icon={faWhatsapp} className="lg:text-2xl text-lg" />
                {t.hero.button2}
              </Button>
            </div>
            <div className="flex flex-col mt-20">
              <p className="text-white lg:text-2xl text-base">
                {t.hero.verse.text1}
              </p>
              <p className="text-white/60 font-light text-sm lg:text-xl italic">
                {t.hero.verse.text2}
              </p>
            </div>
          </div>
          <div className="lg:flex hidden flex-col-reverse">
            <div className="relative bg-[#111] p-2 -translate-y-60">
              <div className="absolute inset-0 bg-[#111]/50 z-0"></div>
              <img
                src="/image-hero-three.jpeg"
                className="size-96 object-cover rounded-md"
                alt=""
              />
            </div>
            <div className="relative bg-[#111] p-2 -translate-x-10 -translate-y-50">
              <div className="absolute inset-0 bg-[#111]/50 z-0"></div>
              <img
                src="/image-hero-one.jpeg"
                className="size-96 object-cover rounded-md"
                alt=""
              />
            </div>
            <div className="relative bg-[#111] p-2 -translate-x-60 translate-y-90">
              <div className="absolute inset-0 bg-[#111]/50 z-0"></div>
              <img
                src="/image-hero-two.jpeg"
                className="size-96 object-cover rounded-md"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="about"
          className="h-screen lg:px-20 px-6 scroll-mt-20 flex justify-between items-center w-full relative"
        >
          <div className="h-full relative hidden lg:block">
            <div className="h-full bg-[#111111]/50 absolute inset-0 "></div>
            <img className="h-full" src="/anaelisa-about.jpeg" alt="" />
          </div>
          <div className="text-white text-right">
            <p className="lg:text-7xl text-4xl border-b-2 border-[#F4C954] inline-block p-2">
              {t.about.title}
            </p>
            <div className="max-w-xl lg:text-xl text-base text-white/80 flex flex-col lg:gap-4 gap-2 mt-4 lg:mt-8">
              {t.about.texts.map((text, index) => (
                <div key={index}>
                  <p className="lg:text-xl text-base font-medium">
                    {text.title.start}
                    <span className="text-[#F4C954]">
                      {text.title.highlight1}
                    </span>
                    <span>{text.title.mid}</span>
                    <span className="text-[#F4C954]">
                      {text.title.highlight2}
                    </span>
                    <span>{text.title.end}</span>
                  </p>
                  <p className="lg:text-base text-sm" key={index}>{text.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="catalog"
          className="h-screen lg:pl-20 scroll-mt-20 flex justify-center items-center w-full"
        >
          <div className="lg:w-1/2 w-full px-6 h-full flex flex-col justify-center lg:gap-20 gap-15">
            <p className="font-black text-white text-5xl lg:text-8xl">
              {t.catalog.title}
            </p>
            <div className="flex flex-col text-2xl lg:text-4xl text-white font-light">
              {t.catalog.attributes.map((attribute, index) => (
                <p key={index}>{attribute}</p>
              ))}
            </div>
            <p className="text-white lg:mt-5 mt-2 font-light italic border-t-2 border-white w-fit lg:text-2xl text-lg">
              DIVINUM ROSARIUM
            </p>
            <div className="flex flex-col lg:mt-5 mt-2 text-white lg:text-xl text-base">
              <p>{t.catalog.verse.text1}</p>
              <p className="italic text-white/80 font-light lg:text-base text-sm">
                {t.catalog.verse.text2}
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full hidden lg:block relative">
            <div className="absolute inset-0 bg-[#111]/50 z-10"></div>
            <img
              src="/catalog-image.jpeg"
              className="blur-[3px]"
              alt="Imagem Catálogo"
            />
          </div>
        </div>
        <div className="lg:h-screen h-auto flex lg:flex-row flex-col lg:px-20 px-6 lg:py-20 py-10 lg:gap-20 gap-10 justify-center lg:items-center items-start w-full bg-[#111] relative">
          <div className="lg:w-1/2 w-full h-full flex-col flex justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="text-white lg:text-6xl text-3xl">
                  {t.product.title1.start}
                  <span className="text-[#F4C954]">
                    {t.product.title1.highlight1}
                  </span>
                  {t.product.title1.mid}
                  <span className="text-[#F4C954]">
                    {t.product.title1.highlight2}
                  </span>
                  {t.product.title1.end}
                </p>
                <p className="text-white lg:text-6xl text-3xl">
                  {t.product.title2.start}
                  <span className="text-[#F4C954]">
                    {t.product.title2.highlight}
                  </span>
                  {t.product.title2.end}
                </p>
              </div>
              <p className="text-white/80 lg:text-lg text-base">
                {t.product.description}
              </p>
            </div>
            <div className="w-full hidden lg:h-80 border-2 gap-1 relative lg:p-5 p-3 lg:flex flex-col border-white/40 rounded-md">
              <p className="text-white lg:text-2xl text-lg mb-4">
                Olá! Gostaria de encomendar um terço com as seguintes escolhas:
              </p>
              <p className="text-white/80 lg:text-xl text-base">
                Pedra de dezena: {formProduct.pedra_de_dezena}
              </p>
              <p className="text-white/80 lg:text-xl text-base">
                Pedra dos mistérios: {formProduct.pedra_dos_misterios}
              </p>
              <p className="text-white/80 lg:text-xl text-base">
                Entremeio: {formProduct.entremio}
              </p>
              <p className="text-white/80 lg:text-xl text-base">
                Crucifixo: {formProduct.crucifixo}
              </p>
              <p className="text-white/80 lg:text-xl text-base">
                Fio: {formProduct.fio}
              </p>
              <p className="text-white lg:text-xl text-base">
                Agradeço a atenção!
              </p>
              <a
                className="absolute bottom-4 right-4 lg:w-36 lg:h-12 w-28 h-10 bg-[#F4C954] rounded-md flex items-center justify-center text-[#111] lg:text-lg text-sm hover:bg-[#e4b841]"
                href=""
              >
                Encomendar
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-full flex-col">
            {t.product.options.map((option, index) => (
              <div key={index} className="flex flex-col gap-2 mb-6">
                <p className="text-white lg:text-2xl text-lg">{option.name}</p>
                <p className="text-white/80 lg:text-lg text-base">
                  {option.description}
                </p>
                <div className="flex gap-4">
                  {option.choices.map((choice, cIndex) => {
                    const key = keyMap[option.name as OptionName];
                    return (
                      <div
                        onClick={() => {
                          setFormProduct((prev) => ({
                            ...prev,
                            [key]: choice,
                          }));
                          console.log(formProduct[key]);
                          console.log(choice);
                        }}
                        key={cIndex}
                        className={`px-2 lg:px-4 py-1 lg:py-2 border-2 transition-colors rounded-md text-white lg:text-base text-sm cursor-pointer hover:border-[#F4C954] ${formProduct[key] === choice ? "border-[#F4C954]" : "border-white/30"}`}
                      >
                        {choice}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <a
              className="w-28 md:hidden h-10 bg-[#F4C954] rounded-md flex items-center justify-center text-[#111] lg:text-lg text-sm hover:bg-[#e4b841]"
              href=""
            >
              Encomendar
            </a>
          </div>
        </div>
        <div
          id="contact"
          className="flex scroll-mt-20 lg:h-screen h-auto lg:flex-row flex-col lg:px-20 px-6 overflow-hidden lg:py-20 py-10 lg:gap-20 gap-5 justify-between items-start w-full bg-[#111] relative"
        >
          <div className="flex lg:w-1/3 w-full flex-col lg:gap-10">
            <div className="flex flex-col lg:gap-4 gap-2">
              <div className="flex items-center lg:gap-2 gap-1">
                <div className="lg:size-5 size-2 rounded-full bg-[#F4C954]"></div>
                <p className="text-white lg:text-lg text-base">{t.contact.title1}</p>
              </div>
              <p className="text-white lg:text-4xl text-3xl">
                {t.contact.title2.start}
                <span className="italic">{t.contact.title2.highlight}</span>
              </p>
              <p className="text-white/40 lg:text-base text-sm">{t.contact.description}</p>
            </div>
          </div>
          <div className="lg:w-2/3 w-full h-full rounded-lg lg:py-8 py-4 lg:px-12 flex flex-col gap-4">
            <div className="flex gap-4">
              <Input
              className="outline-none rounded-sm h-12 border-2 focus-visible:ring-offset-0 focus-visible:ring-0 border-white/20 lg:p-4 p-2 text-white lg:text-lg text-base lg:placeholder:text-lg placeholder:text-base"
                placeholder={t.contact.form.inputs[0]}
                value={formEmail.name}
                onChange={(e) =>
                  setFormEmail((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <Input
              className="outline-none rounded-sm h-12 border-2 focus-visible:ring-offset-0 focus-visible:ring-0 border-white/20 lg:p-4 p-2 text-white lg:text-lg text-base lg:placeholder:text-lg placeholder:text-base"
                placeholder={t.contact.form.inputs[1]}
                value={formEmail.email}
                onChange={(e) =>
                  setFormEmail((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
              />
            </div>
            <Input
              className="outline-none rounded-sm h-12 border-2 focus-visible:ring-offset-0 focus-visible:ring-0 border-white/20 lg:p-4 p-2 text-white lg:text-lg text-base lg:placeholder:text-lg placeholder:text-base"
              placeholder={t.contact.form.inputs[2]}
              value={formEmail.subject}
              onChange={(e) =>
                setFormEmail((prev) => ({ ...prev, subject: e.target.value }))
              }
            />
            <Textarea
              className="outline-none rounded-sm h-full border-2 focus-visible:ring-offset-0 focus-visible:ring-0 border-white/20 lg:p-4 p-2 text-white lg:text-lg text-base lg:placeholder:text-lg placeholder:text-base "
              placeholder={t.contact.form.inputs[3]}
              value={formEmail.message}
              onChange={(e) =>
                setFormEmail((prev) => ({ ...prev, message: e.target.value }))
              }
            ></Textarea>
            <a
              href={`mailto:${to}?subject=${subject}&body=${body}`}
              className="bg-[#F4C954] flex justify-center w-full lg:w-64 items-center p-3 transition-colors hover:bg-[#e4b841] text-[#111] rounded-sm h-12"
            >
              {t.contact.form.button}
            </a>
            <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 mt-10">
              <div className="flex justify-start items-start gap-3">
                <div className="lg:size-16 size-12 flex justify-center items-center border-2 border-white/20 rounded-md shadow-md">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="lg:text-3xl text-xl text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 lg:text-lg text-base">{t.contact.infos[0]}</p>
                  <p className="text-white/80 lg:text-lg text-sm">anaelisa@gmail.com</p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="lg:size-16 size-12 flex justify-center items-center border-2 border-white/20 rounded-md shadow-md">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="lg:text-3xl text-xl text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 lg:text-lg text-base">{t.contact.infos[1]}</p>
                  <p className="text-white/80 lg:text-lg text-sm">
                    atelie.divinumrosarium
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="lg:size-16 size-12 flex justify-center items-center border-2 border-white/20 rounded-md shadow-md">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="lg:text-3xl text-xl text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 lg:text-lg text-base">{t.contact.infos[2]}</p>
                  <p className="text-white/80 lg:text-lg text-sm">+55 (14) 99646-3458</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
