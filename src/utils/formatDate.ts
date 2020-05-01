export default (date: Date): string =>
  new Intl.DateTimeFormat('pt-BR').format(date);
