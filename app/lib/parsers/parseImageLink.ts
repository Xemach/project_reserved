import { baseURL } from '../../api/axios';

export const parseImageLink = (src: string, route: string) =>
  `${baseURL}load-image/${route}/${src}`;
