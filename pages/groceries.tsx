import React, { useState, useEffect } from 'react';
import { NextPageContext, NextPage } from 'next';
import { myGet } from '../util/myGet';
import { env } from '../util/environment';

const apiUrl = env.apiUrl + 'groceries';

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