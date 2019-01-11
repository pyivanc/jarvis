import * as React from 'react';
import { Shape } from '../../../common'

interface PropTypes {
}

class Profile extends React.Component<PropTypes, any> {
    render() {
        const edges = [
            {label: 'Leadership', value: 4},
            {label: 'Tech', value: 5},
            {label: 'Organization', value: 8},
            {label: 'Predictive', value: 1},
        ]
        return (
            <Shape edges={edges} radius={200}/>
        );
    }
}

export default Profile;

