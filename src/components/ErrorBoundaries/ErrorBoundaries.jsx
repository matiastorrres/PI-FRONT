class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      messageError: "",
    };
    s;
  }
  static getDerivedStateFromError(error) {
    //Metodo 1
    return { hasError: error, messageError: error.message };
  }
  componentDidCatch() {
    //Metodo 2
    return { hasError: error, messageError: error.message };
  }
  render() {
    if (this.state.hasError) {
      return <div>este es mi error Boundaries</div>;
    }
    return this.props.children;
  }
}

export default Error;
