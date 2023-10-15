import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-lg">
      <button
        className="bg-purple-800 text-white p-3 rounded-sm shadow-2xl hover:bg-purple-700 transition-colors"
        onClick={openModal}
      >
        Open modal
      </button>
      <Modal open={isOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
