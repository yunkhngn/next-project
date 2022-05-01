export default function handler(req, res) {
  const apiExample = {
    name: 'Khoa',
    description: 'Khoa Nguyen is a software engineer who is passionate about building software that is useful and easy to use.',
    url: 'https://www.khoanguyen.dev',
    email: 'rogkhoa.mail@gmail.com',
    facebook: 'https://www.facebook.com/yun.khngn',
  }
  res.json(apiExample)
}