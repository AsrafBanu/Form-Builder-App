import React from 'react';
import './MainFooterSection.css';
import logo from '../../assets/images/logo.svg';

const MainFooterSection = () => {
  const footerColumns = [
    {
      title: 'Product',
      links: ['Status', 'Documentation', 'Roadmap', 'Pricing']
    },
    {
      title: 'Community',
      links: ['Discord', 'GitHub repository', 'Twitter', 'LinkedIn', 'OSS Friends']
    },
    {
      title: 'Company',
      links: ['About', 'Contact', 'Terms of Service', 'Privacy Policy']
    }
  ];

  return (
    <footer className="mainFooter">
      {/* Logo and Brand Section */}
      <div className="mainFooter__top">
        <div className="mainFooter__brandSection">
          <img src={logo} alt="FormBot Logo" className="mainFooter__logo" />
          <div>
            <h4 className="mainFooter__brand">FormBot</h4>
            <p className="mainFooter__credit">Made with ❤️ by Cuvette</p>
          </div>
        </div>

        {/* Footer Columns Section */}
        <div className="mainFooter__columns">
          {footerColumns.map((column, index) => (
            <div key={index} className="mainFooter__column">
              <h4 className="mainFooter__title">{column.title}</h4>
              <ul className="mainFooter__list">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mainFooter__item">
                    <a href="#" className="mainFooter__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MainFooterSection;
