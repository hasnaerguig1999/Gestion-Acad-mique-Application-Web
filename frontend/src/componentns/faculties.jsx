import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footer';
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2';

export default function Faculties() {
    const [faculties, setFaculties] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/faculties');
                setFaculties(response.data);
            } catch (error) {
                console.error('Failed to fetch faculties:', error);
            }
        };

        fetchData();
    }, []);

    const deleteFaculty = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3000/faculties/${id}`);
                setFaculties(faculties.filter(faculty => faculty.id !== id));
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } catch (error) {
                console.error('Failed to delete faculty:', error);
            }
        }
    };
    const editFaculty = async (id) => {
        const faculty = faculties.find(faculty => faculty.id === id);

        const result = await Swal.fire({
            title: 'Edit Faculty',
            html:
                `<input id="swal-input1" class="swal2-input" placeholder="Name" value="${faculty.name}">` +
                `<input id="swal-input2" class="swal2-input" placeholder="Address" value="${faculty.address}">`,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            }
        })
        if (result.isConfirmed) {
            try {
                await axios.patch(`http://localhost:3000/faculties/${id}`, {
                    name: result.value[0],
                    address: result.value[1]
                });
                setFaculties(faculties.map(fac => fac.id === id ? { ...fac, name: result.value[0], address: result.value[1] } : fac));
                Swal.fire(
                    'Edited!',
                    'Your file has been edited.',
                    'success'
                )
            } catch (error) {
                console.error('Failed to edit faculty:', error);
            }
        }
    }
    return (
        <>
            <div className="container">
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
                            <button
                                style={{
                                    marginLeft: '27px',
                                    backgroundColor: '#7fd3ed',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '10px 20px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    position: 'fixed',
                                }}
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('loginData');
                                    window.location.href = "/login";
                                }}                            >
                                Logout
                            </button>
                            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">

                                <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Faculty List</a></h1>
                            </div>
                            <div className="faculties-container">

                                <div className="add-faculty">
                                    <a href="/addFaculty">
                                        <button className="btn btn-primary add-faculty-button">+ Add Faculty</button>        </a>
                                </div>
                                <br />
                                <div className="faculty-grid">
                                    {faculties.map((faculty, index) => (
                                        <div key={index} className="faculty-card">
                                            <h2 className="faculty-name">{faculty.name}</h2>
                                            <p className="faculty-address">{faculty.address}</p>
                                            <div className="d-flex " >
                                                <button onClick={() => editFaculty(faculty.id)} className="edit-button" style={{ backgroundColor: '', color: 'white', border: 'none', borderRadius: '4px', padding: '10px 20px', cursor: 'pointer', transition: '0.3s', boxShadow: '0 2px 3px rgba(0,0,0,0.1)' }}>
                                                    <BiEdit style={{ color: 'white' }} />
                                                </button>
                                                <button onClick={() => deleteFaculty(faculty.id)} className="delete-button" style={{ backgroundColor: '', color: 'white', border: 'none', borderRadius: '4px', padding: '10px 20px', cursor: 'pointer', marginLeft: '10px', transition: '0.3s', boxShadow: '0 2px 3px rgba(0,0,0,0.1)' }}>
                                                    <RiDeleteBin5Line style={{ color: 'white' }} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
