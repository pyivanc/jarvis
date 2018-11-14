import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';


class Header extends React.Component<RouteComponentProps, any> {
    render() {
        const { location } = this.props;
        const path = location.pathname;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand" href="#">Jarvis</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${path === '/todos' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/todos">TODO lists</Link>
                        </li>
                        <li className={`nav-item ${path === '/profiles' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/profiles">Profiles</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);
