
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const LandingPage = props => {
	return (
		<div>
			NAV Bar here
		</div>
	)
}


const mapStateToProps = (state) => ({
	// getHomeWidgetState: state.getHomeWidget,
});
const mapDispatchToProps = (dispatch) => ({
	// getHomeWidget: (params) => dispatch(getHomeWidget(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
