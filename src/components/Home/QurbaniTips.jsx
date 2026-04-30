import { FaCheckCircle } from 'react-icons/fa';

const QurbaniTips = () => {
  const tips = [
    "Check for any physical injury or broken horns.",
    "Ensure the animal's teeth meet the age requirement.",
    "The animal should be healthy, active, and well-fed.",
    "Confirm the weight and breed before purchasing."
  ];

  return (
    <section className="  py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Expert Qurbani Tips</h2>
          <div className="space-y-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;