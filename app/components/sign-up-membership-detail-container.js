import Ember from 'ember';
import ParseHelpers from 'a55-lab-institutional-web/helpers/parse-helpers';

export default Ember.Component.extend({
  contentDescription: "Faça seu cadastro aqui",
  contentMemberDescription: "Faça seu cadastro inicial para fazer parte da nossa comunidade e aproveitar todos os benefícios e eventos exclusivos:",
  contentSecondDescription: "Não perca a oportunidade de expandir seu negócio",
  contentTitleButton:"Quero ser ",
  name: "",
  cpf: "",
  rg: "",
  address: "",
  number: "",
  complement: "",
  neighbor: "",
  zipCode: "",
  city: "",
  state: "",
  country: "Brasil",
  hostName: "+55lab.co",
  email: "",
  telephone: "",
  nextButtonTitle:"Próximo",
  subscribeButtonTitle:"Me tornar membro",
  formStep: "PERSONAL_DATA",
  creditCardName: "",
  creditCardNumber: "",
  creditCardExpirationDate: "",
  creditCardCVV: "",
  captchaValidated: false,
  termsOfServiceAccepted: false,
  cardComponent: null,
  apiId: null,
  apiURL: null,
  router: Ember.inject.service('-routing'),

  memberType: Ember.computed(function () {
    let membershipType = ParseHelpers.urlParamWithName("memberType", window.location.href);
    let isAValidatedType = (membershipType === "PARCEIRO" || membershipType === "MENTOR" || membershipType === "INVESTIDOR" || membershipType === "FRANQUEADO");
    if (membershipType !== undefined && isAValidatedType) {
      return membershipType;
    } else {
      return "MEMBERHSIP";
    }
  }),

  haveImage: Ember.computed(function () {
    if (this.get('memberType') === "MEMBERHSIP") {
      return false
    } else {
      return true
    }
  }),

  isFormPersonalData: Ember.computed('formStep', function () {
    if (this.get('formStep') === "PERSONAL_DATA") {
      return true
    } else {
      return false
    }
  }),

  isFormHostSelection: Ember.computed('formStep', function () {
    if (this.get('formStep') === "HOST_SELECTION") {
      return true
    } else {
      return false
    }
  }),

  isFormPaymentMethod: Ember.computed('formStep', function () {
    if (this.get('formStep') === "PAYMENT_METHOD") {
      return true
    } else {
      return false
    }
  }),

  emailValidation: [{
    message: 'Entre com um email válido',
    validate: (inputValue) => {
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(inputValue);
      return true;
    }
  }],

  phoneNumberValidation: [{
    message: 'Entre com um telfone válido',
    validate: (inputValue) => {
      let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
      return emailPattern.test(inputValue);
      return true;
    }
  }],

  cpfValidation: [{

    message: 'Entre com um CPF válido',
    validate: (inputValue) => {

      function validarCPF(cpf) {
        var inputCPF =  cpf.replace( /\D/g , ""); //Remove tudo o que não é dígito

        var soma = 0;
        var resto;

        if(inputCPF == '00000000000') return false;
        for(var i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if((resto == 10) || (resto == 11)) resto = 0;
        if(resto != parseInt(inputCPF.substring(9, 10))) return false;

        soma = 0;
        for(var i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
        resto = (soma * 10) % 11;

        if((resto == 10) || (resto == 11)) resto = 0;
        if(resto != parseInt(inputCPF.substring(10, 11))) return false;
        return true;
      }

      let emailPattern = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
      return emailPattern.test(inputValue) &&  validarCPF(inputValue);
      return true;
    }
  }],

  rgValidation: [{
    message: 'Entre com um telfone válido',
    validate: (inputValue) => {
      // let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
      // return emailPattern.test(inputValue);
      return true;
    }
  }],

  cepValidation: [{
    message: 'Entre com um CEP válido',
    validate: (inputValue) => {
      let emailPattern = /\d{5}\-\d{3}/;
      return emailPattern.test(inputValue)
      // return true;
    }
  }],

  clearFieldValidation: [{
    message: 'Campo obrigatório',
    validate: (inputValue) => {
      let validFieldPattern = /^(?!\s*$)/g;
      return validFieldPattern.test(inputValue);
      return true
    }
  }],

  maskPhoneNumber(number) {
    var v = number;
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    this.set('telephone', v);
  },

  maskCep(cep) {
    var v = cep;
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/(\d)(\d{3})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    this.set('zipCode', v);
  },

  maskCNPJ(v) {
    var v = v.replace( /\D/g , ""); //Remove tudo o que não é dígito
    v = v.replace( /^(\d{2})(\d)/ , "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
    v = v.replace( /^(\d{2})\.(\d{3})(\d)/ , "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
    v = v.replace( /\.(\d{3})(\d)/ , ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
    v = v.replace( /(\d{4})(\d)/ , "$1-$2"); //Coloca um hífen depois do bloco de quatro dígitos
    return v;
  },

  maskRG(rg) {
    var v = number;
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    this.set('telephone', v);
  },

  maskCPF(v) {
    var v = v.replace( /\D/g , ""); //Remove tudo o que não é dígito
    v = v.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    this.set('cpf', v);
  },

  autoCompleteAddressAction() {
    var url = "https://viacep.com.br/ws/" + this.zipCode + "/json/"
    var _this = this;
    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      success: function (response) {
        _this.set('address',response.logradouro);
        _this.set('neighbor',response.bairro);
        _this.set('state',response.uf);
        _this.set('city',response.localidade);
        _this.set('complement',response.complemento);
      },
      error: function (jqXHR, exception) {
        if (jqXHR.status === 404) {
          _this.clearFieldValidation
        }
      }
    });
  },

  personalDataFormValidation() {
    var formIsValid = (this.clearFieldValidation[0].validate(this.name)
    && this.clearFieldValidation[0].validate(this.address)
    && this.clearFieldValidation[0].validate(this.number)
    && this.clearFieldValidation[0].validate(this.neighbor)
    && this.clearFieldValidation[0].validate(this.country)
    && this.clearFieldValidation[0].validate(this.city)
    && this.emailValidation[0].validate(this.email)
    && this.cpfValidation[0].validate(this.cpf)
    && this.rgValidation[0].validate(this.rg)
    && this.cepValidation[0].validate(this.zipCode)
    && this.phoneNumberValidation[0].validate(this.telephone));

    if (formIsValid === true) {
      return true
    } else {
      if (!this.clearFieldValidation[0].validate(this.name)) {
        alert('Campo *Nome* obrigatório não preenchido');
      } else if (!this.clearFieldValidation[0].validate(this.address)) {
        alert('Campo *Endereço* obrigatório não preenchido');
      } else if (!this.clearFieldValidation[0].validate(this.number)) {
        alert('Campo *Número* obrigatório não preenchido');
      } else if (!this.clearFieldValidation[0].validate(this.neighbor)) {
        alert('Campo *Biarro* obrigatório não preenchido');
      } else if (!this.clearFieldValidation[0].validate(this.country)) {
        alert('Campo *País* obrigatório não preenchido');
      } else if (!this.clearFieldValidation[0].validate(this.city)) {
        alert('Campo *Cidade* obrigatório não preenchido');
      } else if (!this.cepValidation[0].validate(this.zipCode)) {
        alert('Campo *CEP* obrigatório não preenchido');
      } else if (!this.emailValidation[0].validate(this.email)) {
        alert('Campo *Email* não contém um email válido');
      } else if (!this.cpfValidation[0].validate(this.cpf)) {
        alert('Campo *CPF* não contém um número de CPF válido');
      } else if (!this.rgValidation[0].validate(this.rg)) {
        alert('Campo *RG* não contém um RG válido');
      } else if (!this.phoneNumberValidation[0].validate(this.telephone)) {
        alert('Campo *Telefone* não contém um número de telefone válido');
      }
      return false
    }
  },

  paymentFormDataValidation() {

    var formIsValid = (this.clearFieldValidation[0].validate(this.creditCardName)
    && this.clearFieldValidation[0].validate(this.creditCardNumber)
    && this.clearFieldValidation[0].validate(this.creditCardExpirationDate)
    && this.clearFieldValidation[0].validate(this.creditCardCVV)
    && this.captchaValidated && this.termsOfServiceAccepted)

    if (formIsValid === true) {
      return true
    } else {
      if (!this.clearFieldValidation[0].validate(this.creditCardName)) {
        alert('Campo *Nome* do cartão de crédito obrigatório não preenchido');
      } else if (!this.clearFieldValidation[0].validate(this.creditCardNumber)) {
        alert('Campo *Número* do cartão de crédito obrigatório não preenchido');
      } else if (!this.clearFieldValidation[0].validate(this.creditCardExpirationDate)) {
        alert('Campo *Data de validade* do cartão de créditoobrigatório não preenchido');
      } else if (!this.clearFieldValidation[0].validate(this.creditCardCVV)) {
        alert('Campo *Código de segurança* do cartão de crédito obrigatório não preenchido');
      } else if (!this.captchaValidated) {
        alert('Verificação de segurança não realizada');
      } else if (!this.termsOfServiceAccepted) {
        alert('Termos de serviço não aceito. Para prosseguir com a assinatura, você deve estar de acordo com os termos de serviço.');
      }

      return false
    }
  },

  showPaymentMethodFunction() {
    if (this.personalDataFormValidation() == true) {
      this.set('formStep', "PAYMENT_METHOD");
      var _this = this;
      Ember.run.later((function() {
        //do something in here that will run in 2 seconds
        var card = new Card({
          // a selector or DOM element for the form where users will
          // be entering their information
          form: 'form', // *required*
          // a selector or DOM element for the container
          // where you want the card to appear
          container: '.card-wrapper', // *required*
          width: 300, // optional — default 350px
          formatting: true, // optional - default true
          // Strings for translation - optional
          messages: {
            validDate: 'Data\nValida', // optional - default 'valid\nthru'
            monthYear: 'mm/aa', // optional - default 'month/year'
          },
          // Default placeholders for rendered fields - optional
          placeholders: {
            number: '•••• •••• •••• ••••',
            name: 'NOME',
            expiry: 'MM/AA',
            cvc: '•••'
          },

          masks: {
            cardNumber: '•' // optional - mask card number
          },

          // if true, will log helpful messages for setting up Card
          debug: true // optional - default false
        });

        _this.set('cardComponent',card);

      }), 10);
    }

  },

  didInsertElement() {
    this.set('apiId',this.container.lookupFactory('config:environment').parseAPIID);
    this.set('apiURL', this.container.lookupFactory('config:environment').parseAPIURL);
  },

  actions: {
    onCaptchaResolved(reCaptchaResponse) {
      this.set('captchaValidated', true);
    },


    showNextData() {

      if (this.get('isFormPersonalData')  && this.personalDataFormValidation() == true) {
        this.set('formStep', "HOST_SELECTION");
      } else if (this.get('isFormHostSelection')  && this.personalDataFormValidation() == true) {
        this.showPaymentMethodFunction();
      }
    },

    showPersonalData() {
      this.set('formStep', "PERSONAL_DATA");
    },

    showHostingSelection() {
      if (this.get('isFormPersonalData')) {
        if (this.personalDataFormValidation() == true) {
          this.set('formStep', "HOST_SELECTION");
        }
      } else {
        this.set('formStep', "HOST_SELECTION");
      }
    },

    showPaymentMethod() {
      this.showPaymentMethodFunction();
    },

    registerUser() {

      var formIsValid = this.personalDataFormValidation() && this.paymentFormDataValidation()
      if (formIsValid === true) {

        var data = JSON.stringify({
          email: this.email,
          person: {
            name: this.name,
            rg: this.rg,
            cpf: this.cpf,
            phone: {
              number: "55"+this.telephone,
              isMain: true
            },
            address: {
              street: this.address,
              isMain: true,
              number: this.number,
              neighborhood: this.neighbor,
              zip: this.zipCode,
              city: this.city,
              state: this.state
            }
          },
          cardInfo: {
            number: this.creditCardNumber,
            cvv: this.creditCardCVV,
            payment_company_code: this.cardComponent.cardType,
            expiration: this.creditCardExpirationDate
          }
        });
        var url = this.apiURL + "functions/membershipRegistration";
        var apiId = this.apiId
        var self = this;
        $.ajax({
          type: "POST",
          url: url,
          data: data,
          dataType: 'json',
          contentType: 'application/json',
          beforeSend: function (xhr) {
            if (xhr && xhr.overrideMimeType) {
              xhr.overrideMimeType("application/j-son;charset=UTF-8");
            }
            xhr.setRequestHeader('X-Parse-Application-Id', apiId);
          },
          success: function () {

            alert('Registro enviado com sucesso!');
            this.get('router').transitionTo('registered-download-app');

            self.set('name', '');
            self.set('cpf', '');
            self.set('rg', '');
            self.set('address', '');
            self.set('number', '');
            self.set('zipCode', '');
            self.set('neighbor', '');
            self.set('state', '');
            self.set('country', '');
            self.set('email', '');
            self.set('telephone', '');
            self.set('creditCardNumber', '');
            self.set('creditCardCVV', '');
            self.set('creditCardExpirationDate', '');
          },
          error: function (jqXHR, exception) {
            if (JSON.parse(jqXHR.responseText).error.msg) {
              alert("Erro: " + JSON.parse(jqXHR.responseText).error.msg);
            } else if (JSON.parse(jqXHR.responseText).errors[0].msg) {
              alert("Erro: " + JSON.parse(jqXHR.responseText).errors[0].msg);
            } else {
              alert("Erro: " + jqXHR.responseText);
            }

          }
        });


      } else {


      }

    },


  }




});
