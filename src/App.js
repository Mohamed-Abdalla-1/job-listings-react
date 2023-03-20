import "./App.css";
import data from "./data.json";
import Heading from "./Heading";
import Card from "./Card";
import { useEffect, useState } from "react";
import JobsFilter from "./JobsFilter";

function App() {
  const [addedFilters, setAddedFilters] = useState({
    role: [],
    level: [],
    languages: [],
  });

  function addToFilter(event) {
    const newAddedFilters = { ...addedFilters };

    event.target.value === 1
      ? !newAddedFilters["role"].includes(event.target.textContent) &&
        (newAddedFilters["role"] = newAddedFilters["role"].concat(
          event.target.textContent
        ))
      : event.target.value === 2
      ? !newAddedFilters["level"].includes(event.target.textContent) &&
        (newAddedFilters["level"] = newAddedFilters["level"].concat(
          event.target.textContent
        ))
      : !newAddedFilters["languages"].includes(event.target.textContent) &&
        (newAddedFilters["languages"] = newAddedFilters["languages"].concat(
          event.target.textContent
        ));
    setAddedFilters(newAddedFilters);
  }

  function removeAllFilter() {
    setAddedFilters({
      role: [],
      level: [],
      languages: [],
    });
  }

  function removeFilter(event) {
    const updatedFilter = { ...addedFilters };

    updatedFilter.role.includes(event.target.value)
      ? (updatedFilter.role = updatedFilter.role.filter(
          (x) => x !== event.target.value
        ))
      : updatedFilter.level.includes(event.target.value)
      ? (updatedFilter.level = updatedFilter.level.filter(
          (x) => x !== event.target.value
        ))
      : (updatedFilter.languages = updatedFilter.languages.filter(
          (x) => x !== event.target.value
        ));

    setAddedFilters(updatedFilter);
  }

  useEffect(() => {}, []);
  const filteredData = data.filter((job) => {
    if (addedFilters.level.length && !addedFilters.level.includes(job.level))
      return false;
    if (addedFilters.role.length && !addedFilters.role.includes(job.role))
      return false;
    if (
      addedFilters.languages.length &&
      !addedFilters.languages.every((l) =>
        job.languages.some((jobL) => jobL === l)
      )
    )
      return false;
    return true;
  });

  console.log(addedFilters);

  return (
    <div className="App">
      <Heading />
      <JobsFilter
        addedFilters={addedFilters}
        removeFilter={removeFilter}
        removeAllFilter={removeAllFilter}
      />
      <Card data={filteredData} handleClick={addToFilter} />
    </div>
  );
}

export default App;
