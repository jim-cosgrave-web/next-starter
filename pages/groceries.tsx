import React, { useState, useEffect } from 'react';
import { NextPageContext, NextPage } from 'next';
import { myGet } from '../util/myGet';

//const apiUrl = 'https://next-mongodb-nine.now.sh/api/daily';
const apiUrl = 'http://localhost:3000/api/groceries';

const Groceries = ({ groceries }) => {
    return (
        <div>
            Groceries Page
            <pre>
                {JSON.stringify(groceries, undefined, 2)}
            </pre>
        </div>
    );
}

Groceries.getInitialProps = async (ctx: NextPageContext) => {
    const json = await myGet(apiUrl, ctx);
    return { groceries: json };
}

export default Groceries;