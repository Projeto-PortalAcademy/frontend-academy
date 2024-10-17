import React from "react";

interface AddObservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddObservationModal: React.FC<AddObservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        {/* Header do Modal */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold text-blue-800">
            Adicionar observação
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Formulário */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Data:</label>
            <input
              type="text"
              value="XX/XX/XXXX"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Título:</label>
            <input
              type="text"
              value="Atraso"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold">Descrição:</label>
            <textarea
              className="w-full mt-1 p-2 border rounded bg-gray-100"
              rows={4}
              disabled
              defaultValue="Chegou atrasado pois teve que ir no PoupaTempo retirar documentos"
            />
          </div>

          {/* Botão Adicionar */}
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddObservationModal;
