import React from 'react'

function Navtab(props) {
  return (

    <div className="nav-item-div" onClick={() => { props.handlenavClick(props.index) }}>
      <span className='nav-item'>{props.navtitle}</span>
    </div>

  )
}

export default Navtab;

//App.jsx  --> navbar.jsx  --> navtab.jsx