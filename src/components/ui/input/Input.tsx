import clsx from "clsx";
import { ChangeEvent, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  title: string;
  error?: FieldError;
  type?: string;
  wrapperClassName?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<any>) => void;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      title,
      error,
      type = "text",
      wrapperClassName = "",
      value,
      onChange,
      placeholder = "",
      ...register
    },
    ref
  ) => {
    return (
      <div className={wrapperClassName}>
        <h3 className="mb-[4px] leading-[20px] text-text-primary-lightmode">
          {title}
        </h3>
        {type === "phone" ? (
          <div
            className={clsx(
              "border border-stroke-neutral rounded-lvl-4 py-[13px] px-[14px] w-full flex gap-[10px] items-center bg-secondary-background text-[13px] placeholder:text-text-neutral animate-def has-[:focus]:border-button-secondary-darkmode ",
              {
                "!text-red placeholder:!text-red border-red":
                  error?.message || error?.type,
              }
            )}
          >
            <strong className="text-[16px]">+996</strong>
            <input
              // @ts-ignore
              ref={ref}
              type="number"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={clsx("mt-[2px] w-full leading-[17px]", {
                "!text-red placeholder:!text-red":
                  error?.message || error?.type,
              })}
              {...register}
            />
          </div>
        ) : (
          <input
            // @ts-ignore
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={clsx(
              "border border-stroke-neutral rounded-lvl-4 py-[13px] px-[14px] w-full bg-secondary-background text-[13px] placeholder:text-text-neutral focus:border-button-secondary-darkmode",
              {
                "!text-red placeholder:!text-red border-red": error?.message,
              }
            )}
            {...register}
          />
        )}
        {(error?.message || error?.type) && (
          <span className="mt-[5px] block text-[10px] text-red font-medium">
            {error.message || error.type}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
