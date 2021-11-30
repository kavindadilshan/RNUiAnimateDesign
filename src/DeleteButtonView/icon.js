import React from "react";
import { Animated,View } from "react-native";
import {createIconSet} from 'react-native-vector-icons';

const DeleteIconFont = createIconSet(
    {
        Bottom: 59648,
        Top: 59649,
    },
    "icomoon"
);

class Icon extends React.Component {
    render() {
        return <DeleteIconFont {...this.props}/>;
    }
}

export default Animated.createAnimatedComponent(Icon);
