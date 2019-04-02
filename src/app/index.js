// Javacript Document

const containerData = document.getElementById('main-container')

login = () => {
    alert('login');
    containerData.innerHTML=``;
}

createUser = () => {
    alert('criar usuario');
    containerData.innerHTML=``;
}

passwordRecovery = () => {
    containerData.innerHTML=`<section id="main-container" class="section-content">
                                <hgroup>
                                    <h1>Inker</h1>
                                    <h2>Cadastro</h2>
                                </hgroup>

                                <form action="">
                                    <label for="email-input">E-mail:</label>
                                    <input id="email-input" type="text" placeholder="Insira seu e-mail">

                                </form>
                                <section class="section-buttons">
                                    <button onclick="login()">Recuperar</button>
                                    <button onclick="">Voltar</button>
                                </section>
                            </section>`;
}

about = () => {
    alert('sobre');
    containerData.innerHTML=``;
}