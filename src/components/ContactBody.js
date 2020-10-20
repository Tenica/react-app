import React from 'react';
import ContactForm from './ContactForm';

const ContactBody = () => {
return    <div>   
<section className="section">
<div className="container">
  <div className="row">
    <div className="col-md-6 mb-5 order-2">

<ContactForm/>
     

    </div>
    <div className="col-md-6 order-2 mb-5">
      <div className="row justify-content-right">
        <div className="col-md-8 mx-auto contact-form-contact-info">
          <p className="d-flex">
            <span className="ion-ios-location icon mr-5"></span>
            <span>4 Kenamo close,Wuse 2, Abuja</span>
          </p>

          <p className="d-flex">
            <span className="ion-ios-telephone icon mr-5"></span>
            <span>+234 70 586 560</span>
          </p>

          <p className="d-flex">
            <span className="ion-android-mail icon mr-5"></span>
            <span>info@trailblazersBrokers.com</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

</div>



}

export default ContactBody