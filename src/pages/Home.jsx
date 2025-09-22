export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="text-gray-700">
        This small app includes a <strong>text translator</strong> and a{" "}
        <strong>random string generator</strong>. Use the navigation above to
        try them.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/translator"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Open Translator
        </a>
        <a
          href="/random"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Open Random String
        </a>
      </div>
    </div>
  );
}
