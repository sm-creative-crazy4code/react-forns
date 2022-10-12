import React from 'react'

export default function Form () {

    const [formsData, setFormData ]= React.useState({
        email:"",
        password:"",
        confirm_password:"",
        receive_newsletter:true,
 })

 function handelChange(event){

    setFormData((prevData)=>{
        const {name, type, checked, value} =event.target
        return{
            ...prevData,
            [name]: type==="checkbox"?checked:value }
        });
   console.log(formsData)
}


function handelSubmit(event){
    event.preventDefault()
    if(formsData.password!==formsData.confirm_password){
       return console.log("Confirm password should match")
    }

    if( !formsData.checked){
        console.log("Thanks for signing the newsletter")
    }


 }

  return (
 

    <div>
<form>
  <input placeholder='email' type="email" id="siginemail" name="email" value={formsData.email} onChange={handelChange}/>
  <input placeholder='password' type="password" id="password" name="password" value={formsData.password} onChange={handelChange}/>
  <input placeholder='Confirm Password' type="password" id="confirm_password" name="confirm_password" value={formsData.confirm_password} onChange={handelChange}/>
  <input placeholder='email' type="checkbox" id="receive_newsletter" name="receive_newsletter"  checked={formsData.receive_newsletter} onChange={handelChange}/>
  <label htmlFor='receive_newslette'> do yo want to receive newsletter??</label>
   <button type='submit' onClick={handelSubmit}>SUBMIT</button>

</form>

    </div>
  )
}
