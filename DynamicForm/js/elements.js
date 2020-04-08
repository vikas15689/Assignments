export function FieldContainer() {
    const container = document.createElement('div');
    container.setAttribute('class', 'field');
    return container;
};
export function FormContainer(form) {
    const container = document.createElement('div');
    container.setAttribute('class', 'form-container');

    const formwrapper = document.createElement('div');
    formwrapper.setAttribute('class', 'form-wrapper')
    formwrapper.appendChild(form);
    container.appendChild(formwrapper);
    return container;
};

export function FieldLabel(label) {
    const element = document.createElement('p');
    element.innerHTML = label;
    return element;
}

export function SubmitButton() {
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit';

    return submit;
}

export function FormElement(name) {
    const form = document.createElement('form');
    form.name = name;
    return form;
}

export function FormLabel(label) {
    const formlabel = document.createElement('h1');
    formlabel.innerHTML = label;
    return formlabel;
}

export function ErrorElement(error) {
    const err = document.createElement('div');
    err.innerHTML = error;
    err.setAttribute('class', 'error');
    return err;

}

export function Button(label){
    const button = document.createElement('input');
    button.type = 'button';
    button.value = label;

    return button;
}

export function ResultElement(label){
    const resultContainer=document.createElement('div');
    resultContainer.setAttribute('class','result-wrapper');
    resultContainer.appendChild(FormLabel(label));

    const result=document.createElement('div');
    result.setAttribute('class','result');

    resultContainer.appendChild(result);
    return resultContainer;
}

export function MetaDataElement(label){
    const resultContainer=document.createElement('div');
    resultContainer.setAttribute('class','metadata-wrapper');
    resultContainer.appendChild(FormLabel(label));

    const result=document.createElement('div');
    result.setAttribute('class','metadata');

    resultContainer.appendChild(result);
    return resultContainer;
}

export function InputDescription(description) {
    const element = document.createElement('p');
    element.setAttribute('class','input-description');
    element.innerHTML = description;
    return element;
}