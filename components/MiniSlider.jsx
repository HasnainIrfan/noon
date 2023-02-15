import React from "react";
// css
import css from "../styles/minislider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination , Navigation} from "swiper";
import Image from "next/image";

const MiniSlider = () => {
  const SliderData = [
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/5d2e037c-d677-4f1a-a7e3-86690a46ff59.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/057d7480-a830-40fd-b253-450de2e07abb.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/cf847f24-9b25-4a43-b2b1-ff8881fb51ab.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/a079af80-5348-4e33-a87c-7825432c17ac.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/b680acd9-5df4-40e4-b14c-fa7fe0fe84c3.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/c9289a52-80e4-46ce-9a39-47c408ea902a.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/d398aa22-c9ee-4f7f-9b71-8c74163f79f8.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/daaee684-f30a-4896-9f8b-02405aec5dca.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/fa424b75-dd11-4939-80c3-5090e0d691e7.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/1e51e3ef-2992-47b8-b256-8f9ffd77f968.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/5d2e037c-d677-4f1a-a7e3-86690a46ff59.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/057d7480-a830-40fd-b253-450de2e07abb.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/cf847f24-9b25-4a43-b2b1-ff8881fb51ab.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/a079af80-5348-4e33-a87c-7825432c17ac.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/b680acd9-5df4-40e4-b14c-fa7fe0fe84c3.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/c9289a52-80e4-46ce-9a39-47c408ea902a.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/d398aa22-c9ee-4f7f-9b71-8c74163f79f8.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/daaee684-f30a-4896-9f8b-02405aec5dca.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/fa424b75-dd11-4939-80c3-5090e0d691e7.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/1e51e3ef-2992-47b8-b256-8f9ffd77f968.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/5d2e037c-d677-4f1a-a7e3-86690a46ff59.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/057d7480-a830-40fd-b253-450de2e07abb.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/cf847f24-9b25-4a43-b2b1-ff8881fb51ab.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/a079af80-5348-4e33-a87c-7825432c17ac.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/b680acd9-5df4-40e4-b14c-fa7fe0fe84c3.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/c9289a52-80e4-46ce-9a39-47c408ea902a.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/d398aa22-c9ee-4f7f-9b71-8c74163f79f8.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/daaee684-f30a-4896-9f8b-02405aec5dca.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/fa424b75-dd11-4939-80c3-5090e0d691e7.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/1e51e3ef-2992-47b8-b256-8f9ffd77f968.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/5d2e037c-d677-4f1a-a7e3-86690a46ff59.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/057d7480-a830-40fd-b253-450de2e07abb.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/cf847f24-9b25-4a43-b2b1-ff8881fb51ab.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/a079af80-5348-4e33-a87c-7825432c17ac.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/b680acd9-5df4-40e4-b14c-fa7fe0fe84c3.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/c9289a52-80e4-46ce-9a39-47c408ea902a.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/d398aa22-c9ee-4f7f-9b71-8c74163f79f8.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
    },
  ];
  return (
    <>
      <div className={css.slider}>
        <div className={css.slider_wrapper}>
          <Swiper
            slidesPerView={10}
            spaceBetween={36}
            freeMode={true}
            navigation={true}
            pagination={{
              type: "progressbar",
            }}
            modules={[FreeMode, Pagination ,  Navigation]}
            className={css.mySwiper}
          >
            {SliderData.map((item, i) => {
              return (
                <SwiperSlide className={css.slide} key={i}>
                  <Image src={item.img} alt="Slider" width={200} height={200} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MiniSlider;
