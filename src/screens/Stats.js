import React from 'react-native';
import CheckStats from '../components/CheckStats';

const Stats = ({route}) => {
return (
        <CheckStats nick={route.params.paramNick} />
    )
    
}
export default Stats;