import "./Form.css";

const Form = () => {
  return (
    <div className="form-block">
      <p className="form-block__heading">
        BOOK <span className="form-block__heading-accent">APPOINTMENT</span>
      </p>
      <p className="form-block__description">
        To reach out to our Saifee Hospital Team, please fill in the below form.
        Our team members will revert back to you shortly.
      </p>
      <form action="POST" className="form-block__form">
        <input
          type="text"
          placeholder="Full name"
          name="fullName"
          id="fullName"
          className="form-block__input"
        />
        <input
          type="email"
          placeholder="Email Id"
          name="email"
          id="email"
          className="form-block__input"
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="phoneNumber"
          id="phoneNumber"
          className="form-block__input"
        />
        <div className="form-block__select-group">
          <label htmlFor="department" className="form-block__label">
            Select Department / Package
          </label>
          <select
            name="department"
            id="department"
            className="form-block__select"
          >
            <option value=""></option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-block__select-group">
          <label htmlFor="service" className="form-block__label">
            Select Services
          </label>
          <select name="service" id="service" className="form-block__select">
            <option value=""></option>
            {/* Add more options as needed */}
          </select>
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          className="form-block__textarea"
        ></textarea>
        <input
          type="submit"
          value="BOOK NOW"
          className="form-block__bookNow-btn btn"
        />
      </form>
    </div>
  );
};

export default Form;
