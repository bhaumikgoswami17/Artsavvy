import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../pages/main.jsx';
import Steps from '../pages/steps.jsx';
import FAQS from '../pages/faqs.jsx';
import ServiceGrid from './ServiceGrid.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Newsletter from './Newsletter.jsx';
import Content from './content.jsx';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainRef = useRef(null);
  const containerRef = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    // Initial page load animation
    const tl = gsap.timeline();

    // Animate the overlay
    tl.fromTo('.page-overlay', {
      scaleY: 1,
    }, {
      scaleY: 0,
      duration: 1.5,
      ease: "power4.inOut",
      transformOrigin: "top"
    })

    // Staggered header elements animation
    .fromTo('.stagger-animate', {
      y: 100,
      opacity: 0,
      rotateX: -30,
    }, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    }, "-=0.5")

    // Main content reveal
    .fromTo('.animate-main', {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      opacity: 0,
    }, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: 1,
      duration: 1.5,
      ease: "power4.inOut",
    }, "-=0.8");

    // Smooth scroll animations for sections
    const sections = gsap.utils.toArray('.section-3d');
    sections.forEach((section, i) => {
      gsap.fromTo(section, {
        opacity: 0,
        scale: 0.9,
        y: 100,
        rotateX: 15,
        filter: 'blur(10px)',
      }, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
          end: 'top center',
          scrub: 1.5,
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 2,
        ease: "power3.out",
      });
    });

    // Smooth mouse move effect
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    gsap.ticker.add(() => {
      const deltaX = mouseX - currentX;
      const deltaY = mouseY - currentY;
      
      currentX += deltaX * 0.1;
      currentY += deltaY * 0.1;

      gsap.set('.section-3d', {
        rotateY: currentX * 0.2,
        rotateX: -currentY * 0.2,
      });
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove();
    };
  }, []);

  return (
    <>
      <div className="page-overlay"></div>
      
      <div className='relative overflow-x-hidden text-white min-h-screen bg-gradient'>
        <div className="fixed inset-0 bg-gradient-radial z-0"></div>
        <div className="fixed inset-0 bg-grid-pattern opacity-10 z-0"></div>
        
        <div className="relative z-10 perspective smooth-scroll" ref={containerRef}>
          <div className="animate-header">
            <Header />
          </div>

          <div className="animate-main clip-path" ref={mainRef}>
            <Main />
          </div>

          <div className="space-y-32 py-20" ref={sectionsRef}>
            <div className="section-3d stagger-animate">
              <Steps />
            </div>

            <div className="section-3d stagger-animate">
              <Content />
            </div>

            <div className="section-3d stagger-animate">
              <ServiceGrid />
            </div>

            <div className="section-3d stagger-animate">
              <FAQS />
            </div>

            <div className="section-3d stagger-animate">
              <Testimonials />
            </div>

            <div className="section-3d stagger-animate">
              <Newsletter />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
