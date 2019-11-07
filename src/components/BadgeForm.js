import React from "react";

class BadgeForm extends React.Component {

	formSubmitted = e => {
		e.preventDefault();
		let {state} = this

		console.log(state)
	};

  render() {

		let { firstName, lastName, twitter, jobTitle, email } = this.props.formValues;
		const {onChange} = this.props;

    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.formSubmitted}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={onChange}
              className="form-control"
              type="email"
              name="email"
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={twitter}
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
