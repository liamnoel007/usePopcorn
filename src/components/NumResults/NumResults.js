export default function NumResults({ movies }) {
  return (
    <p className="num-results">
      Найдено <strong>{movies.length}</strong>
    </p>
  );
}
