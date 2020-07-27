import React, { Component } from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import "../../Common/Styles.css";
import axios from "../../../axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const initialState = {
  event: {
    img: "",
    title: "",
    body: "",
    date: "",
    time: "",
    address: "",
    participants: "",
  },
};

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(JSON.stringify(initialState));

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmmit = this.handleSubmmit.bind(this);
  }
  onOpen = () => {
    this.props.openClick();
  };
  onClose = () => {
    this.props.closeClick();
  };

  handleChange = (e) => {
    let event = this.state.event;

    event[e.target.name] = e.target.value;

    this.setState({ event: event });
  };
  // handleChangeAddress = (address) => {
  //   this.setState({ address });
  //   console.log(this.state.address, "adresa");
  // };

  handleChangeAddress = (address) => {
    this.setState({ address });
  };
  takeSelect = (e) => {
    const cacat = e.target.innerHTML;
    this.setState({ mortiitai: cacat });
    console.log(this.state, "4444", e.target.innerHTML);
  };
  handleSubmmit = (e) => {
    e.preventDefault();
    console.log(this.state.event, "pe submit");
    axios
      .post("/events", this.state.event)
      .then((response) => {
        console.log(response, "postResponse");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <Modal
        closeIcon
        open={this.props.open}
        onOpen={this.onOpen}
        onClose={this.onClose}
        dimmer={true}
      >
        <Header content={this.props.title} />

        <Modal.Content>
          <form
            id="eventform"
            className="form-inputs"
            onSubmit={this.handleSubmmit}
          >
            <label htmlFor="name">Name</label>
            <input
              name="title"
              type="text"
              onChange={this.handleChange}
              placeholder="Name"
              required
            />

            <div className="grid-2-col">
              <div>
                <label htmlFor="date">Date</label>
                <input
                  name="date"
                  type="date"
                  placeholder="Pick Date"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="Time">Time</label>
                <input
                  name="time"
                  type="time"
                  placeholder="Pick Time"
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* <label htmlFor="location">Location</label>
            <input
              id="pac-input"
              name="address"
              type="text"
              onChange={this.handleChange}
              placeholder="Location"
              required
            /> */}

            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChangeAddress}
              onSelect={this.handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    // name="address"
                    {...getInputProps({
                      placeholder: "Search Places ...",
                      className: "location-search-input",
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span onClick={this.takeSelect}>
                            {suggestion.description}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>

            <label htmlFor="description">Description</label>
            <textarea
              rows="6"
              name="body"
              type="textarea"
              placeholder="Description"
              required
              onChange={this.handleChange}
            />

            <div className="invite-members">
              <Button color="blue">invite members</Button>
              <p>(Optional)</p>
            </div>
            <label htmlFor="upload">Event Cover</label>
            <input name="upload" type="file" placeholder="Upload File" />
          </form>
        </Modal.Content>

        <Modal.Actions className="form-btns">
          <Button color="black">delete</Button>
          <Button color="red">Cancel</Button>
          <Button color="green" value="submit" form="eventform">
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default AddEvent;
