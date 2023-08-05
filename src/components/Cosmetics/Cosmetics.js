import React from 'react';
import { add } from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 20;
    const second = 80;
    const result = add(first, second);
    return (
        <div>
            <h2>This is Cosmetics store</h2>
            <p>This is Sum: {result}</p>
        </div>
    );
};

export default Cosmetics;