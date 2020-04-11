import React from "react";

const Post = ({data = []}) => {
    return data.length && data.map(post => {
        return (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        )
    })
};

export default Post;
