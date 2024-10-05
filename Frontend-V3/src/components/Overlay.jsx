const Overlay = ({ isVisible, onClick }) => {
    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClick}
      ></div>
    );
  };

  export default Overlay;