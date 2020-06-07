import React, { useState, useEffect } from 'react';
import { NextPageContext, NextPage } from 'next';
import { myGet } from '../util/myGet';
import { env } from '../util/environment';

const apiUrl = env.apiUrl + 'securedData';

const Groceries = ({ data }) => {
    useEffect(() => {
        console.log('first thing');
    }, []);

    return (
        <div>
            <h1>Get Secured Server Data</h1>
            <pre>
                {JSON.stringify(data, undefined, 2)}
            </pre>
        </div>
    );
}

Groceries.getInitialProps = async (ctx: NextPageContext) => {
    const json = await myGet(apiUrl, ctx);
    return { data: json };
}

export default Groceries;