

import React from 'react';
import './style.css'; 

export const VCutout = ({ triangleColor, imageUrl, h1, text, fontSize }) => {
  return (
    <div className="vCutout">
      <div className='cutout'>
      {imageUrl && <img src={imageUrl} alt="VCutout" className="imageStyle" />}
      <div className="beforeStyle1"></div>
      <div className="beforeStyle2"></div>
      </div>
      <div className="divContainerStyle">
        {h1 && <div className="h1Style">{h1}</div>}
        {text && <div className="textStyle">{text}</div>}
      </div>
    </div>
  );
};
