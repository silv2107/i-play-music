import { Component } from "react";

class SliderErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log("SliderErrorBoundary caught an error", error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<h1>An error has occured. Images are not available</h1>
					<p>Please try later</p>
				</>
			);
		}

		return this.props.children;
	}
}

export default SliderErrorBoundary;
