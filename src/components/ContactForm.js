import React, { Component } from 'react';
import { Formik} from 'formik';
import * as Yup from 'yup';
import "yup-phone"
import axios from 'axios'
import swal from 'sweetalert';


export default class  ContactForm extends Component {
    submitForm = (values) => {
        axios
        .post("https://trailblazers-api.herokuapp.com/users", values)
          .then(res => {
            if(res.data.result === "success") {
             swal("Success!", res.data.message, "success")
             .then(value => {
              console.log(res.data.result)
             }); 
            } else if (res.data.result === "error") {
                swal("Error", res.data.message, "error");
                console.log(res.data.error)
            }
          })
          .catch(error => {
            console.log(error);
            swal("Error","Unexpected error", "error")
          });
      };
     render () {
       return (
         
         <Formik 
         initialValues={{
             name: '',
             email: '',
             mobile_no: '',
         }}
         validationSchema={Yup.object({
           name: Yup.string()
           .min(4, 'Must be at least 4 characters')
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
        email: Yup.string()
         .email()
         .required('Required'),
        mobile_no: Yup.string()
           .phone("IN", true, 'mobile_no is invalid' )
            .required('Required')
         })}
        onSubmit={(values, {setSubmitting, resetForm}) => (
            setTimeout(() => {
                this.submitForm(values, this.props.history);
                console.log("submitted",values)
                //alert(JSON.stringify(values, null, 2));
                setSubmitting(false)
                resetForm();
                
            }, 3000)
        )
    }
    
         >
    {props => {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
        } = props;
        

        return (
            <form action="#" method="" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className ="col-md-6 form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        value={values.name} name="name" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        placeholder="First Name *" 
                        className = {errors.name && touched.name && "error"}
                        />
                        {errors.name && touched.name &&(
                            <div className= "input-feedback">{errors.name}</div>
                        ) }
                      </div>
                      
                    
                      <div className ="col-md-6 form-group">
                        <label htmlFor="mobile_no">Mobile_no</label>
                        <input 
                        type="text"
                        value={values.mobile_no}
                        name="mobile_no"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="mobile number *" 
                        className = {errors.mobile_no && touched.mobile_no && "error"}
                        />
                        {errors.mobile_no && touched.mobile_no &&(
                            <div className= "input-feedback">{errors.mobile_no}</div>
                        ) }
                      </div>
                     
                    
                    </div>
                    <div className ="row">
                      <div className ="col-md-12 form-group">
                        
                      </div>
                    </div>
                    <div className ="row">
                      <div className ="col-md-12 form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        
                         value={values.email} 
                         name="email" 
                         onChange={handleChange}
                         onBlur={handleBlur}
                         placeholder="Email *" 
                         className = {errors.email && touched.email && "error"}
                        />
                        {errors.email && touched.email &&(
                            <div className= "input-feedback">{errors.email}</div>
                        ) }
                      </div>
                      
                    
                    </div>
        
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input type="submit" 
                        disabled={isSubmitting} 
                        value="Send Message"
                        className="btn btn-primary px-3 py-3"
                        />
                      </div>
                     </div>
                     
                    </form>

                    
        )

    }}
     </Formik>
     
     

   )}

}



