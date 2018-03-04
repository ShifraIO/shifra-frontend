import React from 'react';
import Iframe from 'react-iframe'
import './Video.css';

const Video = props => {
  return (
    <div className='intrinsic-container'>
			<Iframe
				url={props.url}
				allowFullScreen />
		</div>
  )
}

export default Video