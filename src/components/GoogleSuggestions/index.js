import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="card-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              className="google-image"
              alt="google logo"
            />
          </div>
          <div className="suggestion-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul>
              {searchResults.map(eachItem => (
                <SuggestionItem
                  eachItem={eachItem}
                  key={eachItem.id}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
