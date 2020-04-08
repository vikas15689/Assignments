import { SubmitButton, FormElement, FormContainer, FormLabel, ResultElement, Button, MetaDataElement } from "./elements.js";
import { Field } from "./field.js";

export class Form {
    constructor(metadata) {

        this.getFormData = this.getFormData.bind(this);
        this.setMetaData = this.setMetaData.bind(this);
        this.toggleResult = this.toggleResult.bind(this);
        this.getResultConatiner = this.getResultConatiner.bind(this);
        this.getMeataDataConatiner = this.getMeataDataConatiner.bind(this);
        this.toggleMetadata = this.toggleMetadata.bind(this);
        this.showMetadata = this.showMetadata.bind(this);
        this.setMetaData(metadata);

        // return this.container;
    }

    setMetaData(metadata) {
        this.metadata = metadata;
        this.name = metadata.name
        this.label = metadata.label;
        this.fields = [];
        metadata.fields.forEach(fieldMetaData => {
            this.fields.push(new Field(fieldMetaData));
        });


        // creating HTMLFormElement
        let element = FormElement(this.name);
        // appending form label
        element.appendChild(FormLabel(this.label));
        // adding form fields to it
        this.fields.forEach(field => {
            element.appendChild(field.container);
        });

        // creating and appending submit button
        element.appendChild(SubmitButton());

        const mtbtn = Button('Show Metadata');
        mtbtn.setAttribute('class', 'pull-left width-150 btn');
        mtbtn.addEventListener("click", this.showMetadata.bind(this), false);

        element.appendChild(mtbtn);
        // adding submit event listener to form
        element.addEventListener("submit", this.submit.bind(this), false);
        // setting element to instance
        this.element = element;

        // setting form container
        this.container = FormContainer(element);


        // appending result container to forn container
        this.container.appendChild(this.getResultConatiner());
        this.container.appendChild(this.getMeataDataConatiner());

    }


    submit(e) {
        // preventing default action
        e.preventDefault();

        // iterating thourgh fields
        let formResult = true;
        for (let i = 0; i < this.fields.length; i++) {
            let result = this.fields[i].validate();
            if (!result && formResult) {
                formResult = false;
              //  break;
            }
        }
        if (!formResult) {
            return formResult;
        }

        this.container.querySelector('.result-wrapper .result').innerHTML = JSON.stringify(this.getFormData());
        // alert(JSON.stringify(this.getFormData()));
        this.toggleResult();

    }

    toggleResult() {
        this.container.querySelector('.form-wrapper').classList.toggle('display-none');
        this.container.querySelector('.result-wrapper').classList.toggle('display-none');
    }

    toggleMetadata() {
        this.container.querySelector('.form-wrapper').classList.toggle('display-none');
        this.container.querySelector('.metadata-wrapper').classList.toggle('display-none');
    }

    getFormData() {
        let data = {};
        this.fields.forEach(field => {
            data[field.element.name] = field.element.value;
        });
        return data;
    }

    showMetadata() {
        this.toggleMetadata();
        this.container.querySelector('.metadata-wrapper .metadata').innerHTML = JSON.stringify(this.metadata);
    }

    getResultConatiner() {
        // adding result container
        const res = ResultElement('Result');
        // adding back button : to go to form 
        const btn = Button('Back');
        btn.setAttribute('class', 'back');
        // adding click listener 
        btn.addEventListener("click", this.toggleResult, false);
        // appending button to result container
        res.appendChild(btn);
        // by default result is hidden
        res.setAttribute('class', 'display-none result-wrapper');

        return res;
    }

    getMeataDataConatiner() {
        // adding metadata container
        const res = MetaDataElement('Metadata');
        // adding back button : to go to form 
        const btn = Button('Back');
        btn.setAttribute('class', 'back btn width-150 pull-left');
        // adding click listener 
        btn.addEventListener("click", this.toggleMetadata, false);
        // appending button to result container
        res.appendChild(btn);
        // by default result is hidden
        res.setAttribute('class', 'display-none metadata-wrapper');

        return res;
    }

}
