export const getColor = (): React.CSSProperties => {
  const gradients = [
    "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
    "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
    "linear-gradient(135deg, #EC4899 0%, #F97316 100%)",
    "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)",
    "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
    "linear-gradient(135deg, #14B8A6 0%, #6366F1 100%)",
    "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
    "linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)",
    "linear-gradient(135deg, #F43F5E 0%, #F59E0B 100%)",
    "linear-gradient(135deg, #0EA5E9 0%, #22C55E 100%)",
    "linear-gradient(135deg, #9333EA 0%, #F43F5E 100%)",
    "linear-gradient(135deg, #FB923C 0%, #F43F5E 100%)",
    "linear-gradient(135deg, #4ADE80 0%, #22D3EE 100%)",
    "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
    "linear-gradient(135deg, #F472B6 0%, #C084FC 100%)",
    "linear-gradient(135deg, #34D399 0%, #10B981 100%)",
    "linear-gradient(135deg, #60A5FA 0%, #818CF8 100%)",
    "linear-gradient(135deg, #FACC15 0%, #F97316 100%)",
    "linear-gradient(135deg, #0EA5E9 0%, #818CF8 100%)",
  ];

  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return {
    backgroundImage: randomGradient,
  };
};
