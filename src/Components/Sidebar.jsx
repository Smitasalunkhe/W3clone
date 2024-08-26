import './Sidebar.css';
import Tab from './Tab';

function Sidebar(props) {


    return (
        <div className="sidebar">
            <div>
                <div>
                    <h3>React Tutorial</h3>
                </div>
                <Tab title="React Introduction" handleClick={() => { props.handleClick(0) }}></Tab>
                <Tab title="Get started" handleClick={() => { props.handleClick(1) }}></Tab>
                <Tab title="React render component" handleClick={() => { props.handleClick(2) }}></Tab>
                <Tab title="React JSX" handleClick={() => { props.handleClick(3) }}></Tab>
                <Tab title="React ES6" handleClick={() => { props.handleClick(4) }}></Tab>
                <Tab title="React Render HTML" handleClick={() => { props.handleClick(5) }}></Tab>
                <Tab title="React Props" handleClick={() => { props.handleClick(6) }}></Tab>
                <Tab title="React Events" handleClick={() => { props.handleClick(7) }}></Tab>
                <Tab title="React Upgrade" handleClick={() => { props.handleClick(8) }}></Tab>
                <Tab title="React Class" handleClick={() => { props.handleClick(9) }}></Tab>
                <Tab title="React Conditionals" handleClick={() => { props.handleClick(10) }}></Tab>
                <Tab title="React List" handleClick={() => { props.handleClick(11) }}></Tab>
                <Tab title="React Forms" handleClick={() => { props.handleClick(12) }}></Tab>
                <Tab title="React Router" handleClick={() => { props.handleClick(13) }}></Tab>
                <Tab title="React Memo" handleClick={() => { props.handleClick(14) }}></Tab>
                <Tab title="React CSS Styling" handleClick={() => { props.handleClick(15) }}></Tab>
                <Tab title="React Saas Styling" handleClick={() => { props.handleClick(16) }}></Tab>
            </div>

        </div>
    );
}

export default Sidebar;





/* <div className='sidebar-item-div' onClick={() => { props.handleClick(0) }}>
               <span className='sidebar-item'> Introduction </span>
           </div>

           <div className='sidebar-item-div' onClick={() => { props.handleClick(1) }}>
               <span className='sidebar-item'> GetStarted </span>
           </div>

           <div className='sidebar-item-div' onClick={() => { props.handleClick(2) }}>
               <span className='sidebar-item'> React Render Component </span>
           </div>

           <div className='sidebar-item-div' onClick={() => { props.handleClick(3) }}>
               <span className='sidebar-item'> React JSX </span>
           </div> */























/*
           <div className='sidebar-item-div'> <span className='sidebar-item'> Syntax </span> </div>
           <div className='sidebar-item-div'> <span className='sidebar-item'> Comments </span> </div>
           */