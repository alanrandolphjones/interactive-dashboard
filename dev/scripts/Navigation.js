import React from 'react';

const Navigation = (props) => {
    
    return (
        <section className="nav">
            <ul className="nav__ul">
                <li className="nav__li">
                    {/* Make Notifications dynamic in Span */}
                    <a className="nav__link" href="#"><i className="fas fa-map-marker-alt"></i> Check In <span className="nav__link--notifications">{props.NavigationData.notifications}</span></a>
                </li>
                <li className="nav__li">
                    <a className="nav__link" href="#"><i className="fas fa-heart"></i> Events</a>
                </li>
                <li className="nav__li">
                    <a className="nav__link nav__link--active" href="#"><i className="fas fa-user"></i> Account</a>
                </li>
                <li className="nav__li">
                    <a className="nav__link" href="#"><i className="fas fa-cog"></i> Settings</a>
                </li>
            </ul>
        </section>
    )
}

export default Navigation;