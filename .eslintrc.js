module.exports =  {
  parser:  '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules:  {
    semi: 1,
    "consistent-return": true
  },
};
