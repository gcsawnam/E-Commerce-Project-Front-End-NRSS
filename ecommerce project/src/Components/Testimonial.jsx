import React from 'react'
import styled from 'styled-components'
import images from '../image/image 1.png';
 export const Testimonial = () => {
  return (
    <styleTestimonial background={images}>
        <div className="left">

        </div>
        <div className="right">
           
        </div>
        </styleTestimonial>
  )
}
const styleTestimonial =styled.div`

.left{
      background-image: url(${(props) => props.background}) no-repeat top center;
      background-size:cover ;
      
}
`
