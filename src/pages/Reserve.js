import React, { useState, useEffect } from 'react';
import '../pages/Homepage.css';
import '../pages/bootstrap.min.css';
import '../pages/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Reserve() { 
    return (
      <div className="App">
        <Header />
        <Navbar/>
        <TicketCard
    concertName="Rock Night 2023"
    concertDescription="The biggest rock concert of the year."
    ticketId="123456"
    ticketName="VIP Pass"
    ticketDescription="Access to all areas"
    seat="A-10"
/>

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

function HeroSection() {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <small>Buddy&Co Presents</small>
            <h1 className="text-white mb-5">Tempo Concert 2023</h1>
            <a className="btn custom-btn smoothscroll" href="#section_2">Let's begin</a>
          </div>
          <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
            <div className="date-wrap">
              <h5 className="text-white">
                <i className="custom-icon bi-clock me-2"></i>
                4 - 5<sup>th</sup>, Nov 2023
              </h5>
            </div>
            <div className="location-wrap mx-auto py-3 py-lg-0">
              <h5 className="text-white">
                <i className="custom-icon bi-geo-alt me-2"></i>
                Impact Arena Muengthongthani
              </h5>
            </div>
            <div className="social-share">
              <ul className="social-icon d-flex align-items-center justify-content-center">
                <span className="text-white me-3">Share:</span>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter"></a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


        function TicketCard() {

            const [concerts, setConcerts] = useState([]);
            const [tickets, setTickets] = useState([]);
            const navigate = useNavigate();

            const handleClick = (ticketId) => {
                
                navigate("/ticket", { state: { ticketId: ticketId } });
            };

            const fetchConcerts = () => {
                Axios.get('http://localhost:3000/concerts')
                    .then((response) => {
                        setConcerts(response.data);
                    })
                    .catch((error) => {
                        console.error("Error fetching concerts:", error);
                    });
            };
            const fetchTickets = () => {
                Axios.get('http://localhost:3000/tickets')
                    .then((response) => {
                        setTickets(response.data);
                    })
                    .catch((error) => {
                        console.error("Error fetching tickets:", error);
                    });
            };
            useEffect(() => {
                fetchConcerts(); 
                fetchTickets();
            }, []);

            const ticketCardContentStyle = {
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'flex-start', 
                alignItems: 'center',
            };

            
            const ticketCardStyle = {
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                margin: '10px',
                width: '300px',
                borderRadius: '20px', // More pronounced curve
                background: 'linear-gradient(to right, #ff8a8a, #ffc58a, #ffff8a, #8aff8a, #8ac5ff, #8a8aff, #c58aff)', 
                
            };
            
            const ticketHeaderStyle = {
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
                color: 'black',
                padding: '10px',
                borderRadius: '18px 18px 0 0', // Match the curve of the card
                textAlign: 'center',
            };
            
            const ticketBodyStyle = {
                padding: '10px',
                color: '#333',
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly more opaque than the header
                borderRadius: '0 0 18px 18px', // Match the curve of the card
            };
            
            const ticketInfoStyle = {
                marginBottom: '5px',
                color: 'black',
            };
            
            const buyButtonStyle = {
                backgroundColor: '#28a745', // Green color
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
                fontWeight: 'bold',
                fontSize: '1em',
                outline: 'none',
            };
        
            return (
                <div>
                     <div style={ticketCardContentStyle}>
                    {tickets.map((ticket, index) => (
                        <div key={ticket.ticket_id} style={ticketCardStyle}>
                            <div style={ticketHeaderStyle}>
                                {/* Display corresponding concert info if available */}
                                <h3>{concerts[index] ? concerts[index].concert_name : 'Concert Name'}</h3>
                                <p>{concerts[index] ? concerts[index].concert_description : 'Concert Description'}</p>
                            </div>
                            <div style={ticketBodyStyle}>
                                <p style={ticketInfoStyle}><strong>Ticket ID:</strong> {ticket.ticket_id}</p>
                                <p style={ticketInfoStyle}><strong>Ticket Name:</strong> {ticket.ticket_name}</p>
                                <p style={ticketInfoStyle}><strong>Description:</strong> {ticket.ticket_description}</p>
                                <p style={ticketInfoStyle}><strong>Seat:</strong> {ticket.seat_number}</p>
                            </div>
                            <button
                            style={buyButtonStyle}
                            onClick={() => handleClick(ticket.ticket_id)} // Pass the ticket ID to the handleClick function
                        >
                            Buy Ticket
                        </button>
                        </div>
                    ))}
                    </div>
                </div>
            );
        }
        
        
    

  export default Reserve;