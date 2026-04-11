"use client";
import { useState } from "react";
import { askHealthBot } from "./actions";

export default function Home() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await askHealthBot(formData);
    setResponse(result);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 flex flex-col items-center justify-center">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-600"></div>

      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white text-center">
          <div className="inline-block p-3 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
            <span className="text-3xl">🩺</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Health Assistant AI</h1>
          <p className="mt-2 text-blue-100 font-medium">Instant, intelligent health insights powered by Groq</p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form action={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                Describe your health query
              </label>
              <textarea
                name="message"
                placeholder="e.g., What are the common symptoms of seasonal allergies?"
                className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-400 focus:ring-0 transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400 min-h-[120px] resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-3 ${
                loading 
                ? "bg-gray-400 cursor-not-allowed animate-pulse" 
                : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-200"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Consulting AI...
                </>
              ) : (
                "Get Health Insights 🚀"
              )}
            </button>
          </form>

          {/* Response Section */}
          {response && (
            <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-800">Medical Insight</h2>
              </div>
              <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 text-gray-700 leading-relaxed shadow-inner">
                <div className="whitespace-pre-wrap">{response}</div>
                
                {/* Safety Badge */}
                <div className="mt-6 pt-4 border-t border-blue-100 flex items-start gap-2 text-xs text-blue-500 italic">
                  <span>⚠️</span>
                  <span>This information is AI-generated for educational purposes and is not a substitute for professional medical advice.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-gray-400 text-sm font-medium">
        Built with ❤️ for AI Engineering Portfolio
      </p>
    </main>
  );
}