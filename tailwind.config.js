const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php"
    ],

    theme: {
        aspectRatio: {
            // defaults to {}
            none: 0,
            square: [1, 1], // or 1 / 1, or simply 1
            "16/9": [16, 9], // or 16 / 9
            "4/3": [4, 3], // or 4 / 3
            "21/9": [21, 9] // or 21 / 9
        },
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
                "text-50": "50ch"
            },
            gridTemplateColumns: {
                main: "repeat(12, 1fr)"
            },
            padding: {
                "1/3": "33.3%",
                "2/3": "66.6%"
            }
        }
    },

    variants: {
        aspectRatio: ["responsive"], // defaults to ['responsive']
        extend: {
            opacity: ["disabled"]
        }
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("tailwindcss-aspect-ratio")
    ]
};
