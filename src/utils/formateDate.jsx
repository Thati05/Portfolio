/**
 * Format a date string into a human-readable format
 * @param {string | Date | null | undefined} dateInput - The date string, Date object, or null/undefined
 * @returns {string} - The formatted date string or an empty string for invalid input
 */
export function formatDate(dateInput) {
  if (!dateInput) return ""; // Handle null or undefined input

  const date = new Date(dateInput); // Convert to Date object

  // Validate the date object
  if (isNaN(date.getTime())) {
    console.warn("Invalid date input provided to formatDate:", dateInput);
    return ""; // Return an empty string for invalid dates
  }

  // Define formatting options
  const options = {
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric", 
  };

  // Format the date and return
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
