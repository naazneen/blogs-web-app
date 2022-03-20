
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card } from "antd"
import { Link } from "react-router-dom"

const Comments = props => {

    return (
        <Card title={props.name} style={{ width: "auto" }}>
            <p>{props.body}</p>
        </Card>
    )
}


const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
