
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card } from "antd"

const PostCard = props => {

    return (
        <Card title={props.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>{props.body}</p>
        </Card>
    )
}


const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
