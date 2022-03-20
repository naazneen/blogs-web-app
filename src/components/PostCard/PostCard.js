
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card } from "antd"
import { Link } from "react-router-dom"

const PostCard = props => {

    return (
        <Card title={props.title} extra={<Link to={`/post/${props.id}`}>More</Link>} style={{ width: 300 }}>
            <p>{props.body}</p>
        </Card>
    )
}


const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
