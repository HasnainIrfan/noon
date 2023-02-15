import React from "react";
// css
import css from "../styles/megabox.module.scss";
// Icon
import { TiStopwatch } from "react-icons/ti";
import Image from "next/image";

const MegaBox = () => {
  const Reason = [
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/d60b456a-31f4-4ce8-a090-766dae3738f0.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png",
    },
  ];

  const MegaDeal = [
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/5722c8a3-a733-446b-bfe5-72201e9411a9.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/acd6c443-e866-43c5-a5b4-458179eaf505.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/1a5f2e56-9b79-4824-a665-8b0e4916723c.png",
    },
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/fcedd670-aea8-4570-b629-cc22ce4976f4.png",
    },
  ];

  const Foucus = [
    {
      img: "https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png",
    },
    {
      img: "https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-01.1675759833.5832095.png",
    },
  ];

  return (
    <div className={css.MegaBox}>
      <div className={css.MegaBox_wrapper}>
        <div className={css.boxs}>
          <div className={css.box}>
            <div className={css.box_heading}>
              <h1>More Reasone For Shop</h1>
            </div>
            <div className={css.minboxs}>
              {Reason.map((item, i) => {
                return (
                  <div className={css.minibox} key={i}>
                    <Image
                      src={item.img}
                      alt="Images"
                      width={300}
                      height={300}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className={css.box}>
            <div className={css.box_heading}>
              <h1>
                Mega deals of the day
                <span>
                  <TiStopwatch />
                  24 hours only!
                </span>
              </h1>
            </div>
            <div className={css.minboxs}>
              {MegaDeal.map((item, i) => {
                return (
                  <div className={css.minibox} key={i}>
                    <Image
                      src={item.img}
                      alt="Images"
                      width={300}
                      height={300}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className={css.box}>
            <div className={css.box_heading}>
              <h1>In Focus</h1>
            </div>
            <div className={css.minboxs}>
              {Foucus.map((item, i) => {
                return (
                  <div className={css.bigbox} key={i}>
                    <Image
                      src={item.img}
                      alt="Images"
                      width={300}
                      height={300}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaBox;
