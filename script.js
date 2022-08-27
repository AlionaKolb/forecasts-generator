const newForecast = document.querySelector('.current-forecast h1');
const addСhance = document.querySelector('.current-forecast p');
const sendButton = document.querySelector('.forecast-btn');
const messagContainer = document.querySelector('.forecasts');
const forecastTemplate = document.querySelector('#forecast-item');

const arr = new Array('Яркое приключение уже поджидает Вас!',
    'Вам удастся избежать потерь в важном деле!',
    'Вдохновение, наконец - то, снизойдет на Вас!',
    'Ваш ценный опыт сможет кому - то помочь, если перестанете его прятать в себе!',
    'В ближайшие дни Вас ожидает небольшое путешествие!',
    'Вы встретите человека, которого есть за что благодарить!');

function getRandom2(min, max) {

    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
getRandom2(0, 100);

function makeforecastTemplate(title, procent) {
    const myForecast = forecastTemplate.content.cloneNode(true);
    myForecast.querySelector('h3').textContent = title;
    myForecast.querySelector('p').textContent = procent;

    return myForecast;
}

sendButton.addEventListener("click", function getRandom1() {
    const RandElement = arr[Math.floor(Math.random() * (arr.length))];

    let title = `${RandElement}`;
    procent = `Вероятность: ${getRandom2(0, 100)}%`;

    newForecast.textContent = title;
    addСhance.textContent = procent;

    const testForecast = makeforecastTemplate(title, procent);

    if (title != '' && procent != '') {
        messagContainer.append(testForecast);
    }

});










/*Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
/* Подставляй текст нового предсказания в .current-forecast h1 */
/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */
/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */