import React, { useState } from 'react';
import '../pages/Homepage.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Provider() { 
    return (
      <div className="App">
        <Header />
        <Navbar />
        <ContactSectionone/>
        <ContactSectiontwo/>

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
    const [concert_name, setConName] = useState('');
    const [concert_description, setConDes] = useState('');
    const [date_time, setConDate] = useState('');
    const [total_seats, setSeat] = useState('');
    const [seats_available, setSeatAva] = useState('');
    const [user_id, setUserId] = useState('');
    

    const addCon = () => {
        Axios.post('http://localhost:3000/cons', {
            concert_name,
            concert_description,
            date_time,
            total_seats,
            seats_available,
            user_id
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error("Error adding user:", error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCon();
        
      };
    return (
        <section className="contact-section section-padding" id="section_6">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 mx-auto">
                        <h2 className="text-center mb-4">Provide your concert</h2>
                        <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                <form className="custom-form contact-form mb-5 mb-lg-0" action="#" method="post" role="form">
                                    <div className="contact-form-body">
                                        <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <label htmlFor='seat' className='form-label'>Provider ID</label>
                                                <input type="number" name="user_id" id="user_id" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Seat" onChange={(event) => {setUserId(event.target.value);}}  required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label htmlFor='name' className='form-label'>Concert Name</label>
                                                <input type="text" name="concert_name" id="concert_name" className="form-control" placeholder="Concert Name" onChange={(event)=>{setConName(event.target.value)} } required/>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                            <label htmlFor='date' className='form-label'>Date</label>
                                                <input type="date" name="date_time" id="concert_description" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Date" onChange={(event)=>{setConDate(event.target.value)} } required />
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                            <label htmlFor='seat' className='form-label'>Seat</label>
                                                <input type="number" name="total_seats" id="total_seats" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Seat" onChange={(event) => {setSeat(event.target.value);setSeatAva(event.target.value);}}  required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <label htmlFor='text' className='form-label'>Description</label>
                                            <textarea name="concert_description" rows="3" className="form-control" id="concert_description" placeholder="Description" onChange={(event)=>{setConDes(event.target.value)} }></textarea>
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
function ContactSectiontwo() {
    const [seat_number, setSeatNum] = useState('');
    const [ticket_price, setticpi] = useState('');
    const [ticket_name, setticna] = useState('');
    const [ticket_description, setticdes] = useState('');
    
    

    const addTicket = () => {
        Axios.post('http://localhost:3000/ticket', {
            seat_number,
            ticket_price,
            ticket_name,
            ticket_description

        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error("Error adding user:", error);
        });
    };

    const handleSubmitX = (e) => {
        e.preventDefault();
        addTicket();
        
      };
    return (
        <section className="contact-section section-padding" id="section_6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 mx-auto">
                        <h2 className="text-center mb-4">Provide Ticket</h2>
                        <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                <form className="custom-form contact-form mb-5 mb-lg-0" action="#" method="post" role="form">
                                    <div className="contact-form-body">
                                        <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <label htmlFor='seat' className='form-label'>Ticket Name</label>
                                                <input type="text" name="ticket_name" id="ticket_name" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Ticket Name" onChange={(event) => {setticna(event.target.value);}}  required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <label htmlFor='name' className='form-label'>Ticket Price</label>
                                                <input type="number" name="ticket_price" id="ticket_price" className="form-control" placeholder="Ticket Price" onChange={(event)=>{setticpi(event.target.value)} } required/>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                            <label htmlFor='date' className='form-label'>ticket Description</label>
                                                <textarea type="text" name="ticket_description" id="ticket_description" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Description" onChange={(event)=>{setticdes(event.target.value)} } required />
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                            <label htmlFor='seat' className='form-label'>Seat Number</label>
                                                <input type="number" name="seat_number" id="seat_number" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Seat number" onChange={(event) => {setSeatNum(event.target.value)}}  required />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                            <button type="submit" className="form-control" onClick={handleSubmitX}>Summit Ticket</button>
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
  export default Provider; 