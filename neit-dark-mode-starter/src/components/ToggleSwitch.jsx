// eslint-disable-next-line react/prop-types
const ToggleSwitch = ({ onToggle }) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} />
        <span className="slider round"></span>
      </label>
    </>
  );
};


export default ToggleSwitch;
