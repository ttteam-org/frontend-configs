/**
 * Конфиг от пакета "github-release-notes", который используется в github actions
 * и нужен для генерации списка изменений между релизами
 */
module.exports = {
  "dataSource": 'prs',
  "prefix": "",
  "includeMessages": 'commits',
  "changelogFilename": 'CHANGELOG.md',
  "onlyMilestones": false,
  "groupBy": false,
  template: {
    issue: "[{{text}}]({{url}}) {{name}}",
    changelogTitle: '### Изменения\n\n',
    release: '{{body}}'
  }
}
