import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../utils/context/firebase";

export default function Login() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  const navigate = useNavigate();
   const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredentials = await signInUser(email, password);
      if (userCredentials) {
        setFormFields({ email: " ", password: "" });
        navigate("/private");
      }
    } catch (error) {
      console.log("Error signing in user:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input input-bordered input-success "
        type="email"
        name="email"
        placeholder="user@email.com"
        value={email}
        onChange={handleChange}
      />

      <input
        //   className="input input-bordered input-success w-full max-w-xs"
        className=" input input-bordered input-success "
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button className="input input-bordered input-success " type="submit">
        Submit
      </button>
    </form>
  );
}
