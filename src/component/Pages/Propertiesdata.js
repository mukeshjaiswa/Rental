import React from 'react'
import images from '../assest/properties-01.jpg'
import images2 from '../assest/properties-02.jpg'
import images3 from '../assest/propertis-03.jpg'
import cart1 from  '../assest/Cart/cartImage.avif'
import cart2 from  '../assest/Cart/cartImage2.avif'

export default function Propertiesdata() {
  return null
}
export const data=[
    {
        id: '1',
        img:[images,cart1,cart2,images2],
        location: 'Kathmandu, Nepal',
        type: '1BHK Apartment',
        capacity: '2 persons',
        price: 120,
        clientType: 'broker',
        description:
    'Experience cozy urban living in this fully-furnished 1BHK apartment located in the heart of Kathmandu. Perfect for remote workers, couples, or small families. ' +
    'This stylish space includes a spacious bedroom, a modern kitchen, and a cozy living area with natural light flooding through large windows. ' +
    "The apartment is equipped with high-speed internet, a work desk, air conditioning, and 24/7 security. It's within walking distance to grocery stores, cafes, and public transport. " +
    "Whether you're staying for a month or longer, this apartment offers the comfort and convenience of home in a vibrant neighborhood.",
 
 
 
  clientType: 'broker',
      },
      {
        id: '2',
        img:[images2,cart1, cart2,images3],
        location: 'Lalitpur, Nepal',
     
        capacity: '1 person',
        price: 80,
        clientType: 'agencies',
        description:
        'Experience cozy urban living in this fully-furnished 1BHK apartment located in the heart of Kathmandu. Perfect for remote workers, couples, or small families. ' +
        'This stylish space includes a spacious bedroom, a modern kitchen, and a cozy living area with natural light flooding through large windows. ' +
        "The apartment is equipped with high-speed internet, a work desk, air conditioning, and 24/7 security. It's within walking distance to grocery stores, cafes, and public transport. " +
        "Whether you're staying for a month or longer, this apartment offers the comfort and convenience of home in a vibrant neighborhood.",
      type: '2BHK Apartment',
   
      },
      {
        id: '3',
        img:[images3,cart1,cart2,images2],
        location: 'Bhaktapur, Nepal',
        type: '3BHK Flat',
        capacity: '4 persons',
        price: 180,
        clientType: 'broker',
        description:
        'Experience cozy urban living in this fully-furnished 1BHK apartment located in the heart of Kathmandu. Perfect for remote workers, couples, or small families. ' +
        'This stylish space includes a spacious bedroom, a modern kitchen, and a cozy living area with natural light flooding through large windows. ' +
        "The apartment is equipped with high-speed internet, a work desk, air conditioning, and 24/7 security. It's within walking distance to grocery stores, cafes, and public transport. " +
        "Whether you're staying for a month or longer, this apartment offers the comfort and convenience of home in a vibrant neighborhood.",
     

      
      },
]
