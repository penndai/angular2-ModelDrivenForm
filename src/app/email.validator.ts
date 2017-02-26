import { FormControl, FormGroup } from '@angular/forms'

export function validateEmail(c: FormControl) {
    let email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return email_regexp.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    }
}

export function validatePasswordMatch(self: string, compare: string) {
    return (group: FormGroup): { [key: string]: any } => {
        let selfvalue = group.controls[self].value;
        let confirmPassword = group.controls[compare].value;

        if (selfvalue !== confirmPassword) {           
             group.controls[self].setErrors({ 'notmatch': true });
             group.controls[compare].setErrors({ 'notmatch': true });           
            return {
                passwordCompare: { valid: true }
            }
        }
        else {            
            group.controls[self].setErrors(null);
            group.controls[compare].setErrors(null);
                        
        }
    }
}
