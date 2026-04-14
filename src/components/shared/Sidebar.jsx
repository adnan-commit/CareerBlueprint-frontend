import {
  LogOut,
  Trash2,
  Zap,
  Library,
  Menu,
  X,
  Home,
  BarChart3,
  Lock,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import api from "../../api/axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import DeleteModal from "../DeleteModal";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({
  activeTab,
  setActiveTab,
  selectedReportId,
  selectedReportName,
}) => {
  const { setUser } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  // --- LOGOUT LOGIC ---
  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      Cookies.remove("token");
      setUser(null);
      toast.success("Logged out successfully");
      setTimeout(() => window.location.href = "/login", 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
      Cookies.remove("token");
      setTimeout(() => window.location.href = "/login", 1000);

      
    }
  };

  // --- DELETE ACCOUNT LOGIC (The missing piece) ---
  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      const res = await api.delete("/auth/delete-account");
      if (res.data.success) {
        toast.success("System Purged Successfully");
        Cookies.remove("token");
      setTimeout(() => window.location.href = "/register", 1000);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Critical Error: Purge Failed",
      );
      setIsDeleteModalOpen(false);
    } finally {
      setIsDeleting(false);
    }
  };

  const NavItem = ({ id, icon: Icon, label, disabled, onClickOverride }) => (
    <div className="relative group w-full">
      <button
        disabled={disabled}
        onClick={
          onClickOverride ||
          (() => {
            setActiveTab(id);
            setIsMobileOpen(false);
          })
        }
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
          disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
        } ${
          activeTab === id
            ? "bg-brand-primary/10 text-brand-primary shadow-[0_0_20px_rgba(45,212,191,0.1)]"
            : "text-slate-400 hover:bg-white/5 hover:text-white"
        }`}
      >
        <Icon className="w-5 h-5" />
        <span className="flex-1 text-left text-sm md:text-base">{label}</span>
        {disabled && <Lock size={12} className="text-slate-600" />}
      </button>

      {!disabled && id === "analysis" && selectedReportName && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute -bottom-1 left-12 text-[8px] font-black text-brand-primary uppercase tracking-widest truncate max-w-30"
        >
          ● {selectedReportName}
        </motion.span>
      )}
    </div>
  );

  return (
    <>
      {/* 1. MOBILE OVERLAY (BACKDROP)
       */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-85 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* 2. MOBILE TOGGLE BUTTON */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-6 left-6 z-100 p-2 bg-slate-900/80 backdrop-blur-lg border border-white/10 rounded-lg text-brand-primary shadow-2xl active:scale-90 transition-all"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 3. MAIN SIDEBAR CONTAINER
       */}
      <div
        className={`
        fixed inset-y-0 left-0 w-64 bg-slate-950/90 border-r border-white/10 
        flex flex-col z-90 backdrop-blur-2xl transition-transform duration-500 ease-in-out
        lg:translate-x-0 ${isMobileOpen ? "translate-x-0 shadow-[20px_0_50px_rgba(0,0,0,0.5)]" : "-translate-x-full"}
      `}
      >
        {/* Logo Section */}
        <div className="p-6 pt-20 lg:pt-8 shrink-0">
          <Logo />
        </div>

        {/* Scrollable Navigation */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar pb-10">
          <NavItem
            id="home"
            icon={Home}
            label="Home Terminal"
            onClickOverride={() => navigate("/")}
          />

          <div className="h-px w-full bg-white/5 my-4" />

          <div className="space-y-2">
            <NavItem id="forge" icon={Zap} label="The Forge" />
            <NavItem id="archives" icon={Library} label="Archives" />

            {/* Deep Analysis with Active Report Name */}
            <div className="relative group w-full">
              <button
                disabled={!selectedReportId}
                onClick={() => {
                  setActiveTab("analysis");
                  setIsMobileOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  !selectedReportId
                    ? "opacity-30 cursor-not-allowed"
                    : "cursor-pointer"
                } ${
                  activeTab === "analysis"
                    ? "bg-brand-primary/10 text-brand-primary shadow-[0_0_20px_rgba(45,212,191,0.1)]"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span className="flex-1 text-left text-sm">Deep Analysis</span>
                {!selectedReportId && (
                  <Lock size={12} className="text-slate-600" />
                )}
              </button>

              {selectedReportId && selectedReportName && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -bottom-1 left-12 text-[7px] font-black text-brand-primary uppercase tracking-widest truncate max-w-25"
                >
                  ● {selectedReportName}
                </motion.span>
              )}
            </div>
          </div>

          <div className="h-px w-full bg-white/5 my-6 opacity-50" />

          <div className="px-2 mb-2 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
            System Control
          </div>

          <div className="space-y-1">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all font-bold text-sm group"
            >
              <LogOut className="w-5 h-5 text-slate-500 group-hover:text-red-400 transition-colors" />{" "}
              Logout
            </button>

            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-900/40 hover:text-red-600 transition-all text-[10px] font-black uppercase tracking-widest group"
            >
              <Trash2 className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />{" "}
              Purge System
            </button>
          </div>
        </nav>

        <div className="p-6 text-[8px] font-mono text-slate-700 uppercase tracking-widest text-center border-t border-white/5">
          Career Blueprint // Active
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        isLoading={isDeleting}
      />
    </>
  );
};

export default Sidebar;
