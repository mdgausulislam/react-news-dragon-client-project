import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit asperiores illum repellat accusantium dignissimos repellendus magnam dolorem est architecto.</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsCondition;