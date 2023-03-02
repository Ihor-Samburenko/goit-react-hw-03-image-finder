import axios from 'axios';

export const searchPost = (search, page) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '33083695-ddeedb70557ee618c67bd1e2e',
      q: search,
      page: page,
      per_page: 12,
      image_type: 'photo',
    },
  });
};
