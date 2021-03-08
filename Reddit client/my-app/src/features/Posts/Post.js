import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => {
    return (
        <div>
            <img src={post.img} alt='post'/>
            <h3>{post.title}</h3>
            <p>{post.upvotes}</p>
            <p>{post.date}</p>
            <img src={post.subredditIcon} alt="subreddit's icon"/>
            <h4>{post.subreddit}</h4>
        </div>
    )
}

Post.propTypes = {
post: PropTypes.object.isRequired,
key: PropTypes.number.isRequired
}

export default Post

