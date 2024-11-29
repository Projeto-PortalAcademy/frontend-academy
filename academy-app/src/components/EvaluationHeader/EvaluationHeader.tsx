import { motion } from "framer-motion";

const EvaluationHeader = () => {
  const ShimmerButton = ({ label }: { label: string }) => {
    return (
      <motion.button
        className="inline-flex overflow-hidden rounded-lg bg-[linear-gradient(120deg,#3B82F6_calc(var(--shimmer-button-x)-25%),#E0F2FE_var(--shimmer-button-x),#3B82F6_calc(var(--shimmer-button-x)+25%))] [--shimmer-button-x:0%]"
        initial={{ scale: 1 }}
        animate={{ 
          scale: 1, 
          "--shimmer-button-x": "200%" 
        }}
        transition={{
          stiffness: 500,
          damping: 20,
          type: "spring",
          "--shimmer-button-x": {
            duration: 3,
            repeat: Infinity,
            ease: [0.445, 0.05, 0.55, 0.95],
          },
        }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="m-[0.125rem] rounded-[calc(0.5rem-0.125rem)] bg-[#1E3A8A] px-4 py-2 text-sm text-[#E0F2FE] backdrop-blur-sm">
          {label}
        </span>
      </motion.button>
    );
  };

  return (
    <div className="text-sm from-neutral-900">
      <h1 className="text-lg font-bold mb-6">Templates de avaliação</h1>
      <div className="flex space-x-4 mb-4">
        <ShimmerButton label="Avaliação template 1" />
        <ShimmerButton label="Avaliação template 2" />
        <ShimmerButton label="Avaliação Técnica" />
      </div>
    </div>
  );
};

export default EvaluationHeader;
