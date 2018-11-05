import * as React from 'react';
import styled from 'styled-components';

const InputEdit = styled.input`
    width: 100%;
    padding: 0;
    border-width: 0;
    border-bottom-width: 1px;
`;

const InputView = styled.div`
    height: 100%;
    min-height: 30px;
    display: flex;
    align-items: center;
`;

interface PropTypes {
    onSubmit: (value: InputValue) => any;
    value: InputValue;
    className: string;
}

interface StateTypes { 
    viewMode: boolean;
    value: InputValue;
}

class EditableInput extends React.Component<PropTypes, StateTypes> {

    constructor(props: PropTypes) {
        super(props);
        this.state = {
            viewMode: true,
            value: props.value,
        };
        this.toggleMode = this.toggleMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    toggleMode() {
        this.setState({
            viewMode: !this.state.viewMode,
            value: this.props.value || '',
         });
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.currentTarget.value });
    }

    handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        const { onSubmit } = this.props;
        if(event.key === 'Enter') {
            onSubmit(event.currentTarget.value);
            this.setState({
                viewMode: true,
            })
        }
    }

    renderView() {
        const { value } = this.state;
        const { className } = this.props;
        return <InputView className={className} onClick={this.toggleMode}>{value}</InputView>;
    }

    renderEdit() {
        const { value } = this.state;
        const { className } = this.props;
        return (
            <InputEdit
                className={className}
                value={value}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                autoFocus
                onBlur={this.toggleMode}
            />
        );
    }

    render() {
        const { viewMode } = this.state;
        return viewMode ? this.renderView() : this.renderEdit();
    }
}

export default EditableInput;
