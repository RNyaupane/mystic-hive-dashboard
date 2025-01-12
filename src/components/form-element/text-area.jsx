import { Controller } from "react-hook-form";

const CustomTextArea = ({
  name,
  label,
  control,
  rules,
  placeholder,
  ...rest
}) => {
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
              rows="8"
              id={name}
              className={`form-control ${fieldState.error ? "is-invalid" : ""}`}
              {...field}
              {...rest}
              placeholder={placeholder}
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
