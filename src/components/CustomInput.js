const CustomInput = ({ label, placeholder }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor="name">{label} </label>
      <input id="name" type="text" placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;
