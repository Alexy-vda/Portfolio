export default function WorkInProgressPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-6">🚧 Work in Progress 🚧</h1>
      <p className="text-xl">
        Le site est en cours de construction. Revenez bientôt !
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-950 text-white border border-slate-700 rounded cursor-pointer hover:bg-blue-900 transition-colors">
        <a
          href="https://github.com/Alexy-vda"
          target="_blank"
          rel="noopener noreferrer"
        >
          voir mon GitHub
        </a>
      </button>
    </div>
  );
}
