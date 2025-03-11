import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/ContactPage.css";

const ContactPage = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_country: "",
    user_state: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Hàm kiểm tra định dạng email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Hàm kiểm tra validation cho các trường
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "user_name":
        if (!value || value.trim() === "") {
          newErrors.user_name = "Name is required";
        } else if (value.length < 2) {
          newErrors.user_name = "Name must be at least 2 characters";
        } else {
          delete newErrors.user_name;
        }
        break;

      case "user_email":
        if (!value || value.trim() === "") {
          newErrors.user_email = "Email is required";
        } else if (!validateEmail(value)) {
          newErrors.user_email = "Invalid email format";
        } else {
          delete newErrors.user_email;
        }
        break;

      case "user_country":
        if (!value || value.trim() === "") {
          newErrors.user_country = "Country is required";
        } else {
          delete newErrors.user_country;
        }
        break;

      case "user_state":
        if (!value || value.trim() === "") {
          newErrors.user_state = "State is required";
        } else {
          delete newErrors.user_state;
        }
        break;

      case "message":
        if (!value || value.trim() === "") {
          newErrors.message = "Message is required";
        } else if (value.length < 10) {
          newErrors.message = "Message must be at least 10 characters";
        } else {
          delete newErrors.message;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  // Xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_24myi9l",
          "template_saj2mli",
          form.current,
          "PmunvrIn-8TvgecZa"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setMessage("Send Successful!");
            e.target.reset();
            setFormData({
              user_name: "",
              user_email: "",
              user_country: "",
              user_state: "",
              message: "",
            });
            setErrors({});
            setTimeout(() => setMessage(""), 3000);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setMessage("Send Failed. Please try again.");
          }
        );
    }
  };

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.user_name || formData.user_name.trim() === "") {
      newErrors.user_name = "Name is required";
    } else if (formData.user_name.length < 2) {
      newErrors.user_name = "Name must be at least 2 characters";
    }

    if (!formData.user_email || formData.user_email.trim() === "") {
      newErrors.user_email = "Email is required";
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }

    if (!formData.user_country || formData.user_country.trim() === "") {
      newErrors.user_country = "Country is required";
    }

    if (!formData.user_state || formData.user_state.trim() === "") {
      newErrors.user_state = "State is required";
    }

    if (!formData.message || formData.message.trim() === "") {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  return (
    <div className="contact">
      <h2>Contact with us</h2>
      <form ref={form} onSubmit={sendEmail}>
        {message && <div className="message">{message}</div>}

        <label>Name</label>
        <div className="input-wrapper">
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
          {errors.user_name ? (
            <span className="error">{errors.user_name}</span>
          ) : (
            formData.user_name && <span className="success">✔</span>
          )}
        </div>

        <label>Email</label>
        <div className="input-wrapper">
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
          {errors.user_email ? (
            <span className="error">{errors.user_email}</span>
          ) : (
            formData.user_email && <span className="success">✔</span>
          )}
        </div>

        <label>Country</label>
        <div className="input-wrapper">
          <input
            type="text"
            name="user_country"
            value={formData.user_country}
            onChange={handleChange}
          />
          {errors.user_country ? (
            <span className="error">{errors.user_country}</span>
          ) : (
            formData.user_country && <span className="success">✔</span>
          )}
        </div>

        <label>State</label>
        <div className="input-wrapper">
          <input
            type="text"
            name="user_state"
            value={formData.user_state}
            onChange={handleChange}
          />
          {errors.user_state ? (
            <span className="error">{errors.user_state}</span>
          ) : (
            formData.user_state && <span className="success">✔</span>
          )}
        </div>

        <label>Message</label>
        <div className="input-wrapper">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message ? (
            <span className="error">{errors.message}</span>
          ) : (
            formData.message && <span className="success">✔</span>
          )}
        </div>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactPage;
