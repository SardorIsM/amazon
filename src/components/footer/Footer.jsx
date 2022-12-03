import React from 'react'
import c from './Footer.module.css'
import FirstFooterInfo from '../../dummy-data-footerFirst.json'
import SecondFooterInfo from '../../dummy-data-footerSecond.json'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className={c.mainFooter}>
      <div className={c.firstFooter}>
        {
          FirstFooterInfo.map((firstInfo) =>
            <div key={uuidv4()} className={c.itemsColons}>
              <h3 className={c.bigTitle}>{firstInfo.title}</h3>
              {
                firstInfo.text.map((info) => (
                  <Link key={uuidv4()} to='/' className={c.infoLink}>{info}</Link>
                ))
              }
            </div>
          )
        }
      </div>
      <div className={c.secondFooter}>
        {
          SecondFooterInfo.map((secondInfo) =>
            <div key={uuidv4()} className={c.secondFooterDiv}>
              {
                secondInfo.map((bigInfo) => (
                  <div key={uuidv4()} className={c.secondFooterColons}>
                    <p>{bigInfo.title}</p>
                    <Link to='/' className={c.secondInfo}>{bigInfo.text}</Link>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
        <p className={c.amazon}>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
    </footer>
  )
}

export default Footer