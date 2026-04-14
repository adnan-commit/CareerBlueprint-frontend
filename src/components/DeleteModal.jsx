import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Trash2, X } from "lucide-react";

const DeleteModal = ({ isOpen, onClose, onConfirm, isLoading }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-slate-900 border border-red-500/30 rounded-[2.5rem] p-10 shadow-[0_0_60px_rgba(239,68,68,0.15)] overflow-hidden"
          >
            {/* Background Aesthetic Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center">
              {/* Icon Section */}
              <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-500/20">
                <AlertTriangle className="text-red-500 w-10 h-10 animate-pulse" />
              </div>

              {/* Text Content */}
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">
                Confirm <span className="text-red-500">Purge?</span>
              </h3>

              <div className="space-y-4 mb-10">
                <p className="text-slate-400 text-sm leading-relaxed font-body">
                  You are about to initiate a permanent account deletion
                  protocol. This will{" "}
                  <span className="text-white font-bold italic">
                    permanently erase
                  </span>{" "}
                  all generated blueprints, preparation archives, and personal
                  metadata.
                </p>
                <p className="text-red-400/80 text-[11px] font-black uppercase tracking-[0.2em] bg-red-500/5 py-2 rounded-lg border border-red-500/10">
                  This operation is irreversible.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={onConfirm}
                  disabled={isLoading}
                  className="group cursor-pointer w-full py-4 bg-red-500 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                >
                  {isLoading ? (
                    "Executing Purge..."
                  ) : (
                    <>
                      <Trash2
                        size={16}
                        className="group-hover:rotate-12 transition-transform"
                      />
                      Confirm Destruction
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="w-full cursor-pointer py-4 bg-white/5 text-slate-500 font-bold rounded-2xl hover:bg-white/10 hover:text-white transition-all uppercase text-xs tracking-[0.2em] border border-white/5"
                >
                  Cancel Protocol
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
