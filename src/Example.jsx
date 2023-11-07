import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';


const Pricing = ({details}) => {
  return (
           <> 
          {/* Free card 1 */}
          
          <div className="col-lg-4 col-md-9 pricing-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{details.title}</h5>
                <h6 className="card-price text-center">$<span className="period">{details.amount}/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                   {details.user}
                  </li>
                  <li>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    {details.storage}
                  </li>
                  <li>
                    <span className="fa-li">
                    {details.amt ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCheck} />}
                    </span>
                    {details.public_projects}
                  </li>
                  <li>
                    <span className="fa-li">
                    {details.paid ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCheck} />}
                    </span>
                    {details.access}
                  </li>
                  <li>
                    <span className="fa-li">
                    {details.amt ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCheck} />}
                    </span>
                    {details.sub_domain}
                  </li>
                  <li>
                    <span className="fa-li">
                    {details.paid ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCheck} />}
                    </span>
                    {details.status}
                  </li>
                </ul>
                <div className="d-grid">
                  <button  className="btn btn-primary text-uppercase">Buy</button>
                </div>
              </div>
            </div>
          </div>

          </>   
  );
};

export default Pricing;