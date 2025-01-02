import { Controller } from "react-hook-form";

const CustomTextArea = ({ name, label, control, rules, ...rest }) => {
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
            <textarea
              maxLength="100"
              rows="8"
              id={name}
              className={`form-control ${fieldState.error ? "is-invalid" : ""}`}
              {...field}
              {...rest}
              placeholder="Enter Product Description..."
            ></textarea>

            {fieldState.error && (
              <div className="invalid-feedback">{fieldState.error.message}</div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CustomTextArea;
