import React, { Component } from "react";
import ReactContactForm from "react-mail-form";

export default class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="contactinfo">
          <h3>KDesign</h3>
          <p>Konstantin Dauer</p>
          <p>
            Stahlheimer Straße 4 <br />
            10439 Berlin
          </p>
          <p>
            Mail: <a href="mail@konstantindauer.de">mail@konstantindauer.de</a>
          </p>
          <p>
            Phone: <a href="tel:+4915785554816">+49 (0) 1578 555 48 16</a>
          </p>
        </div>
        <ReactContactForm
          className="Form"
          to="mail@konstantindauer.de"
          titlePlaceholder="Subject"
          contentsPlaceholder="message..."
        />
      </div>
    );
  }
}
