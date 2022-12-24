const mobiles = [
    {
        mobile: "Samsung",
        models: [
            {
                name: "S21 Ultra",
                configurations: {
                    os: "Android 11",
                    built_in: "256 GB",
                    ram: "12 GB",
                    main_camera: "108 MP",
                    front_camera: "40 MP",
                    price: 242999
                }
            },
            {
                name: "Galaxy S22",
                configurations: {
                    os: "Android 12",
                    built_in: "256 GB",
                    ram: "8 GB",
                    main_camera: "50 MP",
                    front_camera: "10 MP",
                    price: 232999
                }
            },
            {
                name: "Galaxy Note 20 Ultra",
                configurations: {
                    os: "Android 10",
                    built_in: "256 GB",
                    ram: "8 GB",
                    main_camera: "108 MP",
                    front_camera: "10 MP",
                    price: 219999
                }
            },
            {
                name: "Galaxy A73",
                configurations: {
                    os: "Android 12",
                    built_in: "256 GB",
                    ram: "8 GB",
                    main_camera: "108 MP",
                    front_camera: "32 MP",
                    price: 133499
                }
            },
            {
                name: "Galaxy A53",
                configurations: {
                    os: "Android 12",
                    built_in: "256 GB",
                    ram: "8 GB",
                    main_camera: "64 MP",
                    front_camera: "32 MP",
                    price: 103999
                }
            },
            {
                name: "Galaxy A52",
                configurations: {
                    os: "Android 11",
                    built_in: "256 GB",
                    ram: "8 GB",
                    main_camera: "64 MP",
                    front_camera: "32 MP",
                    price: 65999
                }
            },
            {
                name: "Galaxy A32",
                configurations: {
                    os: "Android 11",
                    built_in: "128 GB",
                    ram: "6 GB",
                    main_camera: "64 MP",
                    front_camera: "20 MP",
                    price: 57999
                }
            },
            {
                name: "Galaxy A13",
                configurations: {
                    os: "Android 12",
                    built_in: "64 GB",
                    ram: "4 GB",
                    main_camera: "50 MP",
                    front_camera: "8 MP",
                    price: 43999
                }
            }
        ]
    },
    {
        mobile: "Xiaomi",
        models: [
            {
                name: "Xiaomi 12 Pro",
                configurations: {
                    os: "Android 12",
                    built_in: "256 GB",
                    ram: "12 GB",
                    main_camera: "50 MP",
                    front_camera: "32 MP",
                    price: 208999
                }
            },
            {
                name: "Xiaomi 11T",
                configurations: {
                    os: "Android 11",
                    built_in: "256 GB",
                    ram: "8 GB",
                    main_camera: "108 MP",
                    front_camera: "16 MP",
                    price: 79999
                }
            }
        ]
    },
    {
        mobile: "Vivo",
        models: [
            {
                name: "Vivo Y55",
                configurations: {
                    os: "Android 12",
                    built_in: "128 GB",
                    ram: "8 GB",
                    main_camera: "50 MP",
                    front_camera: "16 MP",
                    price: 64999
                }
            },
            {
                name: "Vivo Y53s",
                configurations: {
                    os: "Android 11",
                    built_in: "128 GB",
                    ram: "8 GB",
                    main_camera: "64 MP",
                    front_camera: "16 MP",
                    price: 40999
                }
            },
            {
                name: "Vivo Y20s",
                configurations: {
                    os: "Android 10",
                    built_in: "128 GB",
                    ram: "4 GB",
                    main_camera: "13 MP",
                    front_camera: "8 MP",
                    price: 30999
                }
            }
        ]
    },
    {
        mobile: "Oppo",
        models: [
            {
                name: "Oppo Reno 6 Pro",
                configurations: {
                    os: "Android 11",
                    built_in: "256 GB",
                    ram: "12 GB",
                    main_camera: "64 MP",
                    front_camera: "32 MP",
                    price: 119999
                }
            },
            {
                name: "Oppo A76",
                configurations: {
                    os: "Android 11",
                    built_in: "128 GB",
                    ram: "6 GB",
                    main_camera: "13 MP",
                    front_camera: "8 MP",
                    price: 47999
                }
            },
            {
                name: "Oppo F19",
                configurations: {
                    os: "Android 11",
                    built_in: "128 GB",
                    ram: "6 GB",
                    main_camera: "48 MP",
                    front_camera: "16 MP",
                    price: 36999
                }
            }
        ]
    },
    {
        mobile: "Realme",
        models: [
            {
                name: "Realme 9 Pro Plus",
                configurations: {
                    os: "Android 12",
                    built_in: "128 GB",
                    ram: "8 GB",
                    main_camera: "50 MP",
                    front_camera: "16 MP",
                    price: 79999
                }
            },
            {
                name: "Realme C21",
                configurations: {
                    os: "Android 10",
                    built_in: "32 GB",
                    ram: "3 GB",
                    main_camera: "13 MP",
                    front_camera: "5 MP",
                    price: 29999
                }
            },
            {
                name: "Realme C12",
                configurations: {
                    os: "Android 10",
                    built_in: "32 GB",
                    ram: "3 GB",
                    main_camera: "13 MP",
                    front_camera: "5 MP",
                    price: 16999
                }
            }
        ]
    }
]

const createOption = (id, text) => {
    const newOption = document.createElement('option');
    const optionText = document.createTextNode(text);

    newOption.appendChild(optionText);

    const value = String(text).toLowerCase;
    // newOption.setAttribute('value', value);

    const brand = document.getElementById(id);
    brand.appendChild(newOption);
}

const addBrands = () => {
    mobiles.map(i => {
        createOption("mobileBrand", i.mobile);
    });
}

const removeSelect = () => {
    const updateModels = document.getElementById("selectModel")
    while (updateModels.options.length > 1) {
        updateModels.remove(1);
    }
}

const selectedBrand = () => {
    //First remove all options from models select tag
    removeSelect()

    const e = document.getElementById("mobileBrand");
    const getBrand = e.options[e.selectedIndex].text;

    mobiles.map((i => {
        if (i.mobile === getBrand) {
            const models = i.models
            models.map(j => {
                createOption("selectModel", j.name)
            })
        }
    }))
}

const documentValue = (id, text) => {
    const idStr = String(id)
    document.getElementById(idStr).innerText = text;
}

const getSelectedModel = () => {
    // event.preventDefault();
    const e = document.getElementById("selectModel");
    const getBrand = e.options[e.selectedIndex].text;

    mobiles.map((i => {
        i.models.map(j => {
            if (j.name === getBrand) {
                console.log(j.configurations.os)
                documentValue("mobileName", j.name)
                documentValue("os", j.configurations.os)
                documentValue("built_in", j.configurations.built_in)
                documentValue("ram", j.configurations.ram)
                documentValue("mainCamera", j.configurations.main_camera)
                documentValue("frontCamera", j.configurations.front_camera)
                documentValue("price", j.configurations.price)
            }
        })
    }))
}

