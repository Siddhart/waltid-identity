import RightArrowSvg from '@/assets/icons/rightArrowSvg'
import SearchSvg from '@/assets/icons/SearchSvg'
import PageMessage from '@/components/PageMessage'
import React from 'react'

const UsersOverview = () => {
  return (
    <div className='w-full'>
      <PageMessage title="Gebruikersbeheer" message="Op deze pagina beheerd u alle gebruikers van uw organisatie wallet. Klik op een gebruiker om meer informatie te tonen." />
      <div className='mt-12 flex flex-row justify-between items-center h-10'>
        <div>
          <p className='text-3xl font-bold '>Mijn Gebruikers (3)</p>
        </div>

        <div className='flex items-center justify-end gap-4'>
          <input className='border-b-[1px] border-black px-3 focus:outline-none' placeholder='Zoeken...' />
          <button className='w-10 h-10 rounded-md bg-[#383EDE] flex items-center justify-center'>
            <SearchSvg />
          </button>
        </div>
      </div>

      <div className='w-full mt-6 h-[64vh]  overflow-scroll rounded-t-lg'>
        <UserTable />
      </div>
    </div>

  )
}

const UserTable = () => {
  const users = [
    { firstName: 'Siddhart', lastName: 'Ghogli', email: 'siddhart.ghogli@kvk.nl', role: 'Eigenaar', lastLogin: 'Maandag 24 Februari, 23:10' },
    { firstName: 'Vinay', lastName: 'Mahadew', email: 'vinay.mahadew@kvk.nl', role: 'Eigenaar', lastLogin: 'Donderdag 27 Februari, 22:04' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@kvk.nl', role: 'Developer', lastLogin: 'Donderdag 20 Februari, 15:20' },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@kvk.nl', role: 'HR', lastLogin: 'Zaterdag 22 Februari, 12:37' },
  ];

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
            <tr key={index} className="text-left border-b h-14 text-base">
              <td className="py-2 px-8">{user.firstName}</td>
              <td className="py-2 px-4">{user.lastName}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">
                <span className={`px-3 py-1.5 rounded-md text-white ${getRoleColor(user.role)}`}>
                  {user.role}
                </span>
              </td>
              <td className="py-2 px-4">{user.lastLogin}</td>
              <td className="py-2 px-4">
                <button className="">
                  <RightArrowSvg color='#383EDE' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getRoleColor = (role) => {
  switch (role) {
    case 'Eigenaar':
      return 'bg-blue-600';
    case 'Developer':
      return 'bg-purple-600';
    case 'HR':
      return 'bg-red-600';
    default:
      return 'bg-gray-600';
  }
};

export default UsersOverview