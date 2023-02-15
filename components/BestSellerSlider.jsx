import Image from "next/image";
import React, { useEffect, useState } from "react";
// css
import css from "../styles/bestsellerslider.module.scss";
// React Icons
import { AiFillStar } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation } from "swiper";
const BestSellerSlider = () => {
  const [isSlider, setIsSlider] = useState(6);
  const BestSellData = [
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif",
      title: "Apple iPhone 14 Pro Max",
      subtitle: "256GB Deep Purple 5G W",
      amout: "4875.00",
      discound: "5099",
      rating: "4.5",
      sell: "133",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif",
      title: "Sony PlayStation 5 Console",
      subtitle: "(Disc Version) With Contro",
      amout: "1987.00",
      discound: "3999",
      off: "50%",
      rating: "4.6",
      sell: "1.8k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1663322644/N43241184A_1.avif",
      title: "T500 Bluetooth Full Touch",
      subtitle: "Call Smartwatch With Repl",
      amout: "24.90",
      discound: "89",
      off: "72%",
      rating: "3.3",
      sell: "4.9k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1660052743/N52856958A_1.avif",
      title: "Samsung Galaxy A13 Dual",
      subtitle: "SIM Blue / Light Blue 4GB ",
      amout: "512.00",
      discound: "659",
      off: "22%",
      rating: "4.5",
      sell: "893",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1635445545/N48441984A_1.avif",
      title: "XiuWoo 3300-Piece Small",
      subtitle: "Colourful Bracelet Beads ",
      amout: "29.00",
      discound: "44",
      off: "34%",
      rating: "4.4",
      sell: "2.6k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1645647229/N22213963A_1.avif",
      title: "Joyroom TWS Bluetooth",
      subtitle: "Wireless In-Ear Headset W",
      amout: "119.00",
      discound: "139",
      off: "14%",
      rating: "4.2",
      sell: "11.4k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif",
      title: "Apple iPhone 14 Pro Max",
      subtitle: "256GB Deep Purple 5G W",
      amout: "4875.00",
      discound: "5099",
      rating: "4.5",
      sell: "133",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif",
      title: "Sony PlayStation 5 Console",
      subtitle: "(Disc Version) With Contro",
      amout: "1987.00",
      discound: "3999",
      off: "50%",
      rating: "4.6",
      sell: "1.8k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1663322644/N43241184A_1.avif",
      title: "T500 Bluetooth Full Touch",
      subtitle: "Call Smartwatch With Repl",
      amout: "24.90",
      discound: "89",
      off: "72%",
      rating: "3.3",
      sell: "4.9k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1660052743/N52856958A_1.avif",
      title: "Samsung Galaxy A13 Dual",
      subtitle: "SIM Blue / Light Blue 4GB ",
      amout: "512.00",
      discound: "659",
      off: "22%",
      rating: "4.5",
      sell: "893",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1635445545/N48441984A_1.avif",
      title: "XiuWoo 3300-Piece Small",
      subtitle: "Colourful Bracelet Beads ",
      amout: "29.00",
      discound: "44",
      off: "34%",
      rating: "4.4",
      sell: "2.6k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1645647229/N22213963A_1.avif",
      title: "Joyroom TWS Bluetooth",
      subtitle: "Wireless In-Ear Headset W",
      amout: "119.00",
      discound: "139",
      off: "14%",
      rating: "4.2",
      sell: "11.4k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif",
      title: "Apple iPhone 14 Pro Max",
      subtitle: "256GB Deep Purple 5G W",
      amout: "4875.00",
      discound: "5099",
      rating: "4.5",
      sell: "133",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif",
      title: "Sony PlayStation 5 Console",
      subtitle: "(Disc Version) With Contro",
      amout: "1987.00",
      discound: "3999",
      off: "50%",
      rating: "4.6",
      sell: "1.8k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1663322644/N43241184A_1.avif",
      title: "T500 Bluetooth Full Touch",
      subtitle: "Call Smartwatch With Repl",
      amout: "24.90",
      discound: "89",
      off: "72%",
      rating: "3.3",
      sell: "4.9k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1660052743/N52856958A_1.avif",
      title: "Samsung Galaxy A13 Dual",
      subtitle: "SIM Blue / Light Blue 4GB ",
      amout: "512.00",
      discound: "659",
      off: "22%",
      rating: "4.5",
      sell: "893",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1635445545/N48441984A_1.avif",
      title: "XiuWoo 3300-Piece Small",
      subtitle: "Colourful Bracelet Beads ",
      amout: "29.00",
      discound: "44",
      off: "34%",
      rating: "4.4",
      sell: "2.6k",
    },
    {
      img: "https://f.nooncdn.com/products/tr:n-t_240/v1645647229/N22213963A_1.avif",
      title: "Joyroom TWS Bluetooth",
      subtitle: "Wireless In-Ear Headset W",
      amout: "119.00",
      discound: "139",
      off: "14%",
      rating: "4.2",
      sell: "11.4k",
    },
  ];
  const ChangeSlider = () => {
    if (window.innerWidth < 1000) {
      if (window.innerWidth < 600) {
        if (window.innerWidth < 400) {
          setIsSlider(1);
        } else {
          setIsSlider(2);
        }
      } else {
        setIsSlider(3);
      }
    } else {
      setIsSlider(6);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", ChangeSlider);
  }, [isSlider]);
  return (
    <>
      <div className={css.BestSellerSlider}>
        <div className={css.BestSellerSlider_wrapper}>
          <div className={css.BestSeller_heading}>
            <h1>Recommended for you</h1>
          </div>
          <Swiper
            slidesPerView={isSlider}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className={css.mySwiper}
          >
            {BestSellData.map((item, i) => {
              return (
                <SwiperSlide className={css.BestSellerBox} key={i}>
                  <div className={css.BestSellerBox_image}>
                    <Image
                      src={item.img}
                      alt="Slider"
                      width={200}
                      height={100}
                    />
                    <div className={css.bestsell}>
                      <span>Best Seller</span>
                    </div>
                  </div>

                  <div className={css.BestSellerBox_title}>
                    <span>{item.title}</span>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className={css.BestSellerBox_subtitle}>
                    <h4>
                      AED <span>{item.amout}</span>
                    </h4>
                    <div>
                      <h6>{item.discound}</h6>
                      <span>{item.off}</span>
                    </div>
                  </div>
                  <div className={css.BestSellerBox_action}>
                    <div className={css.BestSellerBox_left}>
                      <Image
                        src={
                          "https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                        }
                        alt="Slider"
                        width={60}
                        height={30}
                      />
                    </div>
                    <div className={css.BestSellerBox_right}>
                      <h4>
                        {item.rating} <AiFillStar />{" "}
                      </h4>
                      <span>{item.sell}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BestSellerSlider;
