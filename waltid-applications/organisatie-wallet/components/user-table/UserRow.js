import React from 'react'

//assets
import RightArrowSvg from '@/assets/icons/rightArrowSvg';

const UserRow = ({ user }) => {
    return (
        <tr className="text-left border-b h-14 text-base">
            <td className="py-2 px-8">{user.firstName}</td>
            <td className="py-2 px-4">{user.lastName}</td>
            <td className="py-2 px-4">{user.email}</td>
            <td className="py-2 px-4">
                <span className={`px-3 py-1.5 text-sm rounded-md text-white ${getRoleColor(user.role)}`}>
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
    );
}

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

export default UserRow