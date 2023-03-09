function JobsFilter({ addedFilters, removeFilter, removeAllFilter }) {
  return (
    <div>
      {Object.values(addedFilters)
        .flat()
        .filter((x, i, a) => i === a.lastIndexOf(x))
        .map((f) => (
          <li key={f}>
            {f}
            <button onClick={removeFilter} value={f}>
              X
            </button>
          </li>
        ))}
      <p onClick={removeAllFilter}>clear</p>
    </div>
  );
}

export default JobsFilter;
