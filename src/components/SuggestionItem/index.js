import './index.css'

const SuggestionItem = props => {
  const {eachItem, updateSearchInput} = props
  const {suggestion} = eachItem

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-input-container">
      <p className="suggestion">{suggestion}</p>
      <button
        className="arrow-button"
        type="button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow icon"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
