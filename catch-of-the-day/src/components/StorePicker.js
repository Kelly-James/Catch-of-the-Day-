import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component { 
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    static propTypes = {
        history: PropTypes.object
    }
    
    myInput = React.createRef();
    
    goToStore = (event) => {
        // 1. Stop the form from submit
        event.preventDefault();
        // 2. Get the text from that input
        const storeName = this.myInput.value.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                { /* comment */ } 
                <h2>Please enter a Store</h2>
                <input 
                    type="text"
                    ref={this.myInput} 
                    required placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form> 
        )
    }
}

export default StorePicker;