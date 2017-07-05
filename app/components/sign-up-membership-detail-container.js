import Ember from 'ember';
import ParseHelpers from '55-lab-web-front-end/helpers/parse-helpers';

export default Ember.Component.extend({

    haveImage:false,

    memberType: Ember.computed(function () {
        let membershipType = ParseHelpers.urlParamWithName("memberType", window.location.href);
        let isAValidatedType = (membershipType === "PARCEIRO" || membershipType === "MENTOR" || membershipType === "INVESTIDOR" || membershipType === "FRANQUEADO");
        if (membershipType !== undefined && isAValidatedType) {
            this.set('haveImage',false);
            return membershipType;
        } else {
            this.set('haveImage',true);
            return "MEMBRO";
        }
    }),

    contentDescription: "Faça seu cadastro para podermos entrar em contato com você:",
    contentMemberDescription: "Faça seu cadastro inicial para fazer parte da nossa comunidade e aproveitar todos os benefícios e eventos exclusivos:",
    contentSecondDescription: "+55Lab.co: conexão, compartilhamento e networking como em nenhum outro lugar!",
    contentTitleButton:"Quero ser ",
    nextButtonTitle:"Próximo",
    subscribeButtonTitle:"Me tornar membro",

    name: "",
    cpf: "",
    rg: "",
    address: "",
    number: "",
    complement: "",
    neighbor: "",
    city: "",
    state: "",
    country: "Brasil",
    email: "",
    telephone: "",
    creditCardNumber: "",
    creditCardExpirationDate: "",
    creditCardCVV: "",

    isFormPersonalData: true,

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
            let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
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

        showNextData() {
          var formIsValid = (this.clearFieldValidation[0].validate(this.name)
          && this.phoneNumberValidation[0].validate(this.telephone)
          && this.emailValidation[0].validate(this.email));

          if (formIsValid === true) {
            this.set('isFormPersonalData', false);
          } else {
              if (!this.clearFieldValidation[0].validate(this.name)) {
                  alert('Campo *Nome* é obrigatório');
              } else if (!this.phoneNumberValidation[0].validate(this.telephone)) {
                  alert('Campo *Telefone* não contém um número de telefone válido');
              } else if (!this.emailValidation[0].validate(this.email)) {
                  alert('Campo *Email* não contém um email válido');
              }

          }

        },

        registerUser() {
            var formIsValid = (this.clearFieldValidation[0].validate(this.name)
            && this.phoneNumberValidation[0].validate(this.telephone)
            && this.emailValidation[0].validate(this.email));

            if (formIsValid === true) {

                var data = {
                    name: this.name,
                    cpf: this.cpf,
                    rg: this.rg,
                    adress_label: this.address,
                    adress_number: this.number,
                    adress_complement: this.complement,
                    adress_neighbor: this.neighbor,
                    adress_state: this.state,
                    adress_country: this.country,
                    email: this.email,
                    telephone: this.telephone,
                    memberType: this.get('memberType')
                };

                var self = this;
                $.ajax({
                    type: "POST",
                    url: "https://s55labinstitutionalwebback-prd.herokuapp.com/api/v0/users",
                    data: data,
                    beforeSend: function (xhr) { xhr.setRequestHeader('main-token', 'ZRCNAamAQ$yTv6&2VQ4eR*f?437w[FkF/gktDTg6#GunNQuE8@#]MC9B3NBTxifH'); },
                    success: function () {

                        alert('Registro enviado com sucesso!');
                        history.go(-1);

                        self.set('name', '');
                        self.set('cpf', '');
                        self.set('rg', '');
                        self.set('address', '');
                        self.set('number', '');
                        self.set('complement', '');
                        self.set('neighbor', '');
                        self.set('state', '');
                        self.set('country', '');
                        self.set('email', '');
                        self.set('telephone', '');
                    },
                    error: function (jqXHR, exception) { alert("Erro:" + jqXHR.responseText); console.log(jqXHR); console.log(exception); }
                });


            } else {
                if (!this.clearFieldValidation[0].validate(this.name)) {
                    alert('Campo *Nome* é obrigatório');
                } else if (!this.phoneNumberValidation[0].validate(this.telephone)) {
                    alert('Campo *Telefone* não contém um número de telefone válido');
                } else if (!this.emailValidation[0].validate(this.email)) {
                    alert('Campo *Email* não contém um email válido');
                }

            }

        },


    }



});
