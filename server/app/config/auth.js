console.log("7")
export default {
  googleAuth: {
    clientID: process.env.GOOGLE_KEY,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `${process.env.APP_URL}api/auth/google/callback`,
  },
};
console.log("8")
