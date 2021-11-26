export const sanitizeHtml = (str: string) => str.replace(/[&<>"']/gi, "");
