export default function LanguageSelect({ languages, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.name}
        </option>
      ))}
    </select>
  );
}
