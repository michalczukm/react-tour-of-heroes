/* eslint 
no-console: 0,
no-debugger: 0
*/

import React, {PropTypes} from 'react';

class NewHero extends React.Component {
    constructor(props) {
        super(props);
    }

    onNameInputKeyPress(event) {
        if (event.key == 'Enter') {
             this.props.actions.addHero(this.nameInput.value);
             this.nameInput.value = '';
        }    
    }

    render() {
        return (
            <div>
                <label>new hero name: </label>
                <input type="text" 
                    ref={(ref) => this.nameInput = ref} 
                    onKeyPress={this.onNameInputKeyPress.bind(this)}/>
            </div>
        );
    }
}

NewHero.propTypes = {
    actions: PropTypes.object.isRequired
};

export default NewHero;