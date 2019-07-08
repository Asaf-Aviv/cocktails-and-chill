module.exports = {
  apps: [
    {
      name: 'Cocktails And Chill',
      script: './server/app',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
