import React, { useState, useEffect } from 'react';
import '../pages/Homepage.css';
import '../pages/bootstrap.min.css';
import '../pages/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Resale() { 
    return (
      <div className="App">
        <Header />
        <Navbar/>
        <ContactSectionone/>
        <Resell/>

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

  function ContactSectionone() {
    const [resaleDescription, setredes] = useState('');
    const [resaleName, setrename] = useState('');
    const [resalePrice, setreprice] = useState('');
    const [resaleSeat, setreseat] = useState('');
    
   

    const addRe = () => {
        Axios.post('http://localhost:3000/resale_ticket', {
            resaleDescription,
            resaleName,
            resalePrice,
            resaleSeat
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error("Error adding user:", error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRe();
        
      };

   

      return (
        <section className="contact-section section-padding" id="section_6">
             
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 mx-auto">
                            <h2 className="text-center mb-4">Add your Resell Ticket concert</h2>
                            <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                    <form className="custom-form contact-form mb-5 mb-lg-0" action="#" method="post" role="form">
                                        <div className="contact-form-body">
                                            <div className="row">
                                        
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <label htmlFor='name' className='form-label'>Concert Name</label>
                                                    <input type="text" name="resale_name" id="resale_name" className="form-control" placeholder="Concert Name" onChange={(event)=>{setrename(event.target.value)} } required/>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-12">
                                                <label htmlFor='seat' className='form-label'>Price</label>
                                                    <input type="number" name="price" id="resale_price" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Price" onChange={(event)=>{setreprice(event.target.value)} } required />
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-12">
                                                <label htmlFor='text' className='form-label'>Seat</label>
                                                    <input type="text" name="number_seats" id="number_seats" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Seat" onChange={(event) => {setreseat(event.target.value)}}  required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label htmlFor='text' className='form-label'>Description</label>
                                                <textarea name="resale_description" rows="3" className="form-control" id="resale_description" placeholder="Description" onChange={(event)=>{setredes(event.target.value)} }></textarea>
                                                </div>
                                            <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                                <button type="submit" className="form-control" onClick={handleSubmit}>Summit Concert</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            
                           
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
        
    );
}
  function Resell() {
    const [resale, setResaleTickets] = useState([]); 

    const fetchResale = () => {
        Axios.get('http://localhost:3000/resale_ticketx')
            .then((response) => {
                setResaleTickets(response.data); 
            })
            .catch((error) => {
                console.error("Error fetching resale tickets:", error);
            });
    };

    useEffect(() => {
        fetchResale();
    }, []);


        const backgroundStyle = {
            backgroundColor: "#87CEEB", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        };

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
            background: 'linear-gradient(to right, #7b4397, #dc2430)', // Purple to blue gradient
        };
    
        const ticketHeaderStyle = {
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
            color: '#4a148c', // Dark purple
            padding: '10px',
            borderRadius: '18px 18px 0 0', // Match the curve of the card
            textAlign: 'center',
        };
    
        const ticketBodyStyle = {
            padding: '10px',
            color: '#333',
            backgroundColor: 'rgba(235, 235, 255, 0.9)', // Light purple
            borderRadius: '0 0 18px 18px', // Match the curve of the card
        };
    
        const ticketInfoStyle = {
            marginBottom: '5px',
            color: 'black',
        };
    
        const buyButtonStyle = {
            backgroundColor: '#3f51b5', // Blue color
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
                    <div style={backgroundStyle}>  
                        <div style={ticketCardContentStyle}>
                            {resale.map((resaleTicket) => (
                                <div key={resaleTicket.resale_id} style={ticketCardStyle}>
                                    <div style={ticketHeaderStyle}>
                                        {/* Replace this with actual concert info if available */}
                                    </div>
                                    <div style={ticketBodyStyle}>
                                        <p style={ticketInfoStyle}><strong>Ticket ID:</strong> {resaleTicket.resale_id}</p>
                                        <p style={ticketInfoStyle}><strong>Ticket Name:</strong> {resaleTicket.resale_name}</p>
                                        <p style={ticketInfoStyle}><strong>Description:</strong> {resaleTicket.resale_description}</p>
                                        <p style={ticketInfoStyle}><strong>Seat:</strong> {resaleTicket.resale_price}</p>
                                    </div>
                                    <button style={buyButtonStyle}>
                                        Buy Ticket
                                    </button>
                                </div>
                            ))}
                            </div>
                        </div>
                    );
                }

  export default Resale;