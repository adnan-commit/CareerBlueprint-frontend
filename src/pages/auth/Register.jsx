import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import Logo from "../../components/Logo";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const isFormIncomplete =
    !formData.username || !formData.email || !formData.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Architecting...");
    setIsLoading(true);
    try {
      const res = await api.post("/auth/register", formData);
      const receivedToken = res.data.data?.token;
      if (receivedToken) {
        Cookies.set("token", receivedToken, { expires: 1, path: "/" });
        toast.success(`Profile Created`, { id: loadingToast });
        setFormData({ username: "", email: "", password: "" });
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed", {
        id: loadingToast,
      });
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex bg-slate-950 overflow-hidden">
      {/* IMAGE SIDE (Left for Register) */}
      <div className="hidden lg:block flex-1 relative">
        <div className="absolute inset-0 bg-linear-to-l from-slate-950 via-slate-950/20 to-transparent z-10" />
        <img
          src="/hero.jpg"
          alt="Auth"
          className="h-full w-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute bottom-12 right-12 z-20 text-right">
          <div className="text-white/20 font-black text-6xl italic leading-none select-none uppercase">
            Career
            <br />
            Blueprinting
          </div>
        </div>
      </div>

      {/* FORM SIDE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full lg:w-[45%] flex flex-col justify-center px-6 md:px-12 lg:px-20 relative z-20"
      >
        <div className="max-w-sm w-full mx-auto">
          <div className="mb-6 scale-90 origin-left lg:origin-right flex lg:justify-end">
            <Logo />
          </div>

          <header className="mb-8 lg:text-right">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
              Forge <span className="text-brand-secondary">Account</span>
            </h2>
            <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">
              Begin Orchestration
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest block lg:text-right lg:mr-2">
                Full Identity
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-brand-secondary transition-colors" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/2 border border-white/10 text-white text-sm focus:border-brand-secondary/50 focus:bg-white/5 outline-none transition-all shadow-inner"
                  placeholder="Adnan Qureshi"
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest block lg:text-right lg:mr-2">
                Digital Mail
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-brand-secondary transition-colors" />
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/2 border border-white/10 text-white text-sm focus:border-brand-secondary/50 focus:bg-white/5 outline-none transition-all shadow-inner"
                  placeholder="architect@domain.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest block lg:text-right lg:mr-2">
                Secure Key
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-brand-secondary transition-colors" />
                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/2 border border-white/10 text-white text-sm focus:border-brand-secondary/50 focus:bg-white/5 outline-none transition-all shadow-inner"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading || isFormIncomplete}
              className={`w-full py-4 cursor-pointer mt-2 font-black rounded-xl flex items-center justify-center gap-2 uppercase text-xs tracking-[0.2em] transition-all
          ${
            isLoading || isFormIncomplete
              ? "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
              : "bg-brand-secondary text-slate-950 shadow-[0_0_30px_rgba(20,184,166,0.2)] cursor-pointer hover:scale-[1.01]"
          }`}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin w-4 h-4" />
                  <span>Blueprinting...</span>
                </div>
              ) : (
                <>
                  Initialize Journey <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </form>

          <p className="mt-8 text-slate-600 text-[11px] font-bold uppercase tracking-tight lg:text-right">
            Active session?{" "}
            <Link
              to="/login"
              className="text-white hover:text-brand-secondary underline underline-offset-4 ml-1"
            >
              Run Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
