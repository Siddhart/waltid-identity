import React from 'react'

//components
import UserRow from './UserRow';

const UserTable = ({users}) => {
    return (
        <div className="relative pb-12">
          <table className="min-w-full">
            <thead className=''>
              <tr className="sticky top-0 w-full bg-[#383EDE] text-white text-left text-base font-bold">
                <th className="py-2 px-8">Voornaam</th>
                <th className="py-2 px-4">Achternaam</th>
                <th className="py-2 px-4">E-mail adres</th>
                <th className="py-2 px-4">Rol</th>
                <th className="py-2 px-4">Laatste aanmelding</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody className='h-12 overflow-scroll'>
              {users.map((user, index) => (
                <UserRow key={index} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default UserTable