import React, { useState, useEffect } from 'react';
import './FlightBanner.css'; // We'll create this CSS file next

const FlightBanner = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState('flight');
  const [tripType, setTripType] = useState('one-way');
  const [fromLocation, setFromLocation] = useState('DAC, Hazrat Shahjalal International Airport');
  const [toLocation, setToLocation] = useState('CXB, Cox\'s Bazar Airport');
  const [journeyDate, setJourneyDate] = useState('14 Jul/25 Monday');
  const [travelerCount, setTravelerCount] = useState(1);
  const [travelClass, setTravelClass] = useState('Economy');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flight-banner-container ${isSticky ? 'sticky' : ''}`}>
      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button 
          className={activeTab === 'flight' ? 'active' : ''} 
          onClick={() => setActiveTab('flight')}
        >
          Flight
        </button>
        <button 
          className={activeTab === 'hotel' ? 'active' : ''} 
          onClick={() => setActiveTab('hotel')}
        >
          Hotel
        </button>
        <button 
          className={activeTab === 'tour' ? 'active' : ''} 
          onClick={() => setActiveTab('tour')}
        >
          Tour
        </button>
        <button 
          className={activeTab === 'visa' ? 'active' : ''} 
          onClick={() => setActiveTab('visa')}
        >
          Visa
        </button>
      </div>

      {/* Flight Search Form */}
      <div className="flight-search-form">
        {/* Trip Type Selection */}
        <div className="trip-type">
          <button 
            className={tripType === 'one-way' ? 'active' : ''} 
            onClick={() => setTripType('one-way')}
          >
            One Way
          </button>
          <button 
            className={tripType === 'round-way' ? 'active' : ''} 
            onClick={() => setTripType('round-way')}
          >
            Round Way
          </button>
          <button 
            className={tripType === 'multi-city' ? 'active' : ''} 
            onClick={() => setTripType('multi-city')}
          >
            Multi City
          </button>
        </div>

        {/* Location Inputs */}
        <div className="location-inputs">
          <div className="input-group">
            <label>FROM</label>
            <input 
              type="text" 
              value={fromLocation} 
              onChange={(e) => setFromLocation(e.target.value)} 
            />
          </div>
          <div className="swap-locations">
            <button>⇄</button>
          </div>
          <div className="input-group">
            <label>TO</label>
            <input 
              type="text" 
              value={toLocation} 
              onChange={(e) => setToLocation(e.target.value)} 
            />
          </div>
        </div>

        {/* Date and Traveler Info */}
        <div className="date-traveler-info">
          <div className="input-group">
            <label>JOURNEY DATE</label>
            <input 
              type="text" 
              value={journeyDate} 
              onChange={(e) => setJourneyDate(e.target.value)} 
            />
          </div>
          {tripType === 'round-way' && (
            <div className="input-group">
              <label>RETURN DATE</label>
              <input 
                type="text" 
                value="Select return date" 
                readOnly 
              />
            </div>
          )}
          <div className="input-group">
            <label>TRAVELER, CLASS</label>
            <input 
              type="text" 
              value={`${travelerCount} Traveler, ${travelClass}`} 
              readOnly 
            />
          </div>
        </div>

        {/* Search Button */}
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default FlightBanner;