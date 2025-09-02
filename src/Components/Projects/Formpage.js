import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Form } from "react-router-dom";
import "./Formpage.css";

export const FormLogin = () => {
    const initialization = { user: "", email: "", num: "", gender: "", course: "", position: "" };

    const [formData, setformData] = useState((initialization));

    const [loginDatas, setloginDatas] = useState([]);

    const [dataIndex, setdataIndex] = useState(null);

    const [isEdit, setisEdit] = useState(false);

    const [receivedIndex, setreceivedIndex] = useState(null);



    const handleChange = (event) => {
        const { name, value } = event.target;

        setformData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.user.trim() && formData.email.trim() && formData.num.trim()) {
            if (isEdit) {
                loginDatas[dataIndex] = { ...formData };
                setdataIndex(null);
                setisEdit(false)
            } else {
                setloginDatas((prevState) => ([
                    ...prevState,
                    { ...formData }
                ]))
            }
            setformData(initialization)
        } else {
            alert("Required All Datas")
        }
    }

    const deleteData = (x) => {
        const NewData = loginDatas.filter((data, ind) => {
            return x != ind
        })

        setloginDatas((prevState) => ([
            ...NewData
        ]))

    }

    const editData = (index) => {
        // alert(index)
        setdataIndex(index);
        const foundData = loginDatas[index];
        // console.log(foundData);
        setformData(foundData);
        setisEdit(true);
    }

    return (
        <>
            <Navbar />
            <main>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label>Enter Name :</label>
                            </td>
                            <td>
                                <input type="text" name="user" value={formData.user} placeholder="enter name.." onChange={handleChange} /> <br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Enter Email :</label>
                            </td>
                            <td>
                                <input type="email" name="email" value={formData.email} placeholder="enter email.." onChange={handleChange} /><br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Enter Number :</label>
                            </td>
                            <td>
                                <input type="number" name="num" value={formData.num} placeholder="enter num.." onChange={handleChange} /><br />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="sub-btn">Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
                
                {loginDatas.length > 0 && <div className="display">
                    <div className="data">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Num</th>
                                <th>Action</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loginDatas.map((data, ind) => (
                                    <tr>
                                        <td>{data.user}</td>
                                        <td>{data.email}</td>
                                        <td>{data.num}</td>
                                        <td>
                                            <button className="dl-btn" type="button" onClick={() => { deleteData(ind) }} >Delete</button>
                                        </td>
                                        <td>
                                            <button className="edit-btn" type="button" onClick={() => { editData(ind) }} >Edit</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </div>
                </div>
                }

            </main>
        </>
    )

}
export default FormLogin;