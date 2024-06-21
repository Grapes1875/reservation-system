export function hasValidDateAndTime(reservation){
  const {reservation_date, reservation_time } = reservation;
  const errors = [];

  const day = new Date(reservation_date.getUTCDay());
  if(day === 2 ){
    errors.push(new Error("Restuarant is closed on Tuesdays"));
  }

  const reservationDateTime = new Date (`${reservation_date}T${reservation_time}`);

  const now = new Date();
  const buffer = 5 * 60 * 1000;
  if (reservationDateTime.getTime() <= now.getTime() + buffer){
    errors.push(new Error("Restuarant must be open in the future"));
  }

  const hours = reservationDateTime.getHours();
  const minutes = reservationDateTime.getMinutes();
  if(hours < 10 || (hours ===10 && minutes < 30)){
    errors.push(new Error("Reservation must be after 10:30"));
  }
  if (hours > 21 || (hours === 21 && minutes > 30)){
    errors.push(new Error("Reservation must be before 9:30OM"));
  }

  return errors;
}