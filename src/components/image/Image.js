import React from 'react';
require('./Image.css')

const Image = props => {
  const srcDesktop = props.img.desktop;
  const srcMobile = props.img.mobile;
  const pdf = props.img.pdf;

  return (
    <div className="image-container">
      <a href={pdf}><img alt="" className="image-desktop" src={srcDesktop}/></a>
      <a href={pdf}><img alt="" className="image-mobile" src={srcMobile}/></a>
    </div>
  )
}

export default Image;