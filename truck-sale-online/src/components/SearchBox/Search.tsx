import React from 'react';
import Autosuggest from 'react-autosuggest';
import styled from '@/styled';

const Container = styled.div`
  position: absolute;
  top: 210px;
  width: 100%;
  text-align: center;
  outline: none;

  .react-autosuggest__input {
    width: 75%;
  }
`;

const trucks = [
  {
    name: 'Whatever',
    year: '1922',
  },
];

const getSuggestions = (value: any) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : trucks.filter(
        (truck) =>
          truck.name.toLowerCase().slice(0, inputLength) === inputValue,
      );
};

const getSuggestionValue = (suggestion: any) => suggestion.name;

const renderSuggestion = (suggestion: any) => <div>{suggestion.name}</div>;

class Search extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a truck manufacturer',
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Container>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </Container>
    );
  }
}

export default Search;
