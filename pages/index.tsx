import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

//https://next-mongodb-nine.now.sh/api/daily
//http://localhost:3000/api/daily'

//const apiUrl = 'https://next-mongodb-nine.now.sh/api/daily';
const apiUrl = 'http://localhost:3000/api/daily';

const Index = () => {
    return (
        <div>
            Index Page
        </div>
    )
}

export default Index;