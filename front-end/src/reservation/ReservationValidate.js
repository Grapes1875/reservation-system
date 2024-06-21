export function hasValidDateAndTime(reservation) {
  const { reservation_date, reservation_time } = reservation;
  const errors = [];

  // Parse the reservation_date as a Date object
  const reservationDate = new Date(reservation_date);

  // No reservations on Tuesdays
  const day = reservationDate.getUTCDay();
  if (day === 2) {
    errors.push(new Error("Restaurant is closed on Tuesdays"));
  }

  // Create a Date object for the reservation date and time
  const reservationDateTime = new Date(`${reservation_date}T${reservation_time}`);

  // No reservations in the past (allowing a 5-minute buffer)
  const now = new Date();
  const buffer = 5 * 60 * 1000; // 5 minutes in milliseconds
  if (reservationDateTime.getTime() <= now.getTime() + buffer) {
    errors.push(new Error("Reservation must be in the future"));
  }

  // No reservations before 10:30AM or after 9:30PM
  const hours = reservationDateTime.getHours();
  const minutes = reservationDateTime.getMinutes();
  if (hours < 10 || (hours === 10 && minutes < 30)) {
    errors.push(new Error("Reservation must be after 10:30AM"));
  }
  if (hours > 21 || (hours === 21 && minutes > 30)) {
    errors.push(new Error("Reservation must be before 9:30PM"));
  }

  return errors;
}
