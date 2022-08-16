// Генерация по кнопке
document.querySelector('.button_generate').addEventListener('click', function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('birthMounthOutput').innerText = initPerson.birthMounth;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});

// Очистка полей по кнопке 
document.querySelector('.button_clear').addEventListener('click', function()
{
    document.getElementById('firstNameOutput').innerText = "Имя";
    document.getElementById('surnameOutput').innerText = "Фамилия";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('patronymicOutput').innerText = "Отчество";
    document.getElementById('birthDayOutput').innerText = "день";
    document.getElementById('birthMounthOutput').innerText = "месяц";
    document.getElementById('birthYearOutput').innerText = "год";
    document.getElementById('professionOutput').innerText = "Профессия";
});