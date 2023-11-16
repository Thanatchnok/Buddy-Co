import React from 'react';
import '../pages/bootstrap.min.css';
import '../pages/bootstrap-icons.css';
import '../pages/Homepage.css';
import customVideo from '../pages/video/pexels-2022395.mp4';
import { useNavigate } from 'react-router-dom';



function HomePage() { 
  return (
    <div className="App">
      <Header />
      <div className="video-background">
        <VideoBackground />
        <Navbar />
        <HeroSection />
      </div>
      <AboutSection />
      <ArtistsSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
      {/* Note that Bootstrap's JavaScript and other JS files should be imported or used as React components */}
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

  function VideoBackground() {
    return (
      <video autoPlay loop muted className="custom-video" poster="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0', zIndex: '-1' }}>
        <source src={customVideo} type="video/mp4" />
      </video>
    );
  }


  function Navbar() {
    const navigate = useNavigate();
  
    // Function to handle navigation
    const handleReserveClick = (event) => {
      event.preventDefault();
      navigate('/reserve'); // Navigate to the reserve page
    };

    const handleResellClick = (event) => {
        event.preventDefault();
        navigate('/resale'); // Navigate to the reserve page
      };

      const handleticketClick = (event) => {
        event.preventDefault();
        navigate("/ticket"); // Navigate to the reserve page
      };

      const handleProviderClick = (event) => {
        event.preventDefault();
        navigate("/provider"); // Navigate to the reserve page
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
                                <a class="nav-link click-scroll" href="#section_1">Home</a>
                            </li>
    
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_2">About</a>
                            </li>
    
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#" onClick={handleReserveClick}>Reserve</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_4">Schedule</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#"onClick={handleResellClick}>Resell</a>
                            </li>
    
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#"onClick={handleProviderClick}>Provider</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_6">Contact</a>
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


// Define the other sections similarly, filling in the content as above

function AboutSection() {
    return (
        <section className="about-section section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                <div className="services-info">
                  <h2 className="text-white mb-4">About Buddy&Co</h2>
                  <p className="text-white">"Welcome to Buddy&Co – Revolutionizing Your Concert Experience with Social Connections! Our cutting-edge web application seamlessly integrates concert ticket reservations with powerful social networking features, building a vibrant and constantly growing community of concert enthusiasts."</p>
                  <h6 className="text-white mt-4">Combines concert ticket reservations with social networking features</h6>
                  <p className="text-white">The platform aims to enhance the overall concert-going experience by making it easier for people to connect with others who share their musical interests.</p>
                  <h6 className="text-white mt-4">"Buddy & Co" serves a wide range of key users and stakeholders</h6>
                  <p className="text-white">Please tell your friends about our website. Thank you.</p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="about-text-wrap">
                <img src="https://i.pinimg.com/564x/75/a0/ff/75a0ff713dc46245711e8de9776e5078.jpg" className="about-image img-fluid" alt="Festival Experience"/>
                  <div className="about-text-info d-flex">
                    <div className="d-flex">
                      <i className="about-text-icon bi-person"></i>
                    </div>
                    <div className="ms-4">
                      <h3>a happy moment</h3>
                      <p className="mb-0">your amazing festival experience with us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

function ArtistsSection() {
    return (
        <section className="artists-section section-padding" id="section_3">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 text-center">
                        <h2 className="mb-4">Meet Artists</h2>
                    </div>

                    <div className="col-lg-5 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img src="https://pbs.twimg.com/media/F1N3n7WaAAEV-VL.jpg:large" className="artists-image img-fluid" alt="Billkin Tempo Concert"/>
                            </div>

                            <div className="artists-hover">
                                <p><strong>Name:</strong> Billkin Tempo Concert</p>
                                <p><strong>Date:</strong> November 4-5, 2023</p>
                                <p><strong>Music:</strong> Pop, R&amp;B</p>
                                <hr/>
                                <p className="mb-0"><strong>Youtube Channel:</strong> <a href="#">Billkin Entertainment Official</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img src="https://pbs.twimg.com/media/F1XjgFMaEAIT3TK.jpg:large" className="artists-image img-fluid" alt="4 Queen Concert"/>
                            </div>

                            <div className="artists-hover">
                                <p><strong>Name:</strong> 4 Queen Concert</p>
                                <p><strong>Date:</strong> October 7-8, 2023</p>
                                <p><strong>Music:</strong> Country</p>
                                <hr/>
                                <p className="mb-0"><strong>Youtube Channel:</strong> <a href="#">The Concert Official</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ScheduleSection() {
    return (
        <section className="schedule-section section-padding" id="section_4">
            <div className="container">
                <div className="row">

                    <div className="col-12 text-center">
                        <h2 className="text-white mb-4">Event Schedule</h2>

                        <div className="table-responsive">
                            <table className="schedule-table table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Friday</th>
                                        <th scope="col">Saturday</th>
                                        <th scope="col">Sunday</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th scope="row">Day 1</th>
                                        <td className="table-background-image-wrap pop-background-image">
                                            <h3>Pop Night</h3>
                                            <p className="mb-2">6:30 - 10:00 PM</p>
                                            <p>By Adele</p>
                                            <div className="section-overlay"></div>
                                        </td>
                                        <td style={{ backgroundColor: "#F3DCD4" }}></td>
                                        <td className="table-background-image-wrap rock-background-image">
                                            <h3>Rock & Roll</h3>
                                            <p className="mb-2">7:00 - 11:00 PM</p>
                                            <p>By Rihana</p>
                                            <div className="section-overlay"></div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Day 2</th>
                                        <td style={{ backgroundColor: "#ECC9C7" }}></td>
                                        <td>
                                            <h3>DJ Night</h3>
                                            <p className="mb-2">6:30 - 9:30 PM</p>
                                            <p>By Rihana</p>
                                        </td>
                                        <td style={{ backgroundColor: "#D9E3DA" }}></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Day 3</th>
                                        <td className="table-background-image-wrap country-background-image">
                                            <h3>Country Music</h3>
                                            <p className="mb-2">4:30 - 7:30 PM</p>
                                            <p>By Rihana</p>
                                            <div className="section-overlay"></div>
                                        </td>
                                        <td style={{ backgroundColor: "#D1CFC0" }}></td>
                                        <td>
                                            <h3>Free Styles</h3>
                                            <p className="mb-2">6:00 - 10:00 PM</p>
                                            <p>By Members</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section className="contact-section section-padding" id="section_6">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 mx-auto">
                        <h2 className="text-center mb-4">Interested? Let's talk</h2>

                        <nav className="d-flex justify-content-center">
                            <div className="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-ContactForm-tab" data-bs-toggle="tab" data-bs-target="#nav-ContactForm" type="button" role="tab" aria-controls="nav-ContactForm" aria-selected="false">
                                    <h5>Contact Form</h5>
                                </button>

                                <button className="nav-link" id="nav-ContactMap-tab" data-bs-toggle="tab" data-bs-target="#nav-ContactMap" type="button" role="tab" aria-controls="nav-ContactMap" aria-selected="false">
                                    <h5>Google Maps</h5>
                                </button>
                            </div>
                        </nav>

                        <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                <form className="custom-form contact-form mb-5 mb-lg-0" action="#" method="post" role="form">
                                    <div className="contact-form-body">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <input type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Full name" required />
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                                <input type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                                            </div>
                                        </div>

                                        <input type="text" name="contact-company" id="contact-company" className="form-control" placeholder="Company" required />

                                        <textarea name="contact-message" rows="3" className="form-control" id="contact-message" placeholder="Message"></textarea>

                                        <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                            <button type="submit" className="form-control">Send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="nav-ContactMap" role="tabpanel" aria-labelledby="nav-ContactMap-tab">
                                <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy" width="100%" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
    <footer className="site-footer">
            <div className="site-footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <h2 className="text-white mb-lg-0">Buddy&Co</h2>
                        </div>

                        <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                            <ul className="social-icon d-flex justify-content-lg-end">
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link">
                                        <span className="bi-twitter"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link">
                                        <span className="bi-apple"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link">
                                        <span className="bi-instagram"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link">
                                        <span className="bi-youtube"></span>
                                    </a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link">
                                        <span className="bi-pinterest"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mb-4 pb-2">
                        <h5 className="site-footer-title mb-3">Links</h5>

                        <ul className="site-footer-links">
                            {/* Dynamic links can be inserted here */}
                        </ul>
                    </div>

                    <div className="col-md-6 col-12 mb-4 mb-lg-0">
                        <h5 className="site-footer-title mb-3">Member</h5>
                        <a href="tel: 090-080-0760" class="text-white">
                                6322770213 Suttipat Tiempai                             
                            </a>
                            <a href="tel: 090-080-0760" class="text-white">
                                6322770262 Peeraya Uythavornying                            
                            </a>
                            <a href="tel: 090-080-0760" class="site-footer-link">
                                6322770338 Patnaree Chinwiwatkul                             
                            </a>
                            <a href="tel: 090-080-0760" class="site-footer-link">
                                6322772599 Chayut Mookdaanan                             
                            </a>
                            <a href="tel: 090-080-0760" class="site-footer-link">
                                6322773894 Thanatchanok Kitprasarn                             
                            </a>
                    </div>
                </div>
            </div>
            <div className="site-footer-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-12 mt-5">
                            <p className="copyright-text">Copyright © 2030 Buddy&Co</p>
                        </div>

                        <div className="col-lg-8 col-12 mt-lg-5">
                            <ul className="site-footer-links">
                                {/* Additional footer links can be inserted here */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default HomePage; 