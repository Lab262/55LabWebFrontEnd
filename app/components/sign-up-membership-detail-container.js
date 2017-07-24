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
      //  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      //  return emailPattern.test(inputValue);
      return true;
    }
  }],

  phoneNumberValidation: [{
    message: 'Entre com um telfone válido',
    validate: (inputValue) => {
      //  let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
      //  return emailPattern.test(inputValue);
      return true;
    }
  }],

  cpfValidation: [{
    message: 'Entre com um telfone válido',
    validate: (inputValue) => {
      //  let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
      //  return emailPattern.test(inputValue);
      return true;
    }
  }],

  rgValidation: [{
    message: 'Entre com um telfone válido',
    validate: (inputValue) => {
      //  let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
      //  return emailPattern.test(inputValue);
      return true;
    }
  }],

  clearFieldValidation: [{
    message: 'Campo obrigatório',
    validate: (inputValue) => {
      //  let validFieldPattern = /^(?!\s*$)/g;
      //  return validFieldPattern.test(inputValue);
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

  showPaymentMethodFunction() {
    // if (this.get('isFormPersonalData')  && this.personalDataFormValidation() == true) {
    this.set('formStep', "PAYMENT_METHOD");
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
          monthYear: 'mm/aaaa', // optional - default 'month/year'
        },
        // Default placeholders for rendered fields - optional
        placeholders: {
          number: '•••• •••• •••• ••••',
          name: 'NOME',
          expiry: 'MM/AAAA',
          cvc: '•••'
        },

        masks: {
          cardNumber: '•' // optional - mask card number
        },

        // if true, will log helpful messages for setting up Card
        debug: true // optional - default false
      });
    }), 10);
    // } else {
    //   this.set('formStep', "PAYMENT_METHOD");
    // }
  },

  didInsertElement() {

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
      var formIsValid = this.personalDataFormValidation()

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
          memberType: this.get('memberType'),
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
            self.set('typePlan', '');
          },
          error: function (jqXHR, exception) { alert("Erro:" + jqXHR.responseText); console.log(jqXHR); console.log(exception); }
        });


      } else {


      }

    },


  }




});
