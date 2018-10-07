import React from 'react';
import { reduxForm, Field } from 'redux-form';
import createToken from './TokenActions.js'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.sym) {
    errors.sym = 'Required'
  }
  if (!values.supply) {
    errors.supply = 'Required'
  }
  if (!values.accounts) {
    errors.accounts = 'Required'
  }
  return errors;
}
const renderInput = ({input, meta, label, type}) => 
  <div className="form-group">        
    <label>{label}</label>
    <input {...input} type = {type} className = 'input'/>
    {meta.error && meta.touched && <div>{meta.error}</div>}
  </div>

let TokenForm = ({ handleSubmit, submitting }) => 
      <div className = 'container'>        
        <form onSubmit = { handleSubmit(createToken)} className = 'token-form'>
          <section>
            <h2>Create Your Token</h2>                  
                <Field  name = 'name' label = 'Enter Token name:' type = 'text' component = {renderInput}/>                       
                <Field name = 'sym' label = 'Enter Token Symbol:' type = 'text' component = {renderInput}/>
                <Field name = 'supply' label = 'Enter Total Supply:' type = 'number' component = {renderInput}/>
                <Field name = 'accounts' label = 'Enter # of Accounts:' type = 'number' component = {renderInput}/>                  
              <div className="form-group">
                <button type = 'submit' className ='submit-btn' disabled = {submitting}> submit</button>
              </div>
            </section>
        </form>
      </div>
  

TokenForm = reduxForm({
  form: 'token',
  validate
})(TokenForm);

export default TokenForm;