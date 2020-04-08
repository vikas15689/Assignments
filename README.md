# Assignments

Project Name : DynamicForm <br/>
Prerequisite : To run project we required Visual Studio Code with Live Server Extention
<h3>How to run project</h3>
Dowload this project to your local system and open in VSC.Just right click on index.html and select "Open with live server"

<h3>Form meta data :</h3>
We can create form metadata object as shown as below
<pre>
let formMetaData = {
    name: 'UserForm', // name of form
    label: 'User Registration Form', // label to display this form
    fields: [{
        name: 'firstname', // name of input elemnt
        type: 'text', // type of input element
        label: 'First Name', // label of input element
        description: 'Please enter firstname', // description or more information about input element
        validations: ['Required', { 'MaxLength': [10] }, { 'MinLength': [3] }] // validation array and validation functions are defined in validation.js file
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
</pre>
<h3>By passing this object to Form we can create Instance of form </h3>
let form = new Form(formMetaData);

<h3> we can use container field of form object to get HTML element of form like below</h3>
<code> document.body.appendChild(form.container);</code>

This way we can display or create Dynamic Form

<h3> If we want to add validation functions then we can add it in validation.js file</h3>

Rules : Function must return boolean value and 'this' is instance of 'Field' class.
If value is valid then return true else false.

<h3>Sample Validation Function </h3>
<pre>
export function Required() {
    if (this.element.value) {
        return true;
    }
    this.pushError(this.label + ' is required');
    return false;
}
</pre>

<h3>On click of submit button we can see submitted values.</h3>

