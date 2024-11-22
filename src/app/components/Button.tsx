

interface ButtonProps {
    text: string;
    onClick: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
      <button
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;