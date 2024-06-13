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
                to: '/profile/user'
            }
        ]
    },
    {
        label: 'Setting',
        to: '/setting',
        children: [
            {
                label: 'Account',
                to: '/account'
            },
            {
                label: 'Security',
                to: '/security',
                children:[
                    {
                        label: 'Login',
                        to: '/login'
                    },
                    {
                        label: 'Register',
                        to: '/register'
                    }
                ]
            },
        ]
    }
]

export default menus;