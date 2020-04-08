
export function Required() {
    if (this.element.value) {
        return true;
    }
    this.pushError(this.label + ' is required');
    // alert(this.element.name+' is required');
    return false;
}

export function MaxLength(limit) {
        if (this.element.value.length > limit) {
            this.pushError('Maximum '+limit+' characters allowed');
            return false;
        }
        return true;
}


export function MinLength(limit) {
    if (this.element.value.length < limit) {
        this.pushError('Minimum '+limit+' characters required');
        return false;
    }
    return true;
}

export function AtLeastOneDigit(){
    if(!/\d/.test(this.element.value)){
        this.pushError('Atleast 1 digit required');
        return false;
    }
    return true;
}
export function AtLeastOneLowercase(){
    if(!/[a-z]/.test(this.element.value)){
        this.pushError('Atleast 1 lowercase character required');
        return false;
    }
    return true;
}
export function AtLeastOneUppercase(){
    if(!/[A-Z]/.test(this.element.value)){
        this.pushError('Atleast 1 uppercase character required');
        return false;
    }
    return true;
}


export function Max(limit) {
    if (this.element.value > limit) {
        this.pushError('Less than '+limit+' allowed');
        return false;
    }
    return true;
}


export function Min(limit) {
if (this.element.value < limit) {
    this.pushError('Greater than '+limit+' allowed');
    return false;
}
return true;
}