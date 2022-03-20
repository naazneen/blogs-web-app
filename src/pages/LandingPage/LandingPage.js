
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// components
import PostCard from "../../components/PostCard/PostCard"

// actions
import { getBlogPosts } from "../../action/getBlogPostsAction"

const LandingPage = props => {

	const { getBlogPosts, getBlogPostsState
	} = props

	useEffect(() => {
		getBlogPosts()
	}, [])

	return (
		<div style={{ "display": "flex", "flexDirection": "row", "flex-wrap": "wrap", "margin": "20px" }} >
			{getBlogPostsState.apiState == "success" && getBlogPostsState.blogs &&
				(getBlogPostsState.blogs.map(blogs => {
					return (<div style={{ "margin": "12px" }}>
						<PostCard id={blogs.id} title={blogs.title} body={blogs.body} />
					</div>)
				})

				)}
		</div>
	)
}


const mapStateToProps = (state) => ({
	getBlogPostsState: state.getBlogPosts,
});
const mapDispatchToProps = (dispatch) => ({
	getBlogPosts: (params) => dispatch(getBlogPosts(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
