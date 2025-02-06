import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function FlightBookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    departure: 'Hà Nội',
    destination: 'Hà Nội',
    tripType: {
      oneWay: false,  
      roundTrip: false,  
    },
    isFullNameValid: true, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || formData.fullName.length < 5 || !/^[A-Z\s]+$/.test(formData.fullName)) {
      setFormData({ ...formData, isFullNameValid: false });
    } else {
      setFormData({ ...formData, isFullNameValid: true });
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Form đặt vé máy bay</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Họ tên</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-user"></i> 
            </span>
            <input
              type="text"
              className={`form-control ${!formData.isFullNameValid ? 'is-invalid' : ''}`}
              id="fullName"
              name="fullName"
              placeholder="Họ tên"
              value={formData.fullName}
              onChange={handleChange}
              required
              pattern="[A-Z\s]{5,}" 
            />
            <span className="input-group-text">VNĐ</span>
          </div>
          {/* Error message */}
          {!formData.isFullNameValid && (
            <div className="invalid-feedback">
              Phải nhập 5 ký tự, in hoa.
            </div>
          )}
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Địa chỉ</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Địa chỉ"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Departure and Destination */}
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="departure" className="form-label">Đi từ</label>
            <select
              className="form-select"
              id="departure"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
            >
              <option value="Hà Nội">Hà Nội</option>
              <option value="TPHCM">TPHCM</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="destination" className="form-label">Đến</label>
            <select
              className="form-select"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            >
              <option value="Hà Nội">Hà Nội</option>
              <option value="TPHCM">TPHCM</option>
            </select>
          </div>
        </div>

        {/* Trip Type */}
        <div className="mb-3">
          <label className="form-label">Chọn chiều đi (Khứ hồi)</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="oneWay"
              name="oneWay"
              checked={formData.tripType.oneWay}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="oneWay">
              Đi
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="roundTrip"
              name="roundTrip"
              checked={formData.tripType.roundTrip}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="roundTrip">
              Về
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Đặt vé</button>
      </form>
    </div>
  );
}

export default FlightBookingForm;


