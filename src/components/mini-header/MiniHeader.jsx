import React from 'react';
import { Link } from 'react-router-dom';
import c from './MiniHeader.module.css';
import { useTranslation } from 'react-i18next';

const MiniHeader = ({setIsSidebarActive}) => {
  const { t } = useTranslation();
  return (
    <div className={c.miniHeader}>
      <button onClick={() => {setIsSidebarActive(true)}}>{t("all2")}</button>
      <Link to='/' className={c.miniHeaderLink}>{t("today's deals")}</Link>
      <Link to='/' className={c.miniHeaderLink}>{t("customer service")}</Link>
      <Link to='/' className={c.miniHeaderLink}>{t("registry")}</Link>
      <Link to='/' className={c.miniHeaderLink}>{t("gift cards")}</Link>
      <Link to='/' className={c.miniHeaderLink}>{t("sell")}</Link>
    </div>
  )
}

export default MiniHeader