export const ThreatStat = ({ icon, title, value, change, color, children }) => {
  const colors = {
    orange: "text-orange-400 bg-orange-500/20",
    yellow: "text-yellow-400 bg-yellow-500/20",
    red: "text-red-400 bg-red-500/20",
    pink: "text-pink-400 bg-pink-500/20",
  };

  return (
    <div className="bg-[#0B1F4A]/80 border border-white/10 rounded-xl p-4 text-left">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
        <span className={`p-1.5 rounded-md ${colors[color]}`}>{icon}</span>
        {title}
        {children}
      </div>

      <div className="flex items-center gap-3">
        <p className="text-xl font-bold">{value}</p>
        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
          {change}
        </span>
      </div>
    </div>
  );
};
// new component for analytics Method
export const Method = ({ icon, title, desc }) => {
  return (
    <div className="bg-[#0B1F4A]/70 border border-white/10 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-3 text-orange-400">
        {icon}
        <h3 className="font-semibold text-white">{title}</h3>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};

export const Stat = ({ icon, title, value, change }) => {
  const positive = !change.startsWith("-");

  return (
    <div className="bg-[#0B1F4A]/80 border border-white/10 rounded-xl p-4 text-left">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        {icon}
        {title}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">{value}</p>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            positive
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

// new component for analytics Insight
export const Insight = ({ icon, title, subtitle, value, gradient }) => {
  return (
    <div
      className={`bg-gradient-to-r ${gradient} rounded-2xl p-[1px] shadow-lg`}
    >
      <div className="bg-[#081733] rounded-2xl p-5 h-full">
        <div className="flex items-center gap-2 text-sm mb-3 text-white">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>

        <p className="text-xs text-gray-300 mb-4">{subtitle}</p>

        <p className="text-lg font-bold text-white">{value}</p>
      </div>
    </div>
  );
}

