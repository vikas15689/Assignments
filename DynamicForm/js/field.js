import { FieldContainer, FieldLabel, ErrorElement, InputDescription } from "./elements.js";
import * as Validation from './validation.js'

export class Field {
    // few fields has default values
    constructor(metadata) {


        this.validate = this.validate.bind(this);
        this.pushError = this.pushError.bind(this);
        this.displayErrors = this.displayErrors.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
        this.setMetaData = this.setMetaData.bind(this);

        this.setMetaData(metadata);

    }

    setMetaData(metadata) {
        // setting propeties to instance
        this.name = metadata.name;
        this.type = metadata.type;
        this.label = metadata.label;
        this.description = metadata.description;
        this.validations = metadata.validations ? metadata.validations : [];
        this.options = metadata.options ? metadata.options : [];
        this.defaultValue = metadata.defaultValue;
        // by default errors are zero
        this.errors = [];
        this.container = FieldContainer();
        this.container.appendChild(FieldLabel(this.label));
        // creating HTMLInputElement
        let element = this.type === 'select' ? document.createElement('select') : document.createElement('input');
        element.defaultValue = this.defaultValue ? this.defaultValue : '';
        element.name = this.name;
        if(this.type !== 'select' )
        element.type = this.type;

        if (this.options.length > 0 && this.type === 'select') {
            this.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.innerHTML = option.label;
                if (option.value === this.defaultValue) {
                    opt.setAttribute('selected', true);
                }
                element.options.add(opt);
            });
        }

        // setting element to instance
        this.element = element;
        element.addEventListener("change", this.validate, false);
        this.container.appendChild(element);
        if (this.description) {
            this.container.appendChild(InputDescription(this.description));
        }
    }

    validate() {
        this.clearErrors();

        let fieldResult=true;
        // console.log(this);
        if (this.validations.length === 0) {
            return fieldResult;
        } else {
            for (let i = 0; i < this.validations.length; i++) {
                //  console.log(this.validations[i]);
                let result = typeof this.validations[i] === 'string' ? Validation[this.validations[i]].bind(this)() : Validation[Object.keys(this.validations[i])[0]].apply(this, Object.values(this.validations[i])[0])
                if (!result && fieldResult) {
                    fieldResult=false;
                   // return false;
                }
            }
            return fieldResult;
        }
    }

    clearErrors() {

        // deleting all errrors
        this.errors = [];
        let errcontainer = this.container.querySelector(".error-container");
        if (errcontainer) {
            errcontainer.remove();
        }

    }

    pushError(error) {
        // pushing error to field
        this.errors.push(error);
        this.displayErrors();
    }

    displayErrors() {
        let errcontainer = this.container.querySelector(".error-container");
        if (errcontainer) {
            errcontainer.remove();
        }
        // displaying errors on html
        let errElements = document.createElement('div');
        errElements.setAttribute('class', 'error-container');
        this.errors.forEach(err => {
            errElements.appendChild(ErrorElement(err));
        });
        this.container.appendChild(errElements);
    }
}
