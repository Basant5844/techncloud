import { withIronSessionApiRoute } from 'iron-session/next';

const sessionOptions = {
  password: 'password', // Set a strong password here
  cookieName: 'techncloud_partner',
  // The cookie options are optional and can be customized as needed
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
  },
};

export function withSession(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}
