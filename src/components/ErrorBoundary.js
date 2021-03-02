import { Component } from "react";

class ErrorBoundary extends Component {
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
		console.log("ErrorBoundary caught an error", error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<h1>500: There was an error</h1>
					<p>Something went wrong, try later</p>
				</>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
