import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      contacts: [
        {
          _id: 'dale',
          name: 'Dale Cooper',
          occupation: 'FBI Agent',
          avatar: 'https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg'
        },
        {
          _id: 'spike',
          name: 'Spike Spiegel',
          occupation: 'Bounty Hunter',
          avatar: 'http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337'
        },
        {
          _id: 'wirt',
          name: 'Wirt',
          occupation: 'adventurer',
          avatar: 'http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg'
        },
        {
          _id: 'michael',
          name: 'Michael Myers',
          occupation: 'Loving little brother',
          avatar: 'http://vignette2.wikia.nocookie.net/villains/images/e/e3/MMH.jpg/revision/latest?cb=20150810215746'
        },
        {
          _id: 'dana',
          name: 'Dana Scully',
          occupation: 'FBI Agent',
          avatar: 'https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg'
        }
      ]
    };
  }

  handleSearchBarChange(event) {
    this.setState({
      contacts: this.state.contacts,
      searchText: event.target.value
    })
  }

  getFilteredContacts() {
    // Remove any white space, and convert the searchText to lowercase
    const term = this.state.searchText.trim().toLowerCase();
    const contacts = this.state.contacts;

    // If our term is an empty string, we want to return all of the contacts
    if (!term) {
      return contacts;
    }

    // Filter will return a new array of contacts, the contact will
    // be included in the array if the function returns true,
    // and excluded if the function returns false
    return contacts.filter(contact => {
      return contact.name.toLowerCase().search(term) >= 0;
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
           value={this.state.searchText}
           onChange={this.handleSearchBarChange.bind(this)}
        />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}

export default App;
