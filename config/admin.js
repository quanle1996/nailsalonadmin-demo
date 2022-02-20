module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b8e49ede07e6805b1094bc8149a2ee87'),
  },
});
