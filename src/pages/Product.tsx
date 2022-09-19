import { ChangeEvent, FormEvent, useState } from "react";

type FormValue = {
  name: string;
  email: string;
  password: string;
};

const Product = () => {
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formValue.email === "") {
      return setError("Please enter a valid email");
    }
    console.log(formValue);
  };
  return (
    <div>
      <button
        onClick={() => {
          const form = document.getElementById("1") as HTMLFormElement;

          form.scrollIntoView({ behavior: "smooth" });
          const btn = form.getElementsByTagName(
            "button"
          )[0] as HTMLButtonElement;
          btn.click();
        }}
        style={{ marginBottom: "100vh" }}
      >
        submit
      </button>
      <form onSubmit={onSubmit} id="1">
        <input value={formValue.name} onChange={onChange} name="name" />
        <input value={formValue.email} onChange={onChange} name="email" />
        <input value={formValue.password} onChange={onChange} name="password" />
        {error && <p>{error}</p>}
        <button type="submit">s</button>
      </form>
    </div>
  );
};

export default Product;
