import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Navigation({ activeFormula, setActiveFormula }) {
  const [isOpen, setIsOpen] = useState(false);

  // Organize formulas by category
  const categories = [
    {
      name: 'Earned Value Management',
      formulas: [
        { id: 'evmComprehensive', name: 'EVM - Complete Analysis' },
        { id: 'plannedValue', name: 'Planned Value (PV)' },
        { id: 'earnedValue', name: 'Earned Value (EV)' },
        { id: 'scheduleVariance', name: 'Schedule Variance (SV)' },
        { id: 'costVariance', name: 'Cost Variance (CV)' },
        { id: 'spi', name: 'Schedule Performance Index (SPI)' },
        { id: 'cpi', name: 'Cost Performance Index (CPI)' },
        { id: 'eac', name: 'Estimate at Completion (EAC)' },
        { id: 'etc', name: 'Estimate to Complete (ETC)' },
        { id: 'tcpi', name: 'To Complete Performance Index (TCPI)' },
        { id: 'vac', name: 'Variance at Completion (VAC)' },
        { id: 'burnRate', name: 'Burn Rate' }
      ]
    },
    {
      name: 'Estimation & Scheduling',
      formulas: [
        { id: 'pertTriangular', name: 'PERT - Triangular Distribution' },
        { id: 'pertBeta', name: 'PERT - Beta Distribution' },
        { id: 'standardDeviation', name: 'Standard Deviation' },
        { id: 'float', name: 'Float/Slack' }
      ]
    },
    {
      name: 'Risk & Decision Analysis',
      formulas: [
        { id: 'riskRating', name: 'Risk Rating' },
        { id: 'emv', name: 'Expected Monetary Value (EMV)' }
      ]
    },
    {
      name: 'Communication',
      formulas: [
        { id: 'communicationChannels', name: 'Communication Channels' }
      ]
    },
    {
      name: 'Project Selection',
      formulas: [
        { id: 'npv', name: 'Net Present Value (NPV)' },
        { id: 'roi', name: 'Return on Investment (ROI)' },
        { id: 'bcr', name: 'Benefit Cost Ratio (BCR)' },
        { id: 'paybackPeriod', name: 'Payback Period' }
      ]
    }
  ];

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true
  };

  const handleFormulaClick = (formulaId) => {
    setActiveFormula(formulaId);
    setIsOpen(false); // Close menu after selection
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      {/* Menu Container */}
      <nav className={`navigation-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>PMP Formulas</h2>
          <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="menu-content">
          <Slider {...sliderSettings}>
            {categories.map((category, index) => (
              <div key={index} className="category-slide">
                <h3 className="category-title">{category.name}</h3>
                <ul className="formula-list">
                  {category.formulas.map((formula) => (
                    <li
                      key={formula.id}
                      className={activeFormula === formula.id ? 'active' : ''}
                      onClick={() => handleFormulaClick(formula.id)}
                    >
                      {formula.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
