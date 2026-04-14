import { motion } from "framer-motion";
import { Building2, Calendar, ArrowRight, BarChart3 } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Archives = ({ history, onReportSelect }) => {
  const sortedHistory = [...history].reverse();

  const chartData = {
    labels: sortedHistory.map((item) => item.companyName),
    datasets: [
      {
        label: "Match Score",
        data: sortedHistory.map((item) => item.matchScore),
        backgroundColor: "rgba(45, 212, 191, 0.4)",
        borderColor: "#2dd4bf",
        borderWidth: 2,
        borderRadius: 10,
        hoverBackgroundColor: "#2dd4bf",
        dates: sortedHistory.map((item) =>
          new Date(item.createdAt).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0f172a",
        titleFont: { size: 12, weight: "bold", family: "Inter" },
        bodyFont: { size: 13, family: "JetBrains Mono" },
        padding: 12,
        borderColor: "rgba(45, 212, 191, 0.3)",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          title: (context) => `ENTITY: ${context[0].label.toUpperCase()}`,
          label: (context) => {
            const date = context.dataset.dates[context.dataIndex];
            const score = context.raw;
            return [` DATE: ${date}`, ` SCORE: ${score}%`];
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#64748b",
          font: { size: 10, weight: "bold" },
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: "rgba(255, 255, 255, 0.05)" },
        ticks: {
          color: "#475569",
          font: { size: 10 },
          stepSize: 20,
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      {/* 1. Analytics Section */}
      <section className="p-6 md:p-8 rounded-[2.5rem] bg-white/2 border border-white/10 relative overflow-hidden group">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary">
            <BarChart3 size={24} />
          </div>
          <div>
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">
              Strategic History
            </h3>
            <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest leading-none mt-1">
              Neural_Match_Log // Active_Session
            </p>
          </div>
        </div>

        <div className="h-64 md:h-80 w-full">
          <Bar data={chartData} options={options} />
        </div>
      </section>

      {/* 2. List Section (Pehle wala solid card layout) */}
      <div className="grid grid-cols-1 gap-4">
        {history.length > 0 ? (
          history
            .slice()
            .reverse()
            .map((item) => (
              <div
                key={item._id}
                onClick={() => onReportSelect(item._id, item.companyName)}
                className="p-5 md:p-6 rounded-4xl bg-white/2 border border-white/10 hover:border-brand-primary/30 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-brand-primary/10 transition-colors shrink-0">
                    <Building2 className="w-6 h-6 text-slate-500 group-hover:text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white italic uppercase tracking-tighter">
                      {item.companyName}
                    </h4>
                    <p className="text-slate-500 text-[10px] font-bold flex items-center gap-2">
                      <Calendar size={12} />{" "}
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-8">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase">
                      Score
                    </p>
                    <p className="text-2xl font-black text-brand-primary italic">
                      {item.matchScore}%
                    </p>
                  </div>
                  <ArrowRight className="text-slate-500 group-hover:text-brand-primary transition-all group-hover:translate-x-1" />
                </div>
              </div>
            ))
        ) : (
          <div className="py-20 text-center text-slate-800 font-black uppercase text-xs tracking-[0.5em] opacity-30">
            Vault_Empty
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Archives;
