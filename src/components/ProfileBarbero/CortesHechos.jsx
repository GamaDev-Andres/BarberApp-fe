import React from "react";
import Corte from "./Corte";
import { StyledContainerCortes } from "./styles";
import Carousel from "react-bootstrap/Carousel";

const CortesHechos = () => {
  return (
    <>
      <h2>Cortes</h2>
      <StyledContainerCortes>
        {/* {[1, 2, 3, 4, 5].map((corte) => (
          <Corte key={corte} />
        ))} */}
        <Carousel>
          {[1, 2, 3, 4, 5].map((corte) => (
            <Carousel.Item key={corte}>
              <Corte />
            </Carousel.Item>
          ))}
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </StyledContainerCortes>
    </>
  );
};

export default CortesHechos;
