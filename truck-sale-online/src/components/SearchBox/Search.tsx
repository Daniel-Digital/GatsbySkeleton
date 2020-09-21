import React from 'react';
import Autosuggest from 'react-autosuggest';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from '@/styled';
import { css } from '@emotion/core';

const Container = styled.div`
  position: absolute;
  top: 210px;
  left: 50%;
  transform: translateX(-50%);
`;

const getSuggestionValue = (suggestion: any) => suggestion.name;

const renderSuggestion = (suggestion: any) => (
  <div css={css``}>{suggestion.name}</div>
);

type Props = {
  placeholder: string;
  suggestions: Record<string, unknown>[];
};

type State = {
  value: string;
  suggestions: Record<string, unknown>[];
};

class Search extends React.Component<Props, State> {
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

  getSuggestions = (value: any) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const suggestions =
      inputLength === 0
        ? this.props.suggestions
        : this.props.suggestions.filter(
            (suggestion) =>
              (suggestion.name as String)
                .toLowerCase()
                .slice(0, inputLength) === inputValue,
          );

    return suggestions.length === 0 ? this.props.suggestions : suggestions;
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
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
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Container>
        <div
          css={css`
            border-left: 1px inset rgb(118, 118, 118, 0.1);
            .react-autosuggest__input {
              flex: 1;
              outline: none;
              margin-right: 10px;
              padding: 5px 10px;
            }
            ul {
              padding-left: 5px;
              padding-top: 5px;
              list-style: none;
            }
          `}
        >
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </div>
        <AiOutlineSearch
          size={22}
          css={css`
            position: absolute;
            top: 3px;
            right: -20px;
          `}
        />
      </Container>
    );
  }
}

export default Search;
