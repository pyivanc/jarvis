import * as React from 'react';
import { Shape } from '../../../common'

interface PropTypes {
}

class Profile extends React.Component<PropTypes, any> {
    render() {
        const edges = [
            {label: 'strength', value: 4},
            {label: 'wisdome', value: 5},
            {label: 'charisma', value: 8},
            {label: 'dextrity', value: 1},
            {label: 'stamina', value: 9}
        ]
        return (
            <Shape edges={edges} radius={200}/>
        );
    }
}

export default Profile;

