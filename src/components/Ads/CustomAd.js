import React, { Component, useEffect } from 'react';
import Adsense from "react-adsense"

// const AdSenseC = () => {
//   useEffect(() => {
//     (window.adsbygoogle = window.adsbygoogle || []).push({});
//   }, []);

//   return (
//     <div>
//       <Adsense.Google
//         client="ca-pub-9592098846144362"
//         slot="4670723504"
//         style={{ width: "100%", height: 200, float: 'left' }}
//         format="auto"
//         responsive="true"
//       />
//     </div>
//   );
// };

// export default AdSenseC;
class GoogleAds extends Component {

  componentDidMount() {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
      return (
              <ins className='adsbygoogle'
                  style={{ display: 'block' }}
                  data-ad-client= 'ca-pub-9592098846144362'
                  data-ad-slot={this.props.slot}
                  data-ad-format= 'auto'
                  data-full-width-responsive="true"
              >
              </ins>
      );
  }
}

export default GoogleAds;