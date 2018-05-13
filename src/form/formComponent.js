import React from 'react';

const FormComponent = props => (
    <form onSubmit={(event) => {
        event.preventDefault();
        props.submitAction();
        alert(props.text);
    }}>
        <h1>Our form example</h1>
        <div>
            <textarea
                onChange={event => props.textAction({ text: event.target.value })}
                value={props.text}
            />
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
);

export default FormComponent;
