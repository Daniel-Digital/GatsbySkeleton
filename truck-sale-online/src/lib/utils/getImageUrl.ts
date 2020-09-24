const API =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:1337';

export default function getImageUrl(url: string): string {
  return 'https://strapi-backend-demo.herokuapp.com' + url;
}
