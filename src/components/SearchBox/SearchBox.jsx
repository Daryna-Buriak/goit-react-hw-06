import css from "./SeacrhBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filteredSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}
