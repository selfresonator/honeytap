

<div className="name">
              <span className="first-name">
                <TextField
                  hintText="First Name"
                  floatingLabelText="First Name"
                  //value={this.state.firstName}
                />
              </span>
  <span className="last-name">
                <TextField
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  // value={this.state.lastName}
                />
              </span>
</div>
<div className="email">
  <TextField
hintText="Email"
floatingLabelText="Email"
  // value={this.state.email}
  />
  </div>
  <div className="phone">
  <TextField
hintText="Phone Number"
floatingLabelText="Phone Number"
  // value={this.state.phone}
  />
  </div>
  <div className="message">
  <TextField
hintText="Type Your Message Here!"
multiLine={true}
rows={1}
rowsMax={8}
fullWidth={true}
  // value={this.state.message}
  />
  </div>
  <div className="submit">
  <RaisedButton
label="Submit"
  />
  </div>
