import './Tab.css';
function Tab(props) {
  return (
    <div className="tab-div" onClick={() => { props.handleClick(props.idx) }}>

      <span className="tab-title">{props.title}</span>

    </div>
  )
}

export default Tab;

//App.jsx  -->  sidebar.jsx   ---> Tab.jsx    