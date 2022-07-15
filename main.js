<div class="modal modal-fade show">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Modal Title</h2>
            <button class="close-modal-btn" onclick="closeModal()">
              <img src="./images/xmark-solid.svg" alt="">
            </button>
          </div>
          <div class="modal-body">
            <p>Modal inner-content</p>
            <label for="full-name-input">Nome completo</label>
            <input type="text" name="full-name-input" id="full-name-input">
            <label for="email-input">E-mail</label>
            <input type="email" name="email-input" id="email-input">
            <button type="submit" class="submit-sub-btn">Enviar inscrição</button>
          </div>
        </div>
      </div>
    </div>  


    .modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: none;
}

.modal-fade {
  transition: opacity .15s linear;
  background-color: rgba(0,0,0,.2);
  width: 100%;
}

.modal.show .modal-dialog {
  transform: none;
  display: flex;
  justify-content: center;
}

.modal.fade .modal-dialog {
  transition: transform .3s ease-out;
  transform: translate(0,-50px);
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 2em;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.modal-body input {
  width: 100%;
}

.close-modal-btn {
  position: relative;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border: none;
  right: 0;
  top: 0;
}

.close-modal-btn img {
  width: 100%;
  height: 100%;
}

.submit-sub-btn {
  margin-top: 1em;
  padding: 0.4em 2em;
  background-color: var(--purple);
  font-size: 14px;
  line-height: 2em;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  border: none;
  border-radius: 5px;
}

    