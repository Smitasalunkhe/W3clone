import './NavshowContainer.css';

function NavshowContainer(props) {
  return (
    <div className="nav-main-container">
      <h1>{props.navtitle}</h1>
      <div>
        {props.navcontent}
      </div>
    </div>
  )
}

export default NavshowContainer;
