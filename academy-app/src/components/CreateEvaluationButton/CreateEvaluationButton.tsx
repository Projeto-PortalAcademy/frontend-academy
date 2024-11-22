"use client";
import React, { useState } from "react";

interface Question {
  type: "dissertativa" | "multipla-escolha";
  question: string;
  options?: { text: string; isCorrect: boolean }[];
}

interface CreateEvaluationButtonProps {
  onCreate: (evaluation: {
    avaliado: string;
    avaliador: string;
    data: string;
    questions: Question[];
  }) => void;
}

const CreateEvaluationButton: React.FC<CreateEvaluationButtonProps> = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [avaliado, setAvaliado] = useState("");
  const [avaliador, setAvaliador] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const toggleModal = () => setIsOpen(!isOpen);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { type: "dissertativa", question: "", options: [] },
    ]);
  };

  const deleteQuestion = (index: number) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const updateQuestion = (index: number, updatedQuestion: Question) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  const handleCreate = () => {
    if (avaliado && avaliador) {
      onCreate({
        avaliado,
        avaliador,
        data: new Date().toLocaleDateString(),
        questions,
      });
      setAvaliado("");
      setAvaliador("");
      setQuestions([]);
      toggleModal();
    }
  };

  const addOption = (questionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options = [
      ...(updatedQuestions[questionIndex].options || []),
      { text: "", isCorrect: false },
    ];
    setQuestions(updatedQuestions);
  };

  const updateOption = (
    questionIndex: number,
    optionIndex: number,
    updatedOption: { text: string; isCorrect: boolean }
  ) => {
    const updatedQuestions = [...questions];
    const options = updatedQuestions[questionIndex].options || [];
    options[optionIndex] = updatedOption;
    updatedQuestions[questionIndex].options = options;
    setQuestions(updatedQuestions);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Criar Avaliação
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-6xl h-[90vh] p-8 rounded shadow-md relative flex flex-col">
            {/* Botão de Fechar */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Criar Nova Avaliação</h2>

            {/* Conteúdo com Scroll */}
            <div className="overflow-y-auto flex-1 pr-4">
              <div className="mb-4">
                <label className="block font-semibold mb-1">Avaliado</label>
                <input
                  type="text"
                  value={avaliado}
                  onChange={(e) => setAvaliado(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-1">Avaliador</label>
                <input
                  type="text"
                  value={avaliador}
                  onChange={(e) => setAvaliador(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold">Perguntas</h3>
                <button
                  onClick={addQuestion}
                  className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Adicionar Pergunta
                </button>

                {questions.map((question, index) => (
                  <div key={index} className="mt-4 border p-4 rounded relative">
                    {/* Botão de excluir pergunta */}
                    <button
                      onClick={() => deleteQuestion(index)}
                      className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                    >
                      ✕
                    </button>

                    <div className="mb-2">
                      <label className="block font-semibold">Pergunta</label>
                      <input
                        type="text"
                        value={question.question}
                        onChange={(e) =>
                          updateQuestion(index, {
                            ...question,
                            question: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>

                    <div className="mb-2">
                      <label className="block font-semibold">Tipo</label>
                      <select
                        value={question.type}
                        onChange={(e) =>
                          updateQuestion(index, {
                            ...question,
                            type: e.target.value as Question["type"],
                          })
                        }
                        className="w-full px-3 py-2 border rounded"
                      >
                        <option value="dissertativa">Dissertativa</option>
                        <option value="multipla-escolha">Múltipla Escolha</option>
                      </select>
                    </div>

                    {question.type === "multipla-escolha" && (
                      <div>
                        <h4 className="font-semibold mb-2">Opções</h4>
                        <button
                          onClick={() => addOption(index)}
                          className="mb-2 px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          Adicionar Opção
                        </button>
                        {question.options?.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center mb-2">
                            <input
                              type="checkbox"
                              checked={option.isCorrect}
                              onChange={(e) =>
                                updateOption(index, optIndex, {
                                  ...option,
                                  isCorrect: e.target.checked,
                                })
                              }
                              className="mr-2"
                            />
                            <input
                              type="text"
                              value={option.text}
                              onChange={(e) =>
                                updateOption(index, optIndex, {
                                  ...option,
                                  text: e.target.value,
                                })
                              }
                              className="flex-1 px-3 py-2 border rounded"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Botão fixo abaixo do scroll */}
            <div className="mt-4">
              <button
                onClick={handleCreate}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Salvar Avaliação
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateEvaluationButton;
