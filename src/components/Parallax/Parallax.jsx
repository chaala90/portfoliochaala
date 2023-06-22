import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Parallax.scss';

const Parallax = () => {
  const [background, setBackground] = useState(20);
  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top top',
          end: '5000 bottom',
          scrub: true,
          pin: true,
          onUpdate: self => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3.current,
        {
          y: '-=80',
        },
        0,
      );
      tl.to(
        stars.current,
        {
          top: 0,
        },
        0.5,
      );
      tl.to(
        cloudsLeft.current,
        {
          x: '-20%',
          opacity: 0,
        },
        0,
      );
      tl.to(
        cloudsRight.current,
        {
          x: '20%',
          opacity: 0,
        },
        0,
      );
      tl.to(
        btn.current,
        {
          opacity: 1,
        },
        1.5,
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div id="parallax" className="parallax-outer">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#778da9, #778da9 ${background}%, #a3b18a, #00FF00 )`,
        }}
        className="parallax"
      >
        <img
          ref={mountain3}
          className="mountain-3"
          alt="mountain"
          src="/paralax/mountain-3.svg"
        />
        <img
          ref={cloudsLeft}
          alt="cloud"
          className="clouds-left"
          src="/paralax/clouds-left.svg"
        />
        <img
          ref={cloudsRight}
          alt="cloud"
          className="clouds-right"
          src="/paralax/clouds-right.svg"
        />
        <img
          ref={stars}
          className="stars"
          alt="stars"
          src="/paralax/stars.svg"
        />
      </div>
    </div>
  );
};

export default Parallax;
