import React from 'react';

const Cosmetic = (props) => {
    const{name, price, id} = props.cosmetic;
    return (
        <div style={{border:'3px solid red',margin:'30px',padding:'15px', borderRadius:'9px', background:'' }}>
            <h1>Product Name: {name}</h1>
            <h3>Price: {price}</h3>
            <p><small>Id Is: {id}</small></p>
        </div>
    );
};

export default Cosmetic;