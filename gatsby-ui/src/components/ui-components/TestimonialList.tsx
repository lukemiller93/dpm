import { google } from 'googleapis';
import React, { useEffect, useRef, useState } from 'react';

import { Helmet } from 'react-helmet';

const oauth2Client = new google.auth.GoogleAuth({
  keyFile: '../../utils/dpm_keyfile.json',
  scopes: [],
}).getClient();

google.options({ auth: oauth2Client });
export default function TestimonialList() {
  const [placeData, setPlaceData] = useState(null);

  const reviewDiv = useRef(null);

  const getReviews = async () => {
    const businessInfo = google.mybusinessbusinessinformation('v1');
    const res = await businessInfo.locations.get({
      name: 'locations/2059534389366578947',
      readMask: 'reviews',
    });
    console.log(res.data);
  };

  // Todo: get setup with google business api so I can get reviews to pull in.
  useEffect(() => {
    getReviews();

    // const data = fetch(
    //   'https://mybusiness.googleapis.com/v4/accounts/101114181591242164866/locations/2059534389366578947/reviews',
    //   {
    //     headers: {
    //       Authorization:
    //         'Bearer 291845577769-hc1aebl4dm06q4prs4mgl02i4cqnk3n9.apps.googleusercontent.com',
    //     },
    //   }
    // ).then((res) => {
    //   console.log(res.json());
    //   setPlaceData(res);
    // });
  }, []);

  return (
    <>
      <div id="review-div" ref={reviewDiv} />
      <div className="container">Testimonial list</div>
    </>
  );
}
