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

    contentDescription: "Agende uma visita para conhecer melhor os nossos espaços e descobrir qual é o melhor para você e para o seu negócio:",
    contentSecondDescription: "+55Lab.co: conexão, compartilhamento e networking como em nenhum outro lugar!",
    contentTitleButton:"AGENDAR VISITA",
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
        message: 'Entre com um telefone válido',
        validate: (inputValue) => {
            let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
            return emailPattern.test(inputValue);
        }
    }],

    dateValidation: [{
        message: 'Entre com uma data válida',
        validate: (inputValue) => {
            let datePattern = /^\(?([0-2][0-9])\)?[/]?([0-1][0-9])\)?[/]?([0-9]{4})$/;
            return datePattern.test(inputValue);
        }
    }],

    hourValidation: [{
        message: 'Entre com uma hora válida',
        validate: (inputValue) => {
            let hourPattern = /^\(?([0-2][0-9])\)?[:]?([0-5][0-9])$/;
            return hourPattern.test(inputValue);
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

    maskDate(date) {
        
        var v = date;
        v = v.replace(/\D/g,""); 
        v = v.replace(/(\d{2})(\d)/,"$1/$2"); 
        v = v.replace(/(\d{2})(\d)/,"$1/$2"); 
        this.set('date', v);
    },

    maskHour(hour) {
        
        var v = hour;
        v = v.replace(/\D/g,""); 
        v = v.replace(/(\d{2})(\d)/,"$1:$2"); 
        this.set('hour', v);
    },

    actions: {

        makeAppointmentUser() {


            var formIsValid = this.clearFieldValidation[0].validate(this.name) 
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
                    memberType: "visita " + this.name_space,
                };

                var self = this

                $.ajax({
                    type: "POST",
                    url: "https://s55labinstitutionalwebback-prd.herokuapp.com/api/v0/users",
                    data: data,
                    beforeSend: function (xhr) { xhr.setRequestHeader('main-token', 'ZRCNAamAQ$yTv6&2VQ4eR*f?437w[FkF/gktDTg6#GunNQuE8@#]MC9B3NBTxifH'); },
                    success: function () {
                        alert('Formulário enviado com sucesso!');
                        history.go(-1);
                
                        self.set('name', '');
                        self.set('email', '');
                        self.set('telephone', '');
                        self.set('number_people', '');
                        self.set('date', '');
                        self.set('hour', '');
                        self.set('name_space', '');
                    },
                    error: function (jqXHR, exception) { alert("Erro:" + jqXHR.responseText); console.log(jqXHR); console.log(exception) }
                });


            } else {
                var error = "";
                if (!this.clearFieldValidation[0].validate(this.name)) {
                    error += 'Campo *Nome* é obrigatório\n';
                } 
                if (!this.clearFieldValidation[0].validate(this.email)) {
                    error += 'Campo *Email* é obrigatório\n';
                } 
                if (!this.clearFieldValidation[0].validate(this.telephone)) {
                    error += 'Campo *Telefone* é obrigatório\n';
                } 
                // if (!this.clearFieldValidation[0].validate(this.date)) {
                //     error += 'Campo *Dia da visita* é obrigatório\n';
                // } 
                // if (!this.clearFieldValidation[0].validate(this.hour)) {
                //     error += 'Campo *Horário* é obrigatório\n';
                // } 
                if (!this.clearFieldValidation[0].validate(this.spaceType)) {
                        error += 'Campo *Quer visitar qual espaço?* é obrigatório\n';
                }

                if (error===""){
                    
                    if (!this.emailValidation[0].validate(this.email)) {
                        error += 'Campo *Email* não contém um email válido\n';
                    }
                    if (!this.phoneNumberValidation[0].validate(this.telephone)) {
                        error += 'Campo *Telefone* não contém um número de telefone válido\n';
                    }
                    if (!this.dateValidation[0].validate(this.date)) {
                        error += 'Campo *Data* não contém uma data válida\n';
                    }

                     if (error!=""){
                         alert(error);
                     }

                }else{
                    alert(error);
                }
                
            }

        },
    }

});

