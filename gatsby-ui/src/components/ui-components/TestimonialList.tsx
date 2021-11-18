import { useEffect, useState } from 'react';

export default function TestimonialList() {
  const [placeData, setPlaceData] = useState(null);

  // Todo: get setup with google business api so I can get reviews to pull in.
  /*   useEffect(() => {
    const data = fetch(
      'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJw8O87SD3Mq8RiXX-e_QjkOw&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyDhhYFaHnHcpC0O_UtJRps6gMuRkI_-OIw'
    ).then((res) => {
      console.log(res);
      setPlaceData(res);
    });
  }, []); */

  console.log(placeData);
  return <div className="container">Testimonial list</div>;
}
