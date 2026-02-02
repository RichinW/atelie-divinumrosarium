"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { pt } from "@/data/i18n/pt";
import { useEffect, useState } from "react";

const dict = { pt };

export default function Home() {

  const [formEmail, setFormEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [locale, setLocale] = useState<"pt">("pt");
  const [isFading, setIsFading] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = dict[locale];
  const to = "richardwcamargo@gmail.com";
  const subject = encodeURIComponent(formEmail.subject);
  const body = encodeURIComponent(
    `Olá, meu nome é ${formEmail.name}.\nEmail: ${formEmail.email}\n\n${formEmail.message}\n\n(enviado pelo seu portfólio)`
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

  // function toggleLanguage() {
  //   setIsFading(true);

  //   setTimeout(() => {
  //     setLocale(locale === "pt" ? "en" : "pt");
  //     setIsFading(false);
  //   }, 200);
  // }

  return (
    <>
      <div className={`fixed z-100 top-0 px-20 transition-all left-0 w-screen h-20 flex justify-between font-playfair-display items-center duration-300
    ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
        <p className="text-white text-2xl">Divinum Rosarium</p>
        <div className="flex items-center gap-8 text-xl text-white">
          <a className="bg-transparent text-lg hover:bg-transparent font-medium px-3" href="#hero">{t.header[0]}</a>
          <a className="bg-transparent text-lg hover:bg-transparent font-medium px-3" href="#about">{t.header[1]}</a>
          <a className="bg-transparent text-lg hover:bg-transparent font-medium px-3" href="#case">{t.header[2]}</a>
          <a className="bg-transparent text-lg hover:bg-transparent font-medium px-3" href="#contact">{t.header[3]}</a>
          <a href="https://github.com/RichinW" className="border-2 bg-transparent hover:bg-[#111]/50 border-white/30 cursor-pointer p-2 flex items-center text-lg justify-center gap-2 rounded-md">
            <i className="fa-brands fa-github"></i>
            <p>{t.header[4]}</p>
          </a>
        </div>
      </div>
      <div className={`flex scroll-mt-20 min-h-screen  flex-col transition-all items-center justify-center font-playfair-display bg-[#111] overflow-x-hidden ${isFading ? "opacity-90 blur-in-2xl" : "opacity-100"
        }`}>
        <div id="hero" className="w-full px-20 h-screen relative justify-between flex items-center">
          <div className="max-w-2xl flex flex-col gap-5 z-10">
            <div className="flex flex-col w-full text-white">
              <p className="text-7xl">
                {t.hero.title1.start}{" "}
                <span className="text-[#F4C954]">
                  {t.hero.title1.highlight1}
                </span>
                <span>
                  {t.hero.title1.mid}
                </span>
                <span className="text-[#F4C954]">
                  {t.hero.title1.highlight2}
                </span>
                {t.hero.title1.end}
              </p>
            </div>
            <p className="text-xl text-white/80">{t.hero.description}</p>
            <div className="mt-4 flex items-center gap-4">
              <Button className="p-6 bg-[#F4C954] text-[#111] hover:bg-[#e4b841] text-lg">
                {t.hero.button1}
              </Button>
              <Button className="text-[#F4C954] text-lg bg-transparent">
                {t.hero.button2}
              </Button>
            </div>
            <div className="flex flex-col mt-20">
              <p className="text-white text-2xl">{t.hero.verse.text1}</p>
              <p className="text-white/60 font-light text-xl italic">{t.hero.verse.text2}</p>
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <div className="relative bg-[#111] p-2 -translate-y-60">
              <div className="absolute inset-0 bg-[#111]/50 z-0"></div>
              <img src="/image-hero-three.jpeg" className="size-96 object-cover rounded-md" alt="" />
            </div>
            <div className="relative bg-[#111] p-2 -translate-x-10 -translate-y-50">
              <div className="absolute inset-0 bg-[#111]/50 z-0"></div>
              <img src="/image-hero-one.jpeg" className="size-96 object-cover rounded-md" alt="" />
            </div>
            <div className="relative bg-[#111] p-2 -translate-x-60 translate-y-90">
              <div className="absolute inset-0 bg-[#111]/50 z-0"></div>
              <img src="/image-hero-two.jpeg" className="size-96 object-cover rounded-md" alt="" />
            </div>
          </div>
        </div>
        <div id="about" className="h-screen px-20 scroll-mt-20 flex justify-between items-center w-full relative">
          <div className="h-full relative">
            <div className="h-full bg-[#111111]/50 absolute inset-0 "></div>
            <img className="h-full" src="/anaelisa-about.jpeg" alt="" />
          </div>
          <div className="text-white text-right">
            <p className="text-7xl border-b-2 border-[#F4C954] inline-block p-2">
              {t.about.title}
            </p>
            <div className="max-w-xl text-xl text-white/80 flex flex-col gap-4 mt-8">
              {t.about.texts.map((text, index) => (
                <>
                  <p key={index} className="text-xl font-medium">{text.title.start}<span className="text-[#F4C954]">{text.title.highlight1}</span><span>{text.title.mid}</span><span className="text-[#F4C954]">{text.title.highlight2}</span><span>{text.title.end}</span></p>
                  <p key={index}>{text.text}</p>
                </>
              ))}
            </div>
          </div>
        </div>
        <div id="case" className="h-screen pl-20 scroll-mt-20 flex justify-center items-center w-full">
          <div className="w-1/2 h-full flex flex-col justify-center gap-20">
            <p className="font-black text-white text-8xl">CATÁLOGO</p>
            <div className="flex flex-col text-4xl text-white font-light">
              <p>ARTESANAL</p>
              <p>ÚNICO</p>
              <p>PRODUTOS</p>
              <p>QUALIDADE</p>
            </div>
            <p className="text-white mt-5 font-light italic border-t-2 border-white w-fit text-2xl">DIVINUM ROSARIUM</p>
            <div className="flex flex-col mt-5 text-white text-xl">
              <p>Orai sem cessar.</p>
              <p className="italic text-white/80 font-light">1 Tessalonicenses 5,17</p>
            </div>
          </div>
          <div className="w-1/2 h-full relative">
            <div className="absolute inset-0 bg-[#111]/50 z-10"></div>
            <img src="/catalog-image.jpeg" className="bg-[#111]/50 blur-[3px]" alt="" />
          </div>
        </div>
        <div className="h-screen flex flex-col px-32 py-20 gap-20 justify-center items-center w-full bg-[#111] relative">
        </div>
        <div id="contact" className="flex scroll-mt-20 h-screen px-32 overflow-hidden py-20 gap-20 justify-between items-start w-full bg-[#111] relative">
          <div className="flex flex-col gap-10">

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-full bg-[#F4C954]"></div>
                <p className="text-white text-lg">Contato</p>
              </div>
              <p className="text-white text-4xl">Entre em <span className="italic">contato</span></p>
              <p className="text-white/40">Entre em contato para tirar suas dúvidas ou conversar diretamente comigo sobre os terços.</p>
            </div>
          </div>
          <div className="w-2/3 h-full rounded-lg py-8 px-12 flex flex-col gap-4">
            <div className="flex gap-4">
              <Input
                className="outline-none rounded-sm h-12 border-2 focus-visible:ring-offset-0 focus-visible:ring-0 border-white/20 p-4 text-white text-lg placeholder:text-lg"
                placeholder={t.contact.form.inputs[0]}
                value={formEmail.name}
                onChange={(e) => setFormEmail(prev => ({ ...prev, name: e.target.value }))}
              />
              <Input
                className="outline-none rounded-sm h-12 border-2 focus-visible:ring-offset-0 focus-visible:ring-0 border-white/20 p-4 text-white text-lg placeholder:text-lg"
                placeholder={t.contact.form.inputs[1]}
                value={formEmail.email}
                onChange={(e) => setFormEmail(prev => ({ ...prev, email: e.target.value }))}
                type="email"
              />
            </div>
            <Input
              className="outline-none rounded-sm h-12 border-2 focus-visible:ring-offset-0 focus-visible:ring-0 border-white/20 p-4 text-white text-lg placeholder:text-lg"
              placeholder={t.contact.form.inputs[2]}
              value={formEmail.subject}
              onChange={(e) => setFormEmail(prev => ({ ...prev, subject: e.target.value }))}
            />
            <Textarea
              className="outline-none rounded-sm h-full border-2 focus-visible:ring-offset-0 focus-visible:ring-0 border-white/20 p-4 text-white text-lg placeholder:text-lg"
              placeholder={t.contact.form.inputs[3]}
              value={formEmail.message}
              onChange={(e) => setFormEmail(prev => ({ ...prev, message: e.target.value }))}
            ></Textarea>
            <a href={`mailto:${to}?subject=${subject}&body=${body}`} className="bg-[#F4C954] flex justify-center w-64 items-center p-3 transition-colors hover:bg-[#e4b841] text-[#111] rounded-sm h-12">
              {t.contact.form.button}
            </a>
            <div className="flex flex-row gap-8 mt-10">
              <div className="flex justify-start items-start gap-3">
                <div className="size-16 flex justify-center items-center border-2 border-white/20 rounded-md shadow-md">
                  <i className="fa-regular fa-envelope text-[#6983F7] text-3xl"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 text-lg">{t.contact.contact_info.infos[0]}</p>
                  <p className="text-white/80 text-lg">
                    anaelisa@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="size-16 flex justify-center items-center border-2 border-white/20 rounded-md shadow-md">
                  <i className="fa-solid fa-phone text-[#6983F7] text-3xl"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 text-lg">{t.contact.contact_info.infos[1]}</p>
                  <p className="text-white/80 text-lg">atelie.divinumrosarium</p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="size-16 flex justify-center items-center border-2 border-white/20 rounded-md shadow-md">
                  <i className="fa-solid fa-phone text-[#6983F7] text-3xl"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 text-lg">{t.contact.contact_info.infos[1]}</p>
                  <p className="text-white/80 text-lg">+55 (14) 99646-3458</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
