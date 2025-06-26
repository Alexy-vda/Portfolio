export default function WorkInProgressPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
        Work in Progress
      </h1>
      <p className="text-xl md:text-2xl text-slate-200 mb-8 text-center max-w-xl">
        Le site est en cours de construction.
        <br />
        Revenez bientôt ou découvrez mon GitHub !
      </p>
      <a
        href="https://github.com/Alexy-vda"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-6 py-2 bg-blue-950 text-white border border-slate-700 rounded-md hover:bg-blue-900 transition-colors font-semibold text-lg"
      >
        Voir mon GitHub
      </a>
    </div>
  );
}
