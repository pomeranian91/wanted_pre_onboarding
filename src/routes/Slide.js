import "../App.css";
import "../Slide.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slide() {
  const [SlideComposition, setSlideComposition] = useState([
    { id: 0, img: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg", title: "해, 커리어 EP 02 공개", text: "마지막 관문 2라운드의 승자는?" },
    { id: 1, img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg", title: "개발자 되고싶은 분들!?", text: "프론트엔드 무료 교육과정 참여하기" },
    { id: 2, img: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg", title: "개발자 성장 비결 공개", text: "Velog, 글 쓰는 개발자들의 이야기" },
    { id: 3, img: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg", title: "성장하는 개발자가 되려면?", text: "OOO검색하지 말 것!" },
    { id: 4, img: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg", title: "성과를 내는 마케팅", text: "실제 사례를 공개합니다" },
    { id: 5, img: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg", title: "포트폴리오를 부탁해!", text: "디자이너의 포폴 살펴보기" },
    { id: 6, img: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg", title: "2022년 달라지는 노동법령", text: "노무쟁점 한 눈에 파악하기" },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1.75,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="test">
      <Slider {...settings}>
        {SlideComposition.map((a) => {
          return (
            <div className="Slide_container" data={SlideComposition} handleRen={setSlideComposition}>
              <div className="Slide_detail">
                <img className="Slide_detail_img" src={a.img} />
              </div>
              <div className="Slide_detail_text">
                <h2>{a.title}</h2>
                <h3>{a.text}</h3>
                <hr />
                <span>바로보기</span>
              </div>
              <div className="Slide_detail_text-midea">
                <h2>{a.title}</h2>
                <h3>{a.text}</h3>
                <span>바로보기></span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slide;

{
  /* <button className="btn_left ">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="btn_right ">
          <FontAwesomeIcon icon={faChevronRight} />
        </button> */
}
{
  /*클래스 사이 추가 ${addClass === true ? "Slide_center" : "Slide_text_side"} */
}
