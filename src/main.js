const btnCancel = document.querySelector('.cancel');
const btnSubscribe = document.querySelector('.new');
const modalSubscribe = document.querySelector('.modal-overlay');
const form = document.querySelector('form');
// open modal
const subscribeModel = () => {
  modalSubscribe.classList.add('active');
}
// close modal
const cancelSubscribe = () => {
  modalSubscribe.classList.remove('active');
}
// handle Modal edit
const Modal = {
  modalOverlay: document.querySelector(".modal-overlay"),
  modalTitle: document.querySelector("#form h2"),
  editingIndex: -1,

  toggle(isEdit = false, index = -1) {
    Form.clearFields();
    Modal.modalOverlay.classList.toggle("active");

    if (isEdit && index !== -1) {
      const data = Transaction.all[index];

      Modal.editingIndex = index;
      Modal.modalTitle.innerHTML = "Editar transação";

      Form.description.value = data.description;
    } else {
      Modal.modalTitle.innerHTML = "Nova transação";
    }
  },
};

const Form = {
  email: document.querySelector('input#email'),

  getValues() {
    return {
      email: Form.email.value,
    };
  },

  validateFields() {
    const { email } = Form.getValues();

    if (email.trim() === '') {
      document.querySelector('.handle-error.email').innerHTML = 'Informe a descrição - (Ex. Internet).';
    } else {
      document.querySelector('.handle-error.email').innerHTML = '';
    }
  },

  formatValues() {
    let { email } = Form.getValues();
    return {
      email
    };
  },

  saveTransaction(transaction) {
    Transaction.add(transaction);
  },

  clearFields() {
    Form.description.value = '';
    Form.amount.value = '';
    Form.date.value = '';
    Modal.editingIndex = -1;
  },
}

const handleSubmit = (e) => {
  e.preventDefault()

  try {
    Form.validateFields()
    const transaction = Form.formatValues()

    if (Modal.editingIndex !== -1) {
      const data = Transaction.all[Modal.editingIndex];
      const result = confirm(
        'Deseja confirmar a alteração do registro?'
      );

      if (result) {
        data.email = transaction.email;

        App.reload();
      }
    } else {
      Form.saveTransaction(transaction);
    }
    Form.clearFields();
    Modal.toggle();
  } catch (error) {
    console.error(error.message);
  }
}

const App = {
  init() {
    Transaction.all.forEach(DOM.addTransaction);

    DOM.updateBalance();

    setStorage(Transaction.all);
  },
  reload() {
    DOM.clearTransactions();
    App.init();
  },
}

/* Countdown */

class Countdown {
  constructor(current_date) {

    this.attCounter = null
    this.remainingSeconds = 0

    this.element = {
      days: document.querySelector('.days'),
      hours: document.querySelector('.hours'),
      minutes: document.querySelector('.minutes'),
      seconds: document.querySelector('.seconds'),
    }

    // remainingSeconds = current_date - event-date
    this.remainingSeconds = Math.floor((new Date("july 17, 2022 13:50:00").getTime() - current_date.getTime()) / 1000)
    this.start()
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.attCounter = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.atFinish();
      }
    }, 1000);
  }

  atFinish() {
    clearInterval(this.attCounter);

    this.attCounter = null;

  }

  updateInterfaceTime() {
    const days = Math.floor(this.remainingSeconds / 86400);
    const hours = Math.floor(this.remainingSeconds / 3600);
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    
    this.element.days.textContent = days.toString().padStart(2, "0"); // .padStart() > valores padrões para elementos de texto
    this.element.hours.textContent = hours.toString().padStart(2, "0");
    this.element.minutes.textContent = minutes.toString().padStart(2, "0");
    this.element.seconds.textContent = seconds.toString().padStart(2, "0");
  }
}

document.addEventListener("load", new Countdown(new Date("july 17, 2022 13:00:00"))) 

btnSubscribe.addEventListener('click', subscribeModel);
btnCancel.addEventListener('click', cancelSubscribe);
form.addEventListener('submit', handleSubmit);

App.init();