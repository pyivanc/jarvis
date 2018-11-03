import * as React from 'react';


interface PropTypes {
    type: InputType,
    onSubmit: (value: InputValue) => any;
    value: InputValue;
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
            value: this.props.value,
         });
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.currentTarget.value });
    }

    handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        const { onSubmit } = this.props;
        if(event.key === 'Enter') {
            onSubmit(event.currentTarget.value);
        }
    }

    renderView() {
        const { value } = this.state;
        return <span onClick={this.toggleMode}>{value}</span>;
    }

    renderEdit() {
        const { type } = this.props;
        const { value } = this.state;
        return (
            <input
                type={type}
                value={value}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
        );
    }

    render() {
        const { viewMode } = this.state;
        return viewMode ? this.renderView() : this.renderEdit();
    }
}

export default EditableInput;
