import React, {Component} from 'react';
import WitnessList from 'components/witness/WitnessList'; 

class Witness extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Witness Insight</h2>
                <WitnessList account={this.props.match.params.account}/>
                <br/><br/>
            </div>
        );
    }
}

export default Witness;