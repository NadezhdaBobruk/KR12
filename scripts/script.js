window.onload = function () {
// задание ввода данных
    let inputFullName = document.getElementById('input-fullName');
    inputFullName.onkeydown = (e) => {
        if (!isNaN(parseInt(e.key))) {
            return false;
        }
    }

    let inputUserName = document.getElementById('input-userName');
    inputUserName.onkeydown = (e) => {
        if ((e.key === ".") || (e.key === ",")) {
            return false;
        }
    }

    let inputCheckbox = document.getElementById('input-checkbox');
    inputCheckbox.onchange = () => {
        if (inputCheckbox.checked) {
            console.log("Согласен")
        } else {
            console.log("Не согласен");
        }
    }

    console.log("go home");

// валидация формы
    let inputEmail = document.getElementById('input-email');
    let inputPassword = document.getElementById('input-password');
    let inputRepeatPassword = document.getElementById('input-repeat-password');
    let inputButton = document.getElementById('input-button');
    let modalWindow = document.getElementsByClassName('modal')[0];

    inputButton.onclick = () => {
        if (!inputFullName.value) {
            alert("Заполните поле Full Name");
            return false;
        }
        if (!inputUserName.value) {
            alert("Заполните поле Your username");
            return false;
        }
        if (!inputEmail.value) {
            alert("Заполните поле E-mail");
            return false;
        }
        if (!inputPassword.value) {
            alert("Заполните поле Password");
            return false;
        }
        if (!inputRepeatPassword.value) {
            alert("Заполните поле Repeat Password");
            return false;
        }

        if (inputPassword.value.length < 8) {
            alert("Пароль должен содержать не менее 8 символов");
            return false;
        }

        if (inputPassword.value !== inputRepeatPassword.value) {
            alert("Пароль не совпадает");
            return false;
        }

        if (!(inputCheckbox.checked)) {
            alert("Вы не подтвердили согласие с условиями");
            return false;
        }

        modalWindow.style.display = "block";
        return false;
    }

    let inputModalButton = document.getElementById('input-modal-button');
    inputModalButton.addEventListener('click', () => {
        modalWindow.style.display = "none";
        inputFullName.value = '';
        inputUserName.value = '';
        inputEmail.value = '';
        inputPassword.value = '';
        inputRepeatPassword.value = '';
        inputCheckbox.checked = false;
    })

    let linkControl = document.getElementsByClassName('loginPage');
    for (let i = 0; i < linkControl.length; i++) {
        linkControl[i].onclick = () => {
            document.getElementsByClassName('block-one-title')[0].innerText = 'Log in to the system';
            document.getElementsByClassName('name')[0].remove();
            document.getElementsByClassName('mail')[0].remove();
            document.getElementsByClassName('repeat-password')[0].remove();
            document.getElementsByClassName('agree')[0].remove();
            inputButton.value = 'Sign In';
            document.getElementsByClassName('control')[0].remove();
            inputButton.onclick = () => {
                if (!(inputPassword.value && inputUserName.value)) {
                    alert("Не все поля заполнены");
                    return false;
                } else alert("Добро пожаловать, " + inputUserName.value);
            }
        }
    }
}