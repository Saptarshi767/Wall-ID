// Link.jsx
import React, { useState } from "react";

const LinkComponent = () => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {page === 1 && <LinkDevice onNext={handleNextPage} />}
      {page === 2 && <PressFinger onNext={handleNextPage} />}
      {page === 3 && <FinalPage />}
    </div>
  );
};

const LinkDevice = ({ onNext }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-6">Link your Device</h1>
    <button
      className="bg-orange-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
      onClick={onNext}
    >
      Continue
    </button>
  </div>
);

const PressFinger = ({ onNext }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-6">Press the Finger to Unlock</h1>
    <button
      className="bg-blue-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      onClick={onNext}
    >
      Unlock
    </button>
  </div>
);

const FinalPage = () => (
  <div className="text-center">
    <div className="bg-gray-800 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold">Keys</h2>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold">Linked TOTP</h2>
    </div>
  </div>
);

export default LinkComponent; // Default export
