import RegisterForm from './Form';

export default RegisterForm;
// import React, { useState, useEffect } from 'react';

// const Register = () => {
//     const [firstName, setFirstName] = useState(null);
//     const [lastName, setLastName] = useState(null);
//     const [emailId, setEmailId] = useState(null);
//     const [password, setPassword] = useState(null);
//     const [education, setEducation] = useState(null);
//     const [select, setSelect] = useState("candidate");

//     useEffect(() => {
//         console.log(select);
//     });
    
//     return ( 
//         <div className="container">
//             <form className="ui form">
//                 <div class="four wide field">
//                     <lable>
//                         First Name:                         
//                     </lable>
//                     <input value={firstName} 
//                         onChange={ (e) => setFirstName(e.target.value) } 
//                         placeholder="First Name"
//                         type="text" 
//                         name="FIRST NAME"
//                         required/>
//                 </div>
//                 <div class="four wide field">
//                     <lable>
//                         Last Name: 
//                     </lable>
//                     <input value={lastName} 
//                         onChange={ (e) => setLastName(e.target.value) } 
//                         placeholder="Last Name"
//                         type="text"/>
//                 </div>
//                 <div class="four wide field">
//                     <lable>
//                         Email id: 
//                     </lable>
//                     <input value={emailId} 
//                         onChange={ (e) => setEmailId(e.target.value) } 
//                         placeholder="example@gmail.com"
//                         type="email" 
//                         required/>
//                 </div>
//                 <div class="four wide field">
//                     <lable>
//                         Password: 
//                     </lable>
//                     <input value={password} 
//                         onChange={ (e) => setPassword(e.target.value) } 
//                         placeholder="Password"
//                         type="password" 
//                         required/>
//                 </div>
//                 <div class="four wide field">
//                     <lable>
//                         Education: 
//                     </lable>
//                     <input value={education} 
//                         onChange={ (e) => setEducation(e.target.value) } 
//                         placeholder="Education"
//                         type="text" 
//                         required/>
//                 </div>
//                 <div class="four wide field">
//                     <lable>
//                         Register as: 
//                     </lable>
//                         <select value={select} onChange={ (e) => setSelect(e.target.value) }>
//                             <option value="candidate">Candidate</option>
//                             <option value="recuiter">Recuiter</option>
//                         </select>
//                 </div>
//                 <div class="four wide field">
//                     <button className="ui button red">Register</button>
//                 </div>
//           </form>
//         </div>
//     );
// }

// export default Register;

