import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';


const Pricing = () => {
  return (
    <div className="container_1">
    <section className="pricing">
      <div className="container">
        <div className="row">
            
          {/* Free card 1 */}
          <div className="col-lg-4 col-md-9 pricing-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Single User
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    5GB Storage
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Demo
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Unlimited Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Phone Support
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Free Sub-Domain
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                   Monthly Status Reports
                  </li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>


          {/* Plus card 2 */}
          <div className="col-lg-4 col-md-9  pricing-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Single User
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    5GB Storage
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Demo
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Unlimited Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Phone Support
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Free Sub-Domain
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                   Monthly Status Reports
                  </li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>


          {/* Pro card  3*/}
          <div className="col-lg-4 col-md-9  pricing-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Single User
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    5GB Storage
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Demo
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Unlimited Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Phone Support
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Free Sub-Domain
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                   Monthly Status Reports
                  </li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     </div>
  );
};

export default Pricing;