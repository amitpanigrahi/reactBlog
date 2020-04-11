import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../../actions'
import Post from "./Post";

const PostList = (props) => {
    const {
        posts
    } = props;
    useEffect(() => {
        props.fetchPosts();
    }, []);

    return (
        <div className="ui releaxed divided list">
            {posts && posts.data ?
                <Post data={posts.data}/> : null}
        </div>
    )
};

const mapStateToProps = state => {
    return {posts: state.posts}
};

export default connect(
    mapStateToProps,
    {fetchPosts}
)(PostList)
