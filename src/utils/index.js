import c from './index.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Backtotop = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div onClick={scrollToTop} className={c.backtotop}>
      <p>{t("top")}</p>
    </div>
  )
}

const Overlay = ({callback, type}) => {
  return(
    <div onClick={() => {callback(false)}} className={c.overlay} style={type === "navbar" ? {top: "110px"} : null}></div>  
  )
}

export { Backtotop, Overlay } 