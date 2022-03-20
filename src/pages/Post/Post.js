
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// actions
import { getBlogPostById } from "../../action/getBlogPostByIdAction"
import { getComments } from "../../action/getCommentsAction"


const Post = props => {


    const id = props.match.params.id || null

    const { getBlogPostById, getBlogPostByIdState,
        getComments, getCommentsState,

    } = props

    useEffect(() => {
        getBlogPostById({
            id: id
        })
        getComments({
            id: id
        })
    }, [])

    return (
        <div >
            {getBlogPostByIdState.apiState == "success" &&
                (<>
                    <h1>  {getBlogPostByIdState.blog.title}</h1>
                    <p> {getBlogPostByIdState.blog.body}</p>
                </>
                )}
        </div>
    )
}


const mapStateToProps = (state) => ({
    getBlogPostByIdState: state.getBlogPostById,
    getCommentsState: state.getComments,
});
const mapDispatchToProps = (dispatch) => ({
    getBlogPostById: (params) => dispatch(getBlogPostById(params)),
    getComments: (params) => dispatch(getComments(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
