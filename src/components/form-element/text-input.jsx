import { Controller } from "react-hook-form";

const TextInputField = ({ name, label, control, rules, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input
              id={name}
              className={`form-control ${fieldState.error ? "is-invalid" : ""}`}
              {...field}
              {...rest}
            />
            {fieldState.error && (
              <div className="invalid-feedback">{fieldState.error.message}</div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default TextInputField;
