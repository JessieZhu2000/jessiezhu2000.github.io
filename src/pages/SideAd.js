import React from 'react'

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <div className='ad'>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-3367810774168777'
          data-ad-slot='3367810774168777'
          data-adtest='on'
          data-ad-format='auto' />
      </div>
    );
  }
}