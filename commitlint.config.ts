module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nouvelle fonctionnalité
        'fix', // Correction de bug
        'docs', // Documentation
        'style', // Changement de style (sans impact sur le code)
        'refactor', // Réorganisation du code sans ajout de fonctionnalités
        'test', // Ajout ou mise à jour des tests
        'chore', // Mise à jour des tâches de build ou des dépendances
      ],
    ],
  },
};
