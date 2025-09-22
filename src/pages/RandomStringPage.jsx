import { useState, useCallback, useEffect } from "react";

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function RandomStringPage() {
  const [length, setLength] = useState(12);
  const [charset, setCharset] = useState(DEFAULT_CHARSET);
  const [current, setCurrent] = useState("");
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("rs_history") || "[]");
    } catch {
      return [];
    }
  });

  const generate = useCallback(
    (len = length) => {
      let res = "";
      for (let i = 0; i < len; i++) {
        const idx = Math.floor(Math.random() * charset.length);
        res += charset.charAt(idx);
      }
      setCurrent(res);
      setHistory((h) => [res, ...h].slice(0, 10)); // keep last 10
    },
    [length, charset]
  );

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("rs_history", JSON.stringify(history));
  }, [history]);

  // generate one string on first render
  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Random String Generator</h1>

      <div className="flex gap-2 items-center">
        <label className="flex items-center gap-2">
          Length:
          <input
            type="number"
            min={1}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="p-2 w-24 border rounded"
          />
        </label>
        <button
          onClick={() => generate()}
          className="px-4 py-2 rounded bg-green-600 text-white"
        >
          Generate
        </button>
      </div>

      <div className="p-4 border rounded bg-white">
        <div className="font-mono break-words">{current}</div>
      </div>

      <div>
        <h3 className="font-semibold">History</h3>
        <ul className="list-disc ml-5">
          {history.map((h, i) => (
            <li key={i} className="font-mono text-sm">
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
