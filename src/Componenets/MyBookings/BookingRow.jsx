import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm, handleDateUpdate }) => {
  const { _id, name, email, photo, date, duration, status } = booking;

  const [isEditing, setIsEditing] = useState(false);
  const [newDate, setNewDate] = useState(date);
  

const handleUpdateDate = async () => {
  const updatedDate = {
    date: newDate,
  };

  
};


  const isCancelable = () => {
    const currentDate = new Date();
    const bookingDate = new Date(date);
    const differenceInDays = Math.floor((bookingDate - currentDate) / (24 * 60 * 60 * 1000));

    return differenceInDays >= 1;
  };



const handleCancel = () => {
  if (isCancelable()) {
    // Implement your cancel logic here
    handleDelete(_id);
  } else {
    Swal.fire(
      'Error',
      'Can not cancel booking within one day of the check-in date',
      'error'
    );
  }
};



  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {isEditing ? (
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
        ) : (
          date
        )}
      </td>
      <th>
        {status === 'confirm' ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : isEditing ? (
          <button onClick={() => handleUpdateDate(_id)} className="btn btn-ghost bg-black text-white btn-xs">
            Confirm Update
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn btn-ghost bg-black text-white btn-xs">
            Update Date
          </button>
        )}
      </th>
      <td>{email}</td>
      <td>
        <Link to={`/reviews/${_id}`}>
          <button className='btn text-white h-10 bg-[#427D9D]'>Give Review</button>
        </Link>
      </td>
      <th>
        {isCancelable() ? (
          <button onClick={handleCancel} className="btn btn-sm btn-circle">
            Cancel
          </button>
        ) : (
          <span className="text-gray-500 text-red-600">Cannot Cancel</span>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
