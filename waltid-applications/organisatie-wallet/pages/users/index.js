import React, { useState, useEffect } from 'react'

//components
import PageMessage from '@/components/global/PageMessage'
import SearchBar from '@/components/global/SearchBar'
import UserTable from '@/components/user-table/UserTable'

const originalUsers = [
  { firstName: 'Siddhart', lastName: 'Ghogli', email: 'siddhart.ghogli@kvk.nl', role: 'Eigenaar', lastLogin: 'Maandag 24 Februari, 23:10' },
  { firstName: 'Vinay', lastName: 'Mahadew', email: 'vinay.mahadew@kvk.nl', role: 'Eigenaar', lastLogin: 'Donderdag 27 Februari, 22:04' },
  { firstName: 'John', lastName: 'Doe', email: 'john.doe@kvk.nl', role: 'Developer', lastLogin: 'Donderdag 20 Februari, 15:20' },
  { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@kvk.nl', role: 'HR', lastLogin: 'Zaterdag 22 Februari, 12:37' },
];

const UsersOverview = () => {
  const [users, setUsers] = useState(originalUsers)
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (search === "") {
      setUsers(originalUsers)
    } else {
      const filteredUsers = originalUsers.filter(user =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.role.toLowerCase().includes(search.toLowerCase())
      )
      setUsers(filteredUsers)
    }
  }, [search])

  return (
    <div className='w-full'>
      <PageMessage title="Gebruikersbeheer" message="Op deze pagina beheerd u alle gebruikers van uw organisatie wallet. Klik op een gebruiker om meer informatie te tonen." />

      <SearchBar title={search ? `${users.length} resultaten` : `Mijn Gebruikers (${users.length})`} state={search} setState={setSearch} />

      <div className='w-full mt-6 h-[64vh]  overflow-scroll rounded-t-lg'>
        <UserTable users={users} />
      </div>
    </div>

  )
}

export default UsersOverview