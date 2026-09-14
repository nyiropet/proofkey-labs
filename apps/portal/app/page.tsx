export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="mt-5 mb-5 text-5xl">ProofKey Labs</h1>

      <p>
        A ProofKey Labs egy ügyfélportál, ahol minden szervezet tagjai
        biztonságosan férhetnek hozzá saját munkaterületükhöz.
      </p>

      <a
        type="button"
        className="mt-5 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        href="/auth/login"
      >
        Bejelentkezés
      </a>
    </div>
  );
}
