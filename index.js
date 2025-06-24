function capitalizeWords(str) {
    if (typeof str !== 'string') {
      throw new TypeError(`capitalizeWords(): Expected a string, got ${typeof str}`);
    }
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  function camelToTitle(str) {
    if (typeof str !== 'string') {
      throw new TypeError(`camelToTitle(): Expected a string, got ${typeof str}`);
    }
    const spaced = str.replace(/([A-Z])/g, ' $1');
    return capitalizeWords(spaced.trim());
  }
  
  function formatDate(date) {
    const d = new Date(date);
    if (!(date instanceof Date) && typeof date !== 'string') {
      throw new TypeError(`formatDate(): Expected a Date object or date string, got ${typeof date}`);
    }
    if (isNaN(d.getTime())) {
      throw new Error(`formatDate(): Invalid date provided`);
    }
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  module.exports = {
    capitalizeWords,
    camelToTitle,
    formatDate,
};
  