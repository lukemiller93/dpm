interface FormInput {
  className?: string;
  name: string;
  labelText: string;
  type: string;
  register?: any;
  errors?: any;
}

export default function Input({
  className,
  name,
  labelText,
  type,
  register,
  errors,
}: FormInput) {
  return (
    <div className={`form-group ${className && className}`}>
      <label htmlFor={name}>{labelText}</label>
      {type !== "textarea" ? (
        <input type={type} {...register(name)} />
      ) : (
        <textarea {...register(name)} rows="6" />
      )}
      {errors && <small className="errors">{errors?.message}</small>}
    </div>
  );
}
