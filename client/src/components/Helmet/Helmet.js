import React from 'react'

const Helmet = (props) => {

  if (props.title === 'about') {
    document.title = "About Quixfye"
  } else {
    document.title = 'Quixfye ' + props.title
  }
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Helmet