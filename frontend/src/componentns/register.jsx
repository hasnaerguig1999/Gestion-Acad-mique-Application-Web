import React, { useState } from 'react';
import Footer from './footer';
import axios from 'axios';




export default function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/auth/sign-up', formData);
      console.log('Registration successful');
      window.location.href = '/login';
    } catch (error) {
      if (error.response) {
        console.error('Registration failed:', error.response.data.message);
      } else {
        console.error('Registration failed. No response from the server.');
      }
    }
  };
  return (
    <>
      <div className="login-root">
        <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
                <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
                <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
                <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
                <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
                <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
                <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
                <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
              </div>
            </div>
          </div>
          <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Académie Wizard</a></h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">Sign up</span>
                  <form onSubmit={handleSubmit}>
                    <div className="field padding-bottom--24">
                      <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        value={formData.userName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Number Phone"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <select
                        className="select"
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="" >Select a role</option>
                        <option value="superadmin" >Super Admin</option>
                        <option value="teacher" >Teacher</option>
                        <option value="etudiant" >Student</option>
                        <option value="doyen" >Doyen</option>
                        <option value="chef_departement" > chef departement</option>

                      </select>
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="submit" name="submit" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}