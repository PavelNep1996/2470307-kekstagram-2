const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте ещё раз.',
  SEND_DATA: 'Не удалось отправить форму.',
};

const loadData = async (route, errorText, method = Method.GET, body = null) => {
  try {
    const response = await fetch(`${BASE_URL}${route}`, {
      method,
      body,
    });

    if (!response.ok) {
      throw new Error(`${errorText} (Статус: ${response.status})`);
    }

    return await response.json();

  } catch (error) {
    throw new Error(`${errorText} (${error.message})`);
  }
};

const getData = () => loadData(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => loadData(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };
