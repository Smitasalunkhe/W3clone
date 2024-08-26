import './Main.css';

function Main(props) {
  return (
    <div className="main-container">
      <h2>{props.title}</h2>
      <div className='content-div'>
        <p>{props.content}</p>
      </div>

      {/* <h2>{props.navtitle}</h2>
      <div>
        <p>{props.navcontent}</p>
      </div> */}

    </div>
  )
}

export default Main;

