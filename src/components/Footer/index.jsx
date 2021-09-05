import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content text-center">
                    <ul className="footer__social d-flex justify-content-center gap-4">
                        <li>
                            <Link to="https://www.linkedin.com/in/huy-tran-57777b202/">
                                <span className="icon-linkedin"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/huy-tran-57777b202/">
                                <span className="icon-github"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/huy-tran-57777b202/">
                                <span className="icon-dribble"></span>
                            </Link>
                        </li>
                    </ul>
                    <div className="footer__rules">
                        <p>
                            For business inquiry please send email to huyyntran@gmail.com <br />
                            © 2021 Tran Quoc Huy, all rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;