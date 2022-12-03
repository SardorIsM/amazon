import logo from '../../assets/images/amazon_logo.webp';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'


function Header({ setIsNavbarSearchActive }) {
  const [selectedOption, setSelectedOption] = useState("all");
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const langs = [
    "uz",
    "ru",
    "en"
  ]


  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value || "uz")
  }


  return (
    <header className="main-header">
      <div className="header__logo-wrapper">
        <a href="/" className="logo__link">
          <img className="header__logo" src={logo} alt="" />
        </a>
      </div>
      <div className="header__delivery-address">
        <HiOutlineLocationMarker className="address-icon" />
        <div className="delivery__location">
          <p>{t("delivery_label")}</p>
          <b>{t("country")}</b>
        </div>
      </div>
      <div className="header__search-wrapper">
        <select className="search__select" style={selectedOption.length <= 7 ? { width: `${selectedOption.length * 14}px` } : { width: `${selectedOption.length * 10}px` }} onChange={(e) => { setSelectedOption(e.target.value) }}>
          <option value="all">{t("all")}</option>
          <option value="laptops">{t("laptops")}</option>
          <option value="personal care">{t("personal care")}</option>
          <option value="toys & babies">{t("toys and baby")}</option>
        </select>
        <input type="text" className="search__input" onBlur={() => { setIsNavbarSearchActive(false) }} onFocus={() => { setIsNavbarSearchActive(true) }} />
        <button>
          <FiSearch />
        </button>
      </div>
      <select onChange={changeWebsiteLang}>
        {
          langs.map(langItem =>
            <option selected={localStorage.getItem("lang") === langItem ? true : false} key={uuidv4()} value={langItem}>{langItem.toUpperCase()}</option>
          )
        }
      </select>
      <div className='sign'>
        <Link to='/signup' className='link'>{t("sign up")}</Link>
      </div>
      <div className='sign'>
        <Link to='/login' className='link'>{t("login")}</Link>
      </div>
    </header>
  );
}

export default Header;
