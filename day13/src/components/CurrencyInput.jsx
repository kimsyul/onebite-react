const CurrencyInput = ({ currency, value, onChange }) => {
  return (
    <div>
      <label>{currency}:</label>
      <input
        name={currency}
        value={value}
        onChange={(e) => {
          onChange(currency, e.target.value);
        }}
        type="number"
      />
    </div>
  );
};

export default CurrencyInput;
