import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class SearchForm extends Component {
    state = {
        text: ''
    }

    handleOnChange = (e) => {
        const text = e.target.value;
        this.setState({ text })
    };

    handleOnSubmit = (e) => {
        const { text } = this.state;
        e.preventDefault();
        this.props.handleSearchFormText(text)
        this.setState({ text: '' })
    };

    render() {
        const { text } = this.state;
        return (
            <form className="search-form" onSubmit={this.handleOnSubmit}>
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <Input
                            className="input input-bg"
                            type="text"
                            placeholder="Images"
                            value={text}
                            onChange={this.handleOnChange}
                        />
                    </p>
                    <p className="control">
                        <Button className="search">Search</Button>
                    </p>
                </div>
            </form>
        )
    }
};

export default SearchForm;