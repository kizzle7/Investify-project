export default (input) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const fullNameRegex = /([a-zA-Z])+([ -~])*/;
    const phoneRegex = /\+?\d{1,3}\d{6,}/;
    const passwordRegex = /^[0-9A-Za-z]{6,}$/;
    let { fullName, password, email, phone, accountName, accountNo, bankName, plan } = input;
    var errors = []

    if (email && !emailRegex.test(email)) {
        errors.push({ emailErr: 'Email is not valid' });
    }

    if (fullName && !fullNameRegex.test(fullName)) {
        errors.push({ fullNameErr: 'Fullname is not valid' })
    }

    if (password && !passwordRegex.test(password)) {
        errors.push({ passwordErr: 'Password is alphanumeric and should have at least 6 characters' })
    }

    if (phone && !phoneRegex.test(phone)) {
        errors.push({ phoneErr: 'Invalid phone number' })
    }

    if(accountName && !fullNameRegex.test(accountName)) {
        errors.push({ accountNameErr: 'Invalid account name' })
    }

    if(accountNo && !phoneRegex.test(accountNo)) {
        errors.push({ accountNoErr: 'Invalid account number' })
    }

    if(bankName && !fullNameRegex.test(bankName)) {
        errors.push({ bankNameErr: 'Invalid bank name' })
    }

    if(plan && !fullNameRegex.test(plan)) {
        errors.push({ planErr: 'Plan is required' })
    }

    return errors;
}