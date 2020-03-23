import React, { Component } from "react";
import axios from "axios";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    sent: false,
    buttonText: "Send Message"
  };
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      buttonText: "...sending"
    });

    axios
      .post({
        url: "http://localhost:9000/send",
        data: this.state
      })
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      buttonText: "Message Sent"
    });
  }

  render() {
    return (
      <div>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={this.state.subject}
              onChange={this.onSubjectChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {this.state.buttonText}
          </button>
        </form>
      </div>
    );
  }
}
