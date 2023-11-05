import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import ProgressiveImage from 'react-progressive-graceful-image';

const LazyImage = ({ src }) => {

    const [loadContext, setLoadContext] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadContext(false);
          }, 2000);
          return () => clearTimeout(timer);
    },[])

   

  return (
    <div>
        {
            loadContext ? 
            <Skeleton count={5} /> :  
            <ProgressiveImage src={src} placeholder="https://placehold.co/600x600" >
  {(src) => {
    return (
      <div>
        <img className="progressive-image rounded-xl object-cover aspect-square z-0" src={src} />
        <noscript>
          <img className="progressive-image no-script" src={src} />
        </noscript>
      </div>
    );
  }}
</ProgressiveImage>
        }
    
    </div>
  );
}

export default LazyImage;