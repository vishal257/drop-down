const menus = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Profile',
        to: '/profile',
        children: [
            {
                label: 'User',
                to: '/profile/user'
            },
            {
                label: 'Details',
                to: '/profile/details'
            }
        ]
    },
    {
        label: 'Setting',
        to: '/setting',
        children: [
            {
                label: 'Account',
                to: '/setting/account'
            },
            {
                label: 'Security',
                to: '/setting/security',
                children:[
                    {
                        label: 'Login',
                        to: '/setting/security/login'
                    },
                    {
                        label: 'Register',
                        to: '/setting/security/register'
                    }
                ]
            },
        ]
    }
]

export default menus;