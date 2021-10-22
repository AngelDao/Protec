const connectProvider = () => {
  if (window.ethereum) {
    return window.ethereum;
  } else {
    return null;
  }
};

export default connectProvider;
