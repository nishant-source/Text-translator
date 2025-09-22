export default function Loader({ size = 6 }) {
  return (
    <div
      className={`inline-block w-${size} h-${size} animate-spin rounded-full border-2 border-t-transparent`}
    />
  );
}
