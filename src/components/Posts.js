import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1038,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const posts = useSelector((state) => state.items);

  return (
    <Slider {...settings}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Slider>
  );
};
export default Posts;
