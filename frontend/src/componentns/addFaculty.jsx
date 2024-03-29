import React, { useState } from 'react'
import Footer from './footer'
import axios from 'axios'



export default function AddFaculty() {
  const [formData, setFormData] = useState({

    name: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/faculties', formData);
      console.log('Faculty add successful');
      window.location.href = '/Faculties';
    } catch (error) {
      if (error.response) {
        console.error('add  failed:', error.response.data.message);
      } else {
        console.error('add faculty failed. No response from the server.');
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
                  <span className="padding-bottom--15">Add Faculty</span>
                  <form onSubmit={handleSubmit}>
                    <div className="field padding-bottom--24">
                      <input
                        type="text"
                        name="name"
                        placeholder="Faculty Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <input
                        type="text"
                        name="address"
                        placeholder="Faculty Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
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
