import axios from "axios";
import {useEffect, useState} from "react";

function CustomerCRUD()
{
    const [accountnum, setAccountNum] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [cardnumber, setCardNumber] = useState("");
    const [pinnum, setPinNum] = useState("");
    const [city, setCity] = useState("");
    const [accounttype, setAccountType] = useState("");
    const [balance, setBalance] = useState("");
    const [customers, setUsers] = useState([]);

    useEffect(() => {
        (async () => await Load())();
    }, []);

    async function Load(){
        const result = await axios.get("https://localhost:7254/api/customer/Getcustomer");
        setUsers(result.data);
        console.log(result.data);
    }

    async function save(event){
        event.preventDefault();
        try{
            await axios.post("https://localhost:7254/api/customer/Addcustomer",{
                name: name,
                address: address,
                email: email,
                contact: contact,
                cardnumber: cardnumber,
                pinnum : pinnum,
                city:city,
                accounttype:accounttype,
                balance: balance,
            });
            alert("Customer Added Successfully.");
            setAccountNum("");
            setName("");
            setAddress("");
            setEmail("");
            setContact("");
            setCardNumber("");
            setPinNum("");
            setCity("");
            setAccountType("");
            setBalance("");

            Load();
        } catch(err){
            alert(err);
        }
    }

    async function editCustomer(customers){
        setName(customers.name);
        setAddress(customers.address);
        setEmail(customers.email);
        setContact(customers.contact);
        setCardNumber(customers.cardnumber);
        setPinNum(customers.pinnum);
        setCity(customers.city);
        setAccountType(customers.accounttype);
        setBalance(customers.balance);
        setAccountNum(customers.accountnum);
    }

    async function deleteCustomer(accountnum)
    {
        await axios.delete("https://localhost:7254/api/customer/Deletecustomer/" + accountnum);
        alert("Customer deleted successfully.");
        setAccountNum("");
        setName("");
        setAddress("");
        setEmail("");
        setContact("");
        setCardNumber("");
        setPinNum("");
        setCity("");
        setAccountType("");
        setBalance("");
        Load();
    }

    async function update(event){
        event.preventDefault();
        try{
            await axios.patch("https://localhost:7254/api/customer/Updatecustomer/" +customers.find((u) => u.accountnum=== accountnum).accountnum || accountnum,
            {
                accountnum: accountnum,
                name: name,
                address: address,
                email: email,
                contact: contact,
                cardnumber: cardnumber,
                pinnum : pinnum,
                city: city,
                accounttype : accounttype,
                balance: balance,
            }
            );
            alert("Customer Updated.");
            setAccountNum("");
            setName("");
            setAddress("");
            setEmail("");
            setContact("");
            setCardNumber("");
            setPinNum("");
            setCity("");
            setAccountType("");
            setBalance("");

            Load();

        } catch(err){
            alert(err);
        }
    }

    return (
        <div>
            <h1>Customer Details</h1>
            <div class="container mt-4">
                <form>
                    <div class="form-group">

                    <input
                    type="text"
                    class="form-control"
                    id="accountnum"
                    hidden value={accountnum}
                    onChange={(event) => {
                        setAccountNum(event.target.value);
                    }}
                    />

                    <label>Customer Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        value ={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    </div>
                    
                    <div class="form-group">
                        <label>Address</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="address"
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                        type="email"
                        class="form-control"
                        id="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        />
                    </div>

                    <div class="form-group">
                        <label>Contact</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="contact"
                        value={contact}
                        onChange={(event) => {
                            setContact(event.target.value);
                        }}
                        />
                    </div>

                    <div class="form-group">
                        <label>Card Number</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="cardnumber"
                        value={cardnumber}
                        onChange={(event) => {
                            setCardNumber(event.target.value);
                        }}
                        />
                    </div>

                    <div class="form-group">
                        <label>Pin Number</label>
                        <input
                        type="text"
                        class="form-control"
                        id="pinnum"
                        value={pinnum}
                        onChange={(event) => {
                            setPinNum(event.target.value);
                        }}
                         />
                    </div>

                    <div class="form-group">
                        <label>City</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="city"
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Account</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="accounttype"
                        value={accounttype}
                        onChange={(event) => {
                            setAccountType(event.target.value);
                        }}
                        />
                    </div>
                    <div class="form-group">
                            <label>Balance</label>
                            <input
                            type="text"
                            class="form-control"
                            id="balance"
                            value={balance}
                            onChange={(event) =>{
                                setBalance(event.target.value);
                            }}
                            />
                    </div>
                    <div>
                            <button class="btn btn-primary mt-4" onClick={save}>
                                Add
                            </button>
                            <button class="btn btn-warning mt-4" onClick={update}>
                                Update
                            </button>
                    </div>

                </form>

            </div>
            <br></br>

            <table class="table table-dark" align="center">
            <thead>
                <tr>
                    <th scope="col">Account Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>                  
                    <th scope="col">Contact</th>
                    <th scope="col">Card Number</th>
                    <th scope="col">Pin Number</th>
                    <th scope="col">City</th>
                    <th scope="col">Account Type</th> 
                    <th scope="col">Balance</th>                                       
                    <th scope="col">Option</th>
                </tr>
            </thead>
            {customers.map(function fn(customer){
                return (
                    <tbody>
                        <tr>
                            <th scope="row">{customer.accountnum}</th>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.email}</td>
                            <td>{customer.contact}</td>
                            <td>{customer.cardnumber}</td>
                            <td>{customer.pinnum}</td>
                            <td>{customer.city}</td>
                            <td>{customer.accounttype}</td>
                            <td>{customer.balance}</td>

                            <td>
                                <button
                                type="button"
                                class="btn btn-warning"
                                onClick={() => editCustomer(customer)}>Edit</button>
                                <button
                                type="button"
                                class="btn btn-warning"
                                onClick={() => deleteCustomer(customer.accountnum)}
                                >Delete</button>
                            </td>
                        </tr>
                    </tbody>
                );
            }
            )}
            </table>
        </div>
    );
}

export default CustomerCRUD;