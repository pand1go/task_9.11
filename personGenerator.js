const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

// Добавление в Json женских имен
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Елена",
            "id_3": "Эльмира",
            "id_4": "Екатерина",
            "id_5": "Наталья",
            "id_6": "Мария",
            "id_7": "Анастасия",
            "id_8": "Софья",
            "id_9": "Юлия",
            "id_10": "Виктория"
        }
    }`,

// Добавление в Json мужских отчеств
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Романович",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андревич"
        }
    }`,

// Добавление в Json профессий для мужчин
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Инженер",
            "id_2": "Хирург",
            "id_3": "Шахтер",
            "id_4": "Пилот",
            "id_5": "Учитель",
            "id_6": "Врач",
            "id_7": "Программист",
            "id_8": "Механик",
            "id_9": "Водитель",
            "id_10": "Строитель"
        }
    }`,

// Добавление в Json профессий для женщин
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Учитель танцов",
            "id_3": "Швея",
            "id_4": "Визажист",
            "id_5": "Учитель",
            "id_6": "Врач",
            "id_7": "Программист",
            "id_8": "Стоматолог",
            "id_9": "Фитнес-тренер",
            "id_10": "Репетитор"
        }
    }`,

// Добавление в Json месяцев
    mounthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

// Функция для генерации пола через тернанрный оператор
    randomGender: function () {
        return (this.randomIntNumber()) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },


    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

// Функция для генерации имен
    randomFirstName: function() {
        // Условие для мужских и женских имен в зависимости от пола
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson); 
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

// Функция для генерации фамилий
     randomSurname: function() {
        // Условие для мужских и женских фамилий в зависимости от пола
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            // Изменение фамилии путем добавления окончания 'a'
            return (this.randomValue(this.surnameJson) + 'а');
        }
    },

// Функция для генерации отчеств
    randomPatronymic: function() {
        // Условие для мужских и женских отчеств в зависимости от пола
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.patronymicMaleJson);
        } else {
            // Изменение отчеств путем замены окончания
            let patronymicFemaleJson = this.randomValue(this.patronymicMaleJson); 
            return patronymicFemaleJson.replace('ич', 'на');
        }
    },

// Функция для генерации профессий
    randomProfession: function() {
        // Условие для мужских и женских профессий в зависимости от пола
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

// Функция для генерации месяца рождения
    randomMounth: function() {
        return this.randomValue(this.mounthJson);
    },

// Функция для генерации дня рождения
    randomDay: function() {
        let longMounth = ["января", "марта", "мая", "июля", "августа", "октября", "декабря"];
        let shortMounth = ["апреля", "июня", "сентября", "ноября"];
        // Условия для количества дней в месяце в зависимости от названия месяца
        if (longMounth.includes(this.person.birthMounth)) {
            return this.randomIntNumber(1, 31);
        } else if (shortMounth.includes(this.person.birthMounth)) {
            return this.randomIntNumber(1, 30);
        } else {
            return this.randomIntNumber(1, 28);
        }
    },    

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        this.person.birthMounth = this.randomMounth();
        this.person.birthDay = this.randomDay();
        this.person.birthYear = (this.randomIntNumber(2000, 1970) + ' года'); // Генерация года
        return this.person;
    }
};
