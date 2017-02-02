import Ember from 'ember';
import ParseHelpers from '55-lab-web-front-end/helpers/parse-helpers';

export default Ember.Component.extend({
 
    spaceType: Ember.computed(function () {                    
        // let spaceTypeSelected = ParseHelpers.urlParamWithName("spaceType", window.location.href);
        // let isAValidatedType = (spaceTypeSelected === "PARCEIRO" || spaceTypeSelected === "MENTOR" || spaceTypeSelected === "INVESTIDOR" ||  spaceTypeSelected === "FRANQUEADO");
        // if (spaceTypeSelected !== undefined && isAValidatedType) {
        //     return spaceTypeSelected;
        // } else {
        //     return "NOS VISITE";
        // }

        return "NOS VISITE";
    }),

    contentDescription: "Venha conheçer o melhor no mundo, vamos te receber de braços abertos:",
    contentSecondDescription: "Não perca a oportunidade de expandir seu negócio",
    name: "",
    email: "",
    telephone: "",
    number_people:"",
    date:"",
    hour:"",
    name_space:"",

    emailValidation: [{
        message: 'Entre com um email válido',
        validate: (inputValue) => {
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(inputValue);
        }
    }],

    phoneNumberValidation: [{
        message: 'Entre com um telfone válido',
        validate: (inputValue) => {
            let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
            return emailPattern.test(inputValue);
        }
    }],


    clearFieldValidation: [{
        message: 'Campo obrigatório',
        validate: (inputValue) => {
            let validFieldPattern = /^(?!\s*$)/g;
            return validFieldPattern.test(inputValue);
        }
    }],

    maskPhoneNumber(number) {
        var v = number;
        v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        this.set('telephone', v);
    },

    actions: {

        makeAppointmentUser() {


            var formIsValid = this.clearFieldValidation[0].validate(this.name) 
                && this.clearFieldValidation[0].validate(this.hour)
                && this.clearFieldValidation[0].validate(this.date)
                && this.clearFieldValidation[0].validate(this.spaceType)
                && this.phoneNumberValidation[0].validate(this.telephone)
                && this.emailValidation[0].validate(this.email)

            if (formIsValid == true) {

                var data = {
                    name: this.name,
                    email: this.email,
                    telephone: this.telephone,
                    number_people: this.number_people,
                    date: this.date,
                    hour: this.hour,
                    name_space: this.name_space,
                };

                var self = this

                $.ajax({
                    type: "POST",
                    url: "https://s55labinstitutionalwebback-prd.herokuapp.com/api/v0/users",
                    data: data,
                    beforeSend: function (xhr) { xhr.setRequestHeader('main-token', 'ZRCNAamAQ$yTv6&2VQ4eR*f?437w[FkF/gktDTg6#GunNQuE8@#]MC9B3NBTxifH'); },
                    success: function () {

                        this.set('name', '');
                        this.set('email', '');
                        this.set('telephone', '');
                        this.set('number_people', '');
                        this.set('date', '');
                        this.set('hour', '');
                        this.set('name_space', '');

                        alert('Formulário enviado com sucesso!');
                          
                    },
                    error: function (jqXHR, exception) { alert("Erro:" + jqXHR.responseText); console.log(jqXHR); console.log(exception) }
                });


            } else {
                if (!this.clearFieldValidation[0].validate(this.name)) {
                    alert('Campo *Nome* é obrigatório')
                } else if (!this.emailValidation[0].validate(this.email)) {
                    alert('Campo *Email* não contém um email válido')
                } else if (!this.phoneNumberValidation[0].validate(this.telephone)) {
                    alert('Campo *Telefone* não contém um número de telefone válido')
                } else if (!this.clearFieldValidation[0].validate(this.date)) {
                    alert('Campo *Dia da visita* é obrigatório')
                } else if (!this.clearFieldValidation[0].validate(this.hour)) {
                    alert('Campo *Horário* é obrigatório')
                } else if (!this.clearFieldValidation[0].validate(this.spaceType)) {
                    alert('Campo *Quer visitar qual espaço?* é obrigatório')
                } 
            }

        },
    }

});

