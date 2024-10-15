const body = document.querySelector('body');
function alertRelatorio() {
    let select = document.getElementById('relatorio');
    let valueselect = select.value;
    let local = document.getElementById('avisoDiv');
    if (!valueselect) {
        local.innerHTML = '<p>Selecione um tipo de relatóio</p>';
    }
    else {
        local.innerHTML = '<p>Gerando relatório <iconify-icon icon="line-md:loading-twotone-loop" class="noticeReport"></iconify-icon></p>';
        setTimeout(() => {
            local.innerHTML = `<p>Relatório de ${valueselect} gerado com sucesso <iconify-icon icon="line-md:check-all" class="noticeReport"></iconify-icon></p>`;
            console.log('Gerando Relório');
        }, 2000);
        setInterval(() => {
            local.innerHTML = null;
            console.log('Relatório gerado com sucesso');
        }, 4000);
    }
}
class EmailValidator {
    isValid(s) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}

function saveCredenciais() {
    let email = document.getElementById('email');
    let password = document.getElementById('senha');
    let alertEmail = document.getElementById('email-alert');
    let form = document.querySelector('form');
    let valitor = new EmailValidator();
    let resul = Boolean(valitor.isValid(email.value));
    console.log(`Email: ${email.value} é valido ?`, resul);
    console.log(`senha é : `,Boolean(password.value));
    console.log(Boolean(resul && Boolean(password.value)));
    
    if (resul && password.value) {
        alertEmail.style.color = 'Green';
        alertEmail.innerHTML = '<p>Configurações salvas com sucesso <iconify-icon icon="line-md:confirm-circle-filled" width="1.2rem" height="1.2rem"></iconify-icon></p>';
        setInterval(() => {
            alertEmail.innerHTML = null;
        }, 4000);
        form.reset();
    }
    else {
        alertEmail.style.color = "red";
        alertEmail.innerHTML = '<p>E-mail e/ou senha inválidos.<iconify-icon icon="line-md:close-circle-filled" width="1.2rem" height="1.2rem"></iconify-icon></p>';
    }
}
function saveConfig() {
    let size = document.getElementById('selectSize');
    let valueSize = size.value;
    switch (valueSize) {
        case '1':
            body.style.fontSize = '12px';
            break;
        case '2':
            body.style.fontSize = '14px';
            break;
        case '3':
            body.style.fontSize = '16px';
            break;
        case '4':
            body.style.fontSize = '18px';
            break;
        default:
            break;
    }
    let familly = document.getElementById('selectFontFamilly');
    let valueFamilly = familly.value;
    switch (valueFamilly) {
        case '1':
            body.style.fontFamily = 'Arial';
            break;
        case '2':
            body.style.fontFamily = 'Courier New';
            break;
        case '3':
            body.style.fontFamily = 'Helvetica';
            break;
        case '4':
            body.style.fontFamily = 'sans-serif';
            break;
        default:
            break;
    }
    closedConfig();
}
function changThemer() {
    let tema = document.getElementById('themer');
    let actualTheme = tema.className;
    //Icone lua(tema claro): nf nf-oct-moon
    if (actualTheme === 'nf nf-oct-moon') {
        tema.setAttribute('class', 'nf nf-md-white_balance_sunny');
        body.setAttribute('class', 'dark');
        return console.log('Alterado para tema escuro');
    }
    //Icone sol(tema escuro): nf nf-md-white_balance_sunny
    else {
        body.setAttribute('class', 'light');
        tema.setAttribute('class', 'nf nf-oct-moon');
        return console.log('Alterado para tema claro');
    }
}
function openConfig() {
    let temp = document.getElementById('configDisplay');
    temp.style.display = 'block';
}
function closedConfig() {
    let temp = document.getElementById('configDisplay');
    temp.style.display = 'none';
}
function themerMsg() {
    let msg = document.getElementById('themerMsg');
    msg.style.display = "block";
}
function themerMsgOut() {
    let msg = document.getElementById('themerMsg');
    // msg.style.display = "none"
}

//Elementos da seção Perfil
const buttonEdit = document.getElementById('button-profile')
const profile = document.getElementById('editProfile')
function openEditProfile(){
    buttonEdit.style.display = 'none'
    profile.style.display = 'block'
}

function closedEditProfile(){
    buttonEdit.style.display = 'block'
    profile.style.display = 'none'
}
function saveProfile(){
    let nomeActual = document.getElementById('usuario-nome')
    let emailActual = document.getElementById('usuario-email')
    let nomeEdit = document.getElementById('nome-edit')
    let emailEdit = document.getElementById('email-edit')
    let alerta = document.getElementById('avisoProfile')
    let form = document.getElementById('formEditPerfil')
    let valitor = new EmailValidator();
    let resul = Boolean(valitor.isValid(emailEdit.value));
    if(resul){
        nomeActual.innerHTML = nomeEdit.value
        emailActual.innerHTML = emailEdit.value
        closedEditProfile()
        alerta.innerHTML = null
        form.reset()
    }else{
        alerta.innerHTML = 'Email inválido'
        alerta.style.color = 'red'
    }
}
