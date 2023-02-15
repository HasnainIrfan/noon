import React from "react";
// css
import css from "../styles/banner.module.scss";

// Images
import BannerImage from "../public/assets/banner.png";
import BannerLeft from "../public/assets/bannerleft.png";
import BannerRight from "../public/assets/bannerRight.png";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation  , Autoplay} from "swiper";

const Banner = () => {
  const SliderData = [
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/383c2895-9091-41c2-94ef-424c25c18507.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/b0024d83-e8af-4eec-ad7c-b703bfdbe87a.png",
    },
    {
      img: "https://f.nooncdn.com/ads/banner-1008x1008/en_dk_uae-hero-01.1676270022.5097685.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/e0bf5428-90c7-4ca9-a3c4-54b97e099bc6.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/56921ba5-3479-46c4-8b02-4874d7f38489.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/3565e4f6-540e-4a2c-8f34-c82244a2a4e0.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/83b71291-65f5-4fcc-8db8-a72d91b32426.jpg",
    },
  ];
  return (
    <>
      <div className={css.banner}>
        <div className={css.banner_wrapper}>
          <div className={css.banner_top}>
            <Image src={BannerImage} alt="Logo" width="100%" height="100%" />
          </div>
          <div className={css.banner_bottom}>
            <div className={css.banner_bottom_left}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[ Navigation , Autoplay]}
                className={css.mySwiper}
               
              >
                {SliderData.map((item, i) => {
                  return (
                    <SwiperSlide className={css.slide} key={i}>
                      <Image
                        src={item.img}
                        alt="Slider"
                        width={500}
                        height={500}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper> 
            </div>
            <div className={css.banner_bottom_right}>
              <div className={css.banner_bottom_Image}>
                <Image src={BannerLeft} alt="Logo" width="100%" height={200}/>
                <Image
                  src={BannerRight}
                  alt="Logo"
                  width="100%"
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
