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
// new component for threats Method
export const Method = ({ icon, title, desc }) => {
  return (
    <div className="bg-[#0B1F4A]/70 border border-white/10 rounded-2xl p-6 shadow-lg">
      <div className="flex  flex-col gap-2 mb-3 justify-start text-orange-400 ">
        <div className=" bg-orange-500/20 p-2 rounded-md w-fit">{icon}</div>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};

// new component for analytics Stat
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
      <div className={`bg-gradient-to-r ${gradient} rounded-2xl p-5 h-full`}>
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

// dashboard threat stat

export const Threat = ({ level, title, meta, blocked }) =>  {
  const colors = {
    critical: "from-red-600/30 to-red-500/10 text-red-400",
    high: "from-orange-500/30 to-orange-400/10 text-orange-400",
    medium: "from-yellow-500/30 to-yellow-400/10 text-yellow-400",
    low: "from-green-500/30 to-green-400/10 text-green-400",
  };

  return (
    <div
      className={`bg-gradient-to-r ${colors[level]} rounded-lg p-3 border border-white/5`}
    >
      <div className="flex justify-between mb-1">
        <p className="font-medium">{title}</p>
        <span className="text-xs">{meta}</span>
      </div>
      <p className="text-xs text-gray-300">Blocked: {blocked} requests</p>
    </div>
  );
}

// dashboard timeline
export const TimelineItem = ({ time, title, status, color }) =>  {
  const map = {
    red: "text-red-400 bg-red-500/20",
    orange: "text-orange-400 bg-orange-500/20",
    green: "text-green-400 bg-green-500/20",
  };

  return (
    <div className="flex items-start gap-3">
      <div className="text-xs text-gray-400 w-10">{time}</div>
      <div className="flex-1">
        <p className="font-medium">{title}</p>
        <span
          className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${map[color]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

//dashboard stats card 

export const StatCard = ({ title, value, change }) => {
  const positive = !change.startsWith("-");

  return (
    <div className="bg-[#0B1F4A]/80 border border-white/10 rounded-xl p-4">
      <p className="text-xs text-gray-400 mb-1">{title}</p>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">{value}</h3>
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

// 
export const StatusRow = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className="text-green-400 font-medium">{value}</span>
    </div>
  );
}

// dashboard action card

export const Action = ({ icon, text }) => {
  return (
    <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#081733] hover:bg-[#102A64] transition">
      <span className="flex items-center gap-2">
        {icon}
        {text}
      </span>
      <span className="text-green-400">→</span>
    </button>
  );
}

