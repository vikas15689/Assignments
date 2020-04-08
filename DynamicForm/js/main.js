import { Form } from "./form.js";


let formMetaData = {
    name: 'UserForm',
    label: 'User Registration Form',
    fields: [{
        name: 'firstname',
        type: 'text',
        label: 'First Name',
        description: 'Please enter firstname',
        validations: ['Required', { 'MaxLength': [10] }, { 'MinLength': [3] }]
    }, {
        name: 'lastname',
        type: 'text',
        label: 'Last Name',
        validations: ['Required', { 'MaxLength': [10] }, { 'MinLength': [3] }]
    }, {
        name: 'email',
        type: 'email',
        label: 'Email',
        validations: ['Required']
    }, {
        name: 'phone',
        type: 'number',
        label: 'phone', 
        validations: ['Required']
    }, {
        name: 'password',
        type: 'password',
        label: 'Password',
        validations: ['Required', { 'MaxLength': [10] }, { 'MinLength': [3] }, 'AtLeastOneDigit', 'AtLeastOneLowercase', 'AtLeastOneUppercase']
    }, {
        name: 'age',
        type: 'number',
        label: 'Age',
        validations: [{ 'Max': [60] }, { 'Min': [18] }]
    }, {
        name: 'gender',
        type: 'select',
        label: 'Gender',
        options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
        ]
    }]
}

let form = new Form(formMetaData);
window.addEventListener('DOMContentLoaded', (event) => {
    // console.log(JSON.stringify(form));
    document.body.appendChild(form.container);
});