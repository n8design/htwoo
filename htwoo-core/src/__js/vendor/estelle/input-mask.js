export default class InputMask {
    constructor(options) {
        this.defaults = {
            masked: '.masked',
            maskedNumber: '_XdDmMyY9',
            maskedLetter: '+',
            noValidate: '',
            onError: function () { }
        };

        if (options && options.masked) {
            options.masked = typeof options.masked === 'string'
                ? document.querySelectorAll(options.masked)
                : options.masked;
        }

        this.options = options
            ? {
                masked: options.masked || document.querySelectorAll(this.defaults.masked),
                maskedNumber: options.maskedNumber || this.defaults.maskedNumber,
                maskedLetter: options.maskedLetter || this.defaults.maskedLetter,
                error: options.onError || this.defaults.onError
            }
            : { ...this.defaults, masked: document.querySelectorAll(this.defaults.masked) };

        this.refresh(true);
    }

    refresh(init) {
        if (!init) {
            this.options.masked = document.querySelectorAll(this.options.masked);
        }

        for (let i = 0; i < this.options.masked.length; i++) {
            const input = this.options.masked[i];
            const parentClass = input.parentNode.getAttribute('class');

            if (!parentClass || (parentClass && parentClass.indexOf('shell') === -1)) {
                this.createShell(input);
                if (this.options.noValidate) {
                    this.noValidate(input);
                }
                this.activateMasking(input);
            }
        }
    }

    noValidate(input) {
        this.getForm(input).setAttribute('noValidate', true);
    }

    getForm(input) {
        return typeof input.form === "string" ? this.closestForm(input) : input.form;
    }

    closestForm(input) {
        let parent = input.parentNode;
        while (parent.parentNode) {
            if (parent.tagName.toUpperCase() === 'FORM') {
                return parent;
            }
            parent = parent.parentNode;
        }
        return document.body;
    }

    createShell(input) {
        const wrap = document.createElement('span');
        const mask = document.createElement('span');
        const emphasis = document.createElement('i');
        const inputClass = input.getAttribute('class');
        const placeholderText = input.getAttribute('placeholder');
        const placeholder = document.createTextNode(placeholderText);

        input.setAttribute('maxlength', placeholder.length);
        input.setAttribute('data-placeholder', placeholderText);
        input.removeAttribute('placeholder');

        if (!inputClass || (inputClass && !inputClass.includes('masked'))) {
            input.setAttribute('class', `${inputClass} masked`);
        }

        mask.setAttribute('aria-hidden', 'true');
        mask.setAttribute('id', `${input.getAttribute('id')}Mask`);
        mask.appendChild(emphasis);
        mask.appendChild(placeholder);

        wrap.setAttribute('class', 'shell');
        wrap.appendChild(mask);

        // Insert the wrapper only if input's parent is not already `wrap`
        if (input.parentNode !== wrap) {
            input.parentNode.insertBefore(wrap, input);
            wrap.appendChild(input);
        }
    }

    setValueOfMask(e) {
        const value = e.target.value;
        const placeholder = e.target.getAttribute('data-placeholder');
        return `<i>${value}</i>${placeholder.substr(value.length)}`;
    }

    activateMasking(input) {
        input.addEventListener('keyup', (e) => this.handleValueChange(e), false);
    }

    handleValueChange(e) {
        const id = e.target.getAttribute('id');
        const maskElement = document.getElementById(`${id}Mask`);
        if (e.target.value === maskElement.querySelector('i').innerHTML) return;

        document.getElementById(id).value = this.handleCurrentValue(e);
        maskElement.innerHTML = this.setValueOfMask(e);
    }

    handleCurrentValue(e) {
        const isCharsetPresent = e.target.getAttribute('data-charset');
        const placeholder = isCharsetPresent || e.target.getAttribute('data-placeholder');
        let value = e.target.value;
        const strippedValue = isCharsetPresent ? value.replace(/\W/g, "") : value.replace(/\D/g, "");

        let newValue = '';
        for (let i = 0, j = 0; i < placeholder.length; i++) {
            const isInt = !isNaN(parseInt(strippedValue[j]));
            const isLetter = strippedValue[j] ? strippedValue[j].match(/[A-Z]/i) : false;
            const matchesNumber = this.options.maskedNumber.includes(placeholder[i]);
            const matchesLetter = this.options.maskedLetter.includes(placeholder[i]);

            if ((matchesNumber && isInt) || (isCharsetPresent && matchesLetter && isLetter)) {
                newValue += strippedValue[j++];
            } else if ((!isCharsetPresent && !isInt && matchesNumber) ||
                (isCharsetPresent && ((matchesLetter && !isLetter) || (matchesNumber && !isInt)))) {
                return newValue;
            } else {
                newValue += placeholder[i];
            }

            if (strippedValue[j] === undefined) break;
        }

        return e.target.getAttribute('data-valid-example')
            ? this.validateProgress(e, newValue)
            : newValue;
    }

    validateProgress(e, value) {
        const validExample = e.target.getAttribute('data-valid-example');
        const pattern = new RegExp(e.target.getAttribute('pattern'));
        const placeholder = e.target.getAttribute('data-placeholder');

        if (value.length === 1 && placeholder.toUpperCase().startsWith('MM') && value > 1 && value < 10) {
            value = '0' + value;
        }

        for (let i = value.length; i >= 0; i--) {
            const testValue = value + validExample.substr(value.length);
            if (pattern.test(testValue)) return value;
            value = value.slice(0, -1);
        }

        return value;
    }
}