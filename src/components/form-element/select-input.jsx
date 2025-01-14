import { Controller } from "react-hook-form";

const CustomSelect = ({ name, label, control, rules, option, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label text-secondary">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <select
              id={name}
              className={`js-example-basic-single form-select form-control ${
                fieldState.error ? "is-invalid" : ""
              }`}
              {...field}
              {...rest}
              data-width="100%"
              defaultValue={0}
            >
              <option value={0} disabled>
                Select {name}
              </option>
              {option?.map((item, index) => (
                <option key={index} value={item?.value}>
                  {item?.label}
                </option>
              ))}
            </select>
            {fieldState.error && (
              <div className="invalid-feedback">{fieldState.error.message}</div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CustomSelect;
