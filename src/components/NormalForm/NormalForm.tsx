import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className={cn("border border-red-500 w-full p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(
          "border border-blue-500 grid grid-cols-1 justify-items-center gap-5",
          {
            "md:grid-cols-2": double,
          }
        )}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Email
          </label>
          <input
            className="w-full"
            type="text"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Password
          </label>
          <input
            className="w-full"
            type="text"
            id="password"
            {...register("password")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Email
          </label>
          <select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
            <option>four</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Email
          </label>
          <textarea></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Email
          </label>
          <input type="checkbox" />
        </div>
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default NormalForm;
