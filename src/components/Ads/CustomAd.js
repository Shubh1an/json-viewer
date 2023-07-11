import React, { useEffect } from 'react';
import Adsense from "react-adsense"

const AdSenseC = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <Adsense.Google
        client="ca-pub-9592098846144362"
        slot="4670723504"
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
      />
    </div>
  );
};

export default AdSenseC;