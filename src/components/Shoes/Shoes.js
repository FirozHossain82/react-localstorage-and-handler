import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 400;
    const second = 80;
    const result = add(first, second);
    const Multiply = multiply(first, second);
    return (
        <div>
            <h1>This is Shoes Components</h1>
            <p>Sum is: {result}</p>
            <p><small>Multiply: {Multiply}</small></p>
        </div>
    );
};

export default Shoes;