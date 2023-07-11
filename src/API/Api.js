import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '36759166-b262fab0d028493afdf08d48d';

export const getPicture = async (name, page) => {
  const { data } = await axios(
    `/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};
