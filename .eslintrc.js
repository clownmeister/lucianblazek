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
    "@typescript-eslint/explicit-function-return-type": 1,
    quotes: [1, "single", { "avoidEscape": true, "allowTemplateLiterals": true }]
  },
};
