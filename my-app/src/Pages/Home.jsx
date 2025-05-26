import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = '';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.height = '100%';
    document.documentElement.style.width = '100%';
    return () => {
      document.body.style = '';
      document.documentElement.style = '';
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.width = '100vw';
    document.documentElement.style.width = '100vw';
  }, []);

  const backgroundStyle = {
    backgroundImage: "url('/bg.jpg'), url('/bg.jpg')",
    backgroundSize: 'cover, cover',
    backgroundPosition: 'top, bottom',
    backgroundRepeat: 'no-repeat, no-repeat',
    minHeight: '150vh',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  };

  const name = 'GOUTHAM';
  const letterImages = {
    'G': '/name/G.png',
    'O': '/name/O.png',
    'U': '/name/U.png',
    'T': '/name/T.png',
    'H': '/name/H.png',
    'A': '/name/A.png',
    'M': '/name/M.png',
    'flash': '/name/flash.png',
    'star': '/assets/star.png',
  };

  return (
    <div style={backgroundStyle}>
      {/* Flex container to hold name and image side by side */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          padding: '4vw',
          boxSizing: 'border-box',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Name Section */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            gap: '2vw',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            maxWidth: '60%',
          }}
        >
          {/* Star image as TM mark */}
          <img
            src={letterImages['star']}
            alt="star"
            style={{
              position: 'absolute',
              top: '-3vw',
              right: '-6vw',
              height: '6vw',
              width: '6vw',
              minHeight: '32px',
              minWidth: '32px',
              zIndex: 10,
            }}
          />

          {/* Name letter images */}
          {name.split('').map((letter, idx, arr) => {
            const isAafterH = letter === 'A' && arr[idx - 1] === 'H';
            // Add randomization for floating effect
            const randomRotation = Math.floor(Math.random() * 30 - 15); // -15 to 15 degrees
            const randomMarginTop = Math.floor(Math.random() * 30); // 0 to 30px
            const randomMarginLeft = Math.floor(Math.random() * 20); // 0 to 20px
            const randomScale = 0.9 + Math.random() * 0.2; // Scale between 0.9 to 1.1
            return (
              <img
                key={idx}
                src={letterImages[letter]}
                alt={letter}
                style={{
                  height: '10vw',
                  width: 'auto',
                  minHeight: '48px',
                  maxHeight: '120px',
                  borderRadius: '8px',
                  marginLeft: isAafterH ? '1vw' : `${randomMarginLeft}px`,
                  marginTop: `${randomMarginTop}px`,
                  transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
                  zIndex: 1,
                  float: 'left',
                }}
              />
            );
          })}

          {/* Flash image at the end */}
          <img
            src={letterImages['flash']}
            alt="flash"
            style={{
              height: '10vw',
              width: 'auto',
              minHeight: '32px',
              maxHeight: '80px',
              borderRadius: '8px',
              marginLeft: '1vw',
              transform: 'rotate(9deg)',
              maxWidth: '100vw',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Right: Image Section */}
        <img
          src="/me.png"
          alt="Me"
          style={{
            height: 'auto',
            width: '100%',
            maxWidth: '300px',
            marginTop: '1vw',
            display: 'block',
            borderRadius: '12px',
          }}
        />
      </div>
    </div>
  );
};

export default Home;
