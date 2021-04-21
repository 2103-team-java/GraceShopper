import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slide() {
  return (
    <div>
      <Carousel>

        <Carousel.Item>
          <img className='d block w-100' src='https://k8q7r7a2.stackpathcdn.com/wp-content/uploads/2021/04/2021-Rolex-Oyster-Perpetual-Datejust-36-with-fluted-pattern-dial-3.jpg' alt='' style={{height: '100vh'}} />
        </Carousel.Item>

        <Carousel.Item>
          <img className='d block w-100' src='https://k8q7r7a2.stackpathcdn.com/wp-content/uploads/2021/04/2021-Rolex-Oyster-Perpetual-Datejust-36-with-fluted-pattern-dial-3.jpg' alt='' style={{height: '100vh'}} />
        </Carousel.Item>
        
        </Carousel>
    </div>
  );
}

