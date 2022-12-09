import React from 'react';
import './Feed.css'
import FeedLayout from './FeeNav/FeedLayout/FeedLayout';
import FeedNav from './FeeNav/FeedNav';

const Feed = () => {
    return (
        <div className='feedContainer'>
            <FeedNav></FeedNav>
            <FeedLayout></FeedLayout>
        </div>
    );
};

export default Feed;