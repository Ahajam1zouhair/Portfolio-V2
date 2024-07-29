
import "./loading.css";
export default function Loading() {
  return (
    <div className="flex items-center h-screen justify-center ">
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
}
