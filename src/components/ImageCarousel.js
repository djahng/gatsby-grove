/* eslint-disable */
import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

import caribouImg from '../images/slider/caribou.png';
import coffeeImg from '../images/slider/coffee.png';
import fireImg from '../images/slider/fire.png';
import treesImg from '../images/slider/trees.png';

const items = [
  {
    src: caribouImg,
    altText: 'cariboo'
  },
  {
    src: coffeeImg,
    altText: 'covfefee'
  },
  {
    src: fireImg,
    altText: 'fyre'
  },
  {
    src: treesImg,
    altText: 'treez'
  }
];

class ImageCarousel extends Component {
  state = { activeIndex: 0 };

  onExiting = () => { this.animating = true; };

  onExited = () => { this.animating = false; };

  next = () => {
    if (this.animating) return;

    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;

    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <img src={item.src} alt={item.altText} className="d-block w-100" />
        </CarouselItem>
      );
    });

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-7 mb-3">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </div>

          <div className="col-lg-5">
            <h3>CAMPING MADE COMFY</h3>

            <p className="lead">
              Craft beer tacos iceland kinfolk, beard chia selvage poutine locavore. Glossier cornhole stumptown intelligentsia edison bulb. Snackwave poke vegan swag, pinterest gastropub post-ironic viral williamsburg put a bird on it leggings dreamcatcher meditation flannel. Chambray coloring book kickstarter bespoke typewriter taxidermy freegan, fam brunch normcore artisan mixtape beard cray.
            </p>

            <a href="#">See for yourself <FaArrowRight /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
