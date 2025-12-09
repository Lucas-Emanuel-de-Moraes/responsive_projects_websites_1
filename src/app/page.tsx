'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import HomeImage from "@/assets/home-img.png"
import DeliveryImage from "@/assets/delivery-img.png"
import AboutImage from "@/assets/about-img.png"
import GalleryImg1 from "@/assets/gallery-img-1.png"
import GalleryImg2 from "@/assets/gallery-img-2.png"
import GalleryImg3 from "@/assets/gallery-img-3.png"
import GalleryImg4 from "@/assets/gallery-img-4.png"
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [menu, setMenu] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [showScrollUp, setShowScrollUp] = useState<boolean>(false)
  const [activeLink, setActiveLink] = useState<string>("")
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]")
    const handleScroll = () => setIsScrolled(window.scrollY >= 50)
    const handleScrollUp = () => setShowScrollUp(window.scrollY >= 350)
    const scrollActive = () => {
      sections.forEach((current) => {
        if (window.scrollY > (current.offsetTop - 58) && window.scrollY <= (current.offsetTop - 58) + current.offsetHeight) {
          setActiveLink(current.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollUp);
    window.addEventListener("scroll", scrollActive)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollUp);
      window.removeEventListener("scroll", scrollActive);
    }
  }, [])

  useEffect(() => {
    const handleTheme = () => document.body.classList[darkTheme ? "add" : "remove"]("dark-theme")
    return () => handleTheme()
  }, [darkTheme])

  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default({ origin: 'top', distance: '60px', duration: 2000 })
      sr.reveal(".home__content", { origin: "bottom" })
      sr.reveal(".home__info", { origin: "bottom", delay: 800 })
      sr.reveal(".home__data", { delay: 1400 })
      sr.reveal(".home__button", { origin: "left", delay: 1800 })
      sr.reveal(".delivery__data", { origin: "right" })
      sr.reveal(".delivery__content", { origin: "left", delay: 600 })
      sr.reveal(".delivery__img", { delay: 1200 })
      sr.reveal(".about__data, .contact__map", { origin: "left" })
      sr.reveal(".about__img, .contact__data", { origin: "right" })
      sr.reveal(".prices__box")
      sr.reveal(".prices__swiper", { origin: "bottom", delay: 600 })
      sr.reveal(".gallery__image", { interval: 100 })
      sr.reveal(".footer__container")
    })
  }, [])

  return (
    <>
      <header className={`header ${isScrolled ? "shadow-header" : ""}`} id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <i className="ri-stethoscope-line"></i> Medical
          </a>
          <div className={`nav__menu ${menu ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list">
              {[{ name: "Home" }, { name: "Delivery" }, { name: "About Us" }, { name: "Prices" }, { name: "Contact" }]
              .map((item, index) => (
                <li key={index} onClick={() => setMenu(false)}>
                  <a href={`#${item.name.split(" ")[0].toLowerCase()}`} className={`nav__link ${activeLink === item.name.split(" ")[0].toLowerCase() ? "active-link" : ""}`}>{item.name}</a>
                </li>
              ))}
            </ul>
            <div className="nav__close" id="nav-close" onClick={() => setMenu(false)}>
              <i className="ri-close-large-line"></i>
            </div>
          </div>
          <div className="nav__buttons">
            <i 
              className={`${darkTheme ? "ri-moon-fill" : "ri-sun-fill"} nav__theme`} 
              id="theme-button"
              onClick={() => setDarkTheme(d => !d)}
            ></i>
            <div className="nav__toggle" id="nav-toggle" onClick={() => setMenu(true)}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">
                <span>Get Quick</span>
                <br /> Medical Service
              </h1>
              <p className="home__description">
                Get your medical service from a certified
                doctor and health professional.
              </p>
              <a href="#delivery" className="button">Get Started</a>
            </div>
            <div className="home__content grid">
              <div className="home__info">
                <div>
                  <h2 className="home__name">Dr. Myla Harts</h2>
                  <h3 className="home__profession">Bones Specialist</h3>
                  <div className="home__icons">
                    <div className="home__box">
                      <i className="ri-medicine-bottle-fill"></i>
                    </div>
                    <div className="home__box">
                      <i className="ri-24-hours-line"></i>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="home__button button-dark">
                  <i className="ri-arrow-right-s-line"></i>
                  Contact
                </a>
              </div>
              <div className="home__image">
                <Image src={HomeImage} alt="image" className="home__img" />
              </div>
            </div>
          </div>
        </section>
        <section className="delivery section" id="delivery">
          <div className="delivery__container container grid">
            <div className="delivery__data">
              <h2 className="section__title">
                Vaccine Injections <br />
                <span>Delivery Service</span>
              </h2>
              <p className="delivery__description">
                We provide door-to-door vaccine and injection delivery
                services, avaliable to all segments throughout the city.
              </p>
              <div className="delivery__info">
                {[
                  { name: "Home Service", description: "Fast home vaccination service.", icon: "ri-home-4-fill" },
                  { name: "1 Hour Service", description: "Super easy and quick service for patients.", icon: "ri-time-fill" },
                  { name: "Better Quality", description: "The Best Medicines for Health.", icon: "ri-syringe-fill" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="delivery__icon">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="delivery__subtitle">{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="delivery__content">
              <h3 className="delivery__title">Request <br /> Vaccination</h3>
              <p className="delivery__patients">
                <span>324</span> Patients
              </p>
              <div className="delivery__image">
                <Image src={DeliveryImage} className="delivery__img" alt="image" />
              </div>
              <a href="#contact" className="button-dark">
                Request
                <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <div>
                <h2 className="section__title">
                  <span>We Have Certified</span>
                  <br /> Medical Service
                </h2>
                <p className="about__description">
                  Don&apos;t worry, we have certified medical services, so
                  you can receive medical consultations in any specialty. 
                </p>
              </div>
              <div className="about__info">
                {[
                  { number: "256", detail1: "Healthy", detail2: "Patients"},
                  { number: "16", detail1: "Hospital", detail2: "Care"},
                  { number: "8", detail1: "Years Of", detail2: "Experience"},
                ].map((item, index) => (
                  <div key={index} className="about__stat">
                    <h3 className="about__number">{item.number}</h3>
                    <p className="about__details">{item.detail1} <br /> {item.detail2}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="about__button">
                Contact Me
                <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>
            <Image src={AboutImage} className="about__img" alt="image" />
          </div>
        </section>
        <section className="prices section" id="prices">
          <div className="prices__container container grid">
            <div className="prices__data">
              <h2 className="section__title">
                <span>Affordable Prices To</span>
                <br /> Check Your Health
              </h2>
              <p className="prices__description">
                Get the best prices, make inquiries, checkups, and
                visit your home. Schedule your consultation now.
              </p>
            </div>
            <div className="prices__content">
              <div className="prices__box">
                <p className="prices__details">All Medical Services <br /> In Your Hand</p>
              </div>
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="prices__swiper"
              >
                  {[
                    { number: "$15", title: "Health Consultations", items: [
                      'Consultations about your health.', 'Ask any questions about your health.', 'Take your time without limits.'
                    ]},
                    { number: "$35", title: "Delivery Service", items: [
                      'We offer delivery service.', 'We come to your home for service.', 'Avaliable 24 hours a day.'
                    ]},
                    { number: "$125", title: "Medical Attention", items: [
                      'Instant check-ups on your health.', 'Primary attention on the patient.', 'Monitoring your health for up to a week.'
                    ]},
                  ].map((item, index) => (
                    <SwiperSlide key={index}>
                      <article className="prices__card swiper-slide">
                        <div className="prices__heading">
                          <h2 className="prices__number">{item.number}</h2>
                          <h3 className="prices__title">{item.title}</h3>
                        </div>
                        <ul className="prices__list">
                          {item.items.map((item, index) => (
                            <li key={index} className="prices__item">
                              <i className="ri-checkbox-fill"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="gallery section">
          <div className="gallery__container container grid">
            {[GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4].map((img, i) => (
              <div key={i} className="gallery__image">
                <Image src={img} alt="image" className="gallery__img" />
              </div>
            ))}
          </div>
        </section>
        <section className="contact section" id="contact">
          <div className="contact__container container grid">
            <div className="contact__data">
              <h2 className="section__title">
                Contact Me <br /> <span>On All Platforms</span>
              </h2>
              <p className="contact__description">
                Contact me on all my social media channels. I&apos;m
                avaliable for you and your health. Write to me now.
              </p>
              <div className="contact__info">
                <div>
                  <div className="contact__icon">
                    <i className="ri-message-3-fill"></i>
                  </div>
                  <h3 className="contact__subtitle">Write to me</h3>
                  <div className="contact__social">
                    {[
                      { link: "https://m.me/bedimcode", icon: "ri-messenger-fill" },
                      { link: "https://api.whatsapp.com/send?phone=51123456789&text=Hello", icon: "ri-messenger-fill" },
                      { link: "https://web.telegram.org", icon: "ri-messenger-fill" },
                      { link: "mailto:medical@email.com", icon: "ri-messenger-fill" },
                    ].map((item, i) => (
                      <a key={i} href={item.link} target="_blank" className="contact__social-link">
                        <i className={item.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
                {[
                  { icon: "ri-hospital-fill", title: "Location", text1: "Lima - Peru", text2: "Av. The Trees #0123" },
                  { icon: "ri-time-fill", title: "Attention", text1: "Monday - Friday", text2: "8am - 6pm" },
                  { icon: "ri-smartphone-fill", title: "Phone number", text1: "=0123(00)-765-4321", text2: "+00-0123456" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="contact__icon">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="contact__subtitle">{item.title}</h3>
                    <address className="contact__address">
                      {item.text1} <br /> {item.text2}
                    </address>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.04473543452!2d-77.15258818206594!3d-12.026254178369966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1spt-BR!2sbr!4v1764109083715!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container container grid">
          <a href="#" className="footer__logo">
            <i className="ri-stethoscope-line"></i> Medical
          </a>
          <div className="footer__links">
            {[{ title: "Home", hash: "#home"}, { title: "About Us", hash: "#about"}, { title: "Prices", hash: "#prices"}]
            .map((item, i) => (<a key={i} href={item.hash}>{item.title}</a>))}
          </div>
          <div className="footer__social">
            {[
              { link: "https://www.facebook.com/bedimcode", icon: "ri-facebook-circle-fill" },
              { link: "https://www.instagram.com/bedimcode/", icon: "ri-instagram-fill" },
              { link: "https://twitter.com/", icon: "ri-twitter-x-fill" },
              { link: "https://www.youtube.com/@Bedimcode", icon: "ri-youtube-fill" },
              { link: "https://api.whatsapp.com/send?phone=51123456789&text=Hello", icon: "ri-whatsapp-fill" },
            ].map((item, i) => (
              <a key={i} href={item.link} target="_blank" className="footer__social-link">
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <span className="footer__copy">
          &#169; All Rights Reserved by Bedimcode
        </span>
      </footer>
      <a href="#" className={`scrollup ${showScrollUp ? "show-scroll" : ""}`} id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  )
}
