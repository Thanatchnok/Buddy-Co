import React from 'react';
import { useLocation } from 'react-router-dom';
import './bootstrap.min.css';
import './bootstrap-icons.css';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';


function myticket() {
    return (
      <div className="App">
        <Header />
        <Navbar />
       <App />
      </div>
    );
  }

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 d-flex flex-wrap">
            <p className="d-flex me-4 mb-0">
              <i className="bi-person custom-icon me-2"></i>
              <strong className="text-dark">Welcome to Buddy&Co</strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Navbar() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleReserveClick = (event) => {
    event.preventDefault();
    navigate('/reserve'); // Navigate to the reserve page
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/home'); // Navigate to the reserve page
  };

  const handleResellClick = (event) => {
      event.preventDefault();
      navigate('/resale'); // Navigate to the reserve page
    };

    const handleticketClick = (event) => {
      event.preventDefault();
      navigate("/ticket"); // Navigate to the reserve page
    };
    return (
      <nav className="navbar navbar-expand-lg"  style={{ backgroundColor: 'lightblue' }}>
        <div className="container">
          <a className="navbar-brand" href="/">
            Buddy&Co
          </a>
          <a href="/ticket" className="btn custom-btn d-lg-none ms-auto me-4">Buy Ticket</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
                              <li class="nav-item">
                                  <a class="nav-link click-scroll" href="#" onClick={handleHomeClick}>Home</a>
                              </li>
      
                              <li class="nav-item">
                                  <a class="nav-link click-scroll" href="#section_2" onClick={handleHomeClick}>About</a>
                              </li>
      
                              <li className="nav-item">
                                  <a className="nav-link click-scroll" href="#" onClick={handleReserveClick}>Reserve</a>
                              </li>
  
                              <li class="nav-item">
                                  <a class="nav-link click-scroll" href="#section_4" onClick={handleHomeClick}>Schedule</a>
                              </li>
  
                              <li class="nav-item">
                                  <a class="nav-link click-scroll" href="#"onClick={handleResellClick}>Resell</a>
                              </li>
      
                              <li class="nav-item">
                                  <a class="nav-link click-scroll" href="#section_6" onClick={handleHomeClick}>Contact</a>
                              </li>
                          </ul>
                  
                             
                          <a href="#" onClick={handleticketClick} class="btn custom-btn d-lg-block d-none">My Ticket</a>
                      </div>
        </div>
      </nav>
    );
  }

function App() {

  const location = useLocation();
    // Safely accessing ticketId with a fallback value
  const { ticketId } = location.state || { ticketId: 'Default' };

  // Inline style for the ticket wrap
  const ticketWrapStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjust as needed for layout
    flexWrap: 'wrap', // Wrap items to the next line if they don't fit
  };

  // Inline style for each ticket item
  const ticketItemStyle = {
    width: '30%', // Adjust width for 3 items per row
    margin: '1%', // Add some margin for spacing
    boxSizing: 'border-box', // Include padding and borders in the width
  };


    


  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>My ticket</h1>
      <p style={{ color: 'white' }}>This is all your ticket</p>
      
      <div className="container">
        <div className="ticket-content">
          <div style={ticketWrapStyle}>
            {/* Repeat this structure for each ticket item */}
            <div style={ticketItemStyle}>
              <div className="single-blog-item">
                {/* Ticket item content goes here */}
                <h2><a href="#">Ticket1</a></h2>
                <img className='card-img' src='https://pbs.twimg.com/media/F1N3n7WaAAEV-VL.jpg:large' alt='pics'></img>
                <h4>Buy <span>on</span> Nov 2023</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <button>View</button>
              </div>
            </div>
            {/* Repeat for other tickets */}
            <div style={ticketItemStyle}>
              <div className="single-blog-item">
                {/* Ticket item content goes here */}
                <h2><a href="#">Ticket2</a></h2>
                <img className='card-img' src='https://pbs.twimg.com/media/F1XjgFMaEAIT3TK.jpg:large' alt='pics'></img>
                <h3>Ticket ID :611475</h3>
                <h4>Buy <span>on</span> Nov 2023</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <button>View</button>
              </div>
            </div>
            <div style={ticketItemStyle}>
              <div className="single-blog-item">
                {/* Ticket item content goes here */}
                <h2><a href="#">Ticket3</a></h2>
                <img className='card-img' src='https://pbs.twimg.com/media/F0aXa2EagAEeyfP.jpg:large' alt='pics'></img>
                <h3>Ticket ID :587465</h3>
                <h4>Buy <span>on</span> Nov 2023</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <button>View</button>
              </div>
            </div>
            <div style={ticketItemStyle}>
              <div className="single-blog-item">
                {/* Ticket item content goes here */}
                <h2><a href="#">Ticket4</a></h2>
                <img className='card-img' src='https://f.ptcdn.info/514/076/000/r808bw2ejoW865b4u2iZ-o.jpg' alt='pics'></img>
                <h3>Ticket ID :345867</h3>
                <h4>Buy <span>on</span> Nov 2023</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <button>View</button>
              </div>
            </div>
            {/* Repeat for other tickets */}
            <div style={ticketItemStyle}>
              <div className="single-blog-item">
                {/* Ticket item content goes here */}
                <h2><a href="#">Ticket5</a></h2>
                <img className='card-img' src='https://pbs.twimg.com/media/Fq79qykaUAAvzLP?format=jpg&name=4096x4096' alt='pics'></img>
                <h3>Ticket ID :147586</h3>
                <h4>Buy <span>on</span> Nov 2023</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <button>View</button>
              </div>
            </div>
            <div style={ticketItemStyle}>
              <div className="single-blog-item">
                {/* Ticket item content goes here */}
                <h2><a href="#">Ticket6</a></h2>
                <img className='card-img' src='https://m.media-amazon.com/images/M/MV5BMTE5ZjU5YzQtZjQ4Ni00NzVhLWE3NDQtMTEyNzgzNzU3OTYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg' alt='pics'></img>
                <h3>Ticket ID: {ticketId}</h3>
                <h4>Buy <span>on</span> Nov 2023</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <button>View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default myticket;