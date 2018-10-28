import React, {Component} from 'react';
import {FaReact} from 'react-icons/fa';

class Header extends Component{
    state = {
        destinations: [
            "India",
            "Indonesia",
            "Japan",
            "Spain",
            "Germany",
            "Mexico",
            "Thailand",
            "Vietnam"
        ],
        topLists: [
            "Top 10 Travel Destination",
            "Top Asian Destination",
            "South East Asia",
            "Top Asian Beaches",
            "Cheap Countries To Travel"
        ]
    };
    render() {

        return(
          <React.Fragment>
              <header className="header-tag">
                  <div className="header-container">
                      <div className="_nav _db">
                          <nav>
                              <ul className="_ul">
                                  <div className="_db">
                                      <li className="_li _lgmg _db">
                                          <a className="_db"><FaReact size="1.4rem" className="logo-icon" /></a>
                                      </li>
                                      <li className="_db">
                                          <div className="logo _db">Logo</div>
                                      </li>
                                  </div>
                                  <div className="_db _right">
                                      <li className="_li _db _dpdn">
                                          <a>Destinations</a>
                                          <ul className="_ul _iul">
                                              {this.state.destinations.map(destination => <li key={destination}><a>{destination}</a></li>)}
                                          </ul>
                                      </li>
                                      <li className="_li _db _dpdn">
                                          <a>Top List</a>
                                          <ul className="_ul _iul">
                                              {this.state.topLists.map(topListItem => <li key={topListItem}><a>{topListItem}</a></li>)}
                                          </ul>
                                      </li>
                                      <li className="_li _db _dpdn">
                                          <a>Photography</a>
                                      </li>
                                  </div>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </header>
          </React.Fragment>
        );
    }
}

export default Header;