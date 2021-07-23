const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php"
    ],

    theme: {
        extend: {
            fontFamily: {
                serif: ["Lora", ...defaultTheme.fontFamily.serif]
            },
            transform: ["hover", "focus"],
            backgroundImage: theme => ({
                hero:
                    "url('https://res.cloudinary.com/dayh1edx8/image/upload/w_1520,h_1000,c_fill/v1617916872/kyle-mackie-MEnlQv-EQvY-unsplash_vwdynh.jpg')"
            }),
            height: theme => ({
                half: "50vh"
            }),
            maxWidth: {
                'text-50': '50ch',
            },
            gridTemplateColumns: {
                main: "repeat(12, 1fr)"
            }
        }
    },

    variants: {
        extend: {
            opacity: ["disabled"]
        }
    },

    plugins: [require("@tailwindcss/forms")]
};



