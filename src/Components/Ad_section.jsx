import './Ad_section.css';
import img1 from '../images/swiggyads.jpeg';
import img2 from '../images/beautyAd.jpeg';

function Ad_section() {

  return (
    <div className="add-container">
      <div className='swiggy-img-container'>
        <img src={img1} height="300px" width="220px"></img>
      </div>
      <div className='swiggy-img-container'>
        <img src={img2} height="300px" width="220px"></img>
      </div>
    </div>
  )
}

export default Ad_section;
