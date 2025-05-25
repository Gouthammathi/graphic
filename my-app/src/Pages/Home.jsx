import React, { useEffect } from 'react'

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
    justifyContent: 'flex',
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
    'star': '/assets/star.png'
  };

  return (
    <div style={backgroundStyle}>
      {/* Video at the top */}
      <img
        src="/assets/image.png"
        
        style={{
          width: '100%',
          maxHeight: '24vw',
          objectFit: 'cover',
          display: 'block',
          marginBottom: '2vw',
        }}
      />
      {/* Sky image at the top */}
      
      <div
        style={{
          position: 'relative',
          display: 'flex',
          gap: '2vw',
          alignItems: 'center',
          marginTop: '4vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          flexWrap: 'wrap',
          justifyContent: 'center',
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
        {/* Name and flash images */}
        {name.split('').map((letter, idx, arr) => {
          const isAafterH = letter === 'A' && arr[idx - 1] === 'H';
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
                transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (5 + idx * 2)}deg)`,
                marginLeft: isAafterH ? '1vw' : undefined,
                marginRight: '0.5vw',
              }}
            />
          );
        })}
        <img
          src={letterImages['flash']}
          alt="flash"
          style={{
            height: '10vw',
            width: 'auto',
            minHeight: '48px',
            maxHeight: '120px',
            borderRadius: '8px',
            marginLeft: '1vw',
            transform: 'rotate(9deg)'
          }}
        />
      </div>
    </div>
  );
};

export default Home;