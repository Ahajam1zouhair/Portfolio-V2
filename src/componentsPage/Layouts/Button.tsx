import { useDispatch } from "react-redux";
import { switchMode } from "../../Redux/Reducres/Mode";
import "./test.css";
export default function Button() {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(switchMode());
  };

  return (
    <div className="toggle-switch fixed bottom-0 right-0 m-4 z-50 w-4/4  h-4/4 ">
      <label className="switch-label">
        <input type="checkbox" className="checkbox  hidden" onClick={handleToggle}   />
        <span className="slider"></span>
      </label>
    </div>
  );
}
