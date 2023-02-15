// css
import css from "../styles/navbar.module.scss";

// Icon
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

// Images
import Logo from "../public/assets/logo.svg";
import HeaderLogo from "../public/assets/sublogo.gif";
import Flag from "../public/assets/flag.jpg";
import Image from "next/image";

const Navbar = () => {
  const Menu = [
    {
      title: "Electrocnics",
    },
    {
      title: "Men",
    },
    {
      title: "Women",
    },
    {
      title: "Home",
    },
    {
      title: "Boys & Toys",
    },
    {
      title: "Sports",
    },
    {
      title: "Bestseller",
    },
    {
      title: "Sell on noon",
    },
  ];
  return (
    <>
      <header className={css.header}>
        <div className={css.navbar}>
          <div className={css.navbar_Responsive}>
            <div className={css.navbar_Responsive_wrapper}>
              <div className={css.navbar_logo}>
                <Image src={Logo} alt="Logo" width="100%" height="100%" />
              </div>
              <div className={css.navbar_location}>
                <div className={css.navbar_location_left}>
                  <div className={css.flag}>
                    <Image src={Flag} alt="Logo" width="100%" height="100%" />
                  </div>
                  <div className={css.dec}>
                    <span>Deliver to</span>
                    <h4>Dubia</h4>
                  </div>
                </div>
                <div className={css.navbar_location_right}>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className={css.navbar_language}>
                <span>Arabic</span>
              </div>
            </div>
          </div>
          <div className={css.navbar_wrapper}>
            <div className={css.navbar_left}>
              <div className={css.navbar_logo}>
                <Image src={Logo} alt="Logo" width="100%" height="100%" />
              </div>
              <div className={css.navbar_location}>
                <div className={css.navbar_location_left}>
                  <div className={css.flag}>
                    <Image src={Flag} alt="Logo" width="100%" height="100%" />
                  </div>
                  <div className={css.dec}>
                    <span>Deliver to</span>
                    <h4>Dubia</h4>
                  </div>
                </div>
                <div className={css.navbar_location_right}>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className={css.navbar_center}>
              <div className={css.navbar_seacrh}>
                <input type="text" placeholder="What are You Looking for ?" />
              </div>
            </div>
            <div className={css.navbar_right}>
              <div className={css.navbar_language}>
                <span>Arabic</span>
              </div>
              <div className={css.navbar_signIn}>
                <h3>
                  Sign In
                  <span>
                    <BiUser />
                  </span>
                </h3>
              </div>
              <div className={css.navbar_cart}>
                <h3>
                  Cart
                  <span>
                    <BsCart2 />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className={css.subHeader}>
          <div className={css.subHeader_wrapper}>
            <div className={css.subHeader_left}>
              <h1>
                ALl Categories
                <span>
                  <IoMdArrowDropdown />
                </span>
              </h1>
            </div>
            <div className={css.subHeader_center}>
              <div className={css.menu}>
                <ul>
                  {Menu.map((item, i) => {
                    return <li key={i}>{item.title}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className={css.subHeader_right}>
              <div className={css.subHeader_logo}>
                <Image src={HeaderLogo} alt="Logo" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
        {/* DropDown */}
        <div className={css.subMenu}>
          <div className={css.subMenu_wrapper}>
            <div className={css.subMenu_Box}></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
