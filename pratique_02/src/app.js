class Keyboard {
    constructor(
        name,
        brand,
        compatibleDevices,
        connectivityTechnology,
        keyboardDescription,
        specialFeature,
        colour,
        numberOfKeys,
        style,
        productDimensions,
        material
    ) {
        this.name = name;
        this.brand = brand;
        this.compatibleDevices = compatibleDevices;
        this.connectivityTechnology = connectivityTechnology;
        this.keyboardDescription = keyboardDescription;
        this.specialFeature = specialFeature;
        this.colour = colour;
        this.numberOfKeys = numberOfKeys;
        this.style = style;
        this.productDimensions = productDimensions;
        this.material = material;
    }
    toHtml() {
        const keyboardDiv = document.createElement('div');
        const name = document.createElement('span');
        const brand = document.createElement('span');
        const compatibleDevices = document.createElement('span');
        const connectivityTechnology = document.createElement('span');
        const keyboardDescription = document.createElement('span');
        const specialFeature = document.createElement('span');
        const colour = document.createElement('span');
        const numberOfKeys = document.createElement('span');
        const style = document.createElement('span');
        const productDimensions = document.createElement('span');
        const material = document.createElement('span');

        name.textContent = 'Name ' + this.name;
        brand.textContent = 'Brand ' + this.brand;
        compatibleDevices.textContent = 'Devices ' + this.compatibleDevices;
        connectivityTechnology.textContent = 'Connectivity ' + this.connectivityTechnology;
        keyboardDescription.textContent = 'Keyboard Description ' + this.keyboardDescription;
        specialFeature.textContent = 'Special Feature ' + this.specialFeature;
        colour.textContent = 'Colour ' + this.colour;
        numberOfKeys.textContent = 'Number Of Keys ' + this.numberOfKeys;
        style.textContent = 'Style ' + this.style;
        productDimensions.textContent = 'Product Dimensions ' + this.productDimensions;
        material.textContent = 'Material ' + this.material;

        keyboardDiv.appendChild(name);
        keyboardDiv.appendChild(brand);
        keyboardDiv.appendChild(compatibleDevices);
        keyboardDiv.appendChild(connectivityTechnology);
        keyboardDiv.appendChild(keyboardDescription);
        keyboardDiv.appendChild(specialFeature);
        keyboardDiv.appendChild(colour);
        keyboardDiv.appendChild(numberOfKeys);
        keyboardDiv.appendChild(style);
        keyboardDiv.appendChild(productDimensions);
        keyboardDiv.appendChild(material);

        return keyboardDiv
    }
}
const stars = [
    new Keyboard(
        "Magic-Refiner",
        "MAGIC-REFINER",
        "Smartphone",
        "Bluetooth",
        "Mechanical",
        "Ergonomic",
        "Off-white & Orange/Red Switch",
        68,
        "Modern",
        "31.2L x 10.2W x 4.3H Centimetres",
        "Polycarbonate"
    ),
    new Keyboard(
        "Magic-Refiner",
        "MAGIC-REFINER",
        "Smartphone",
        "Bluetooth",
        "Mechanical",
        "Ergonomic",
        "Off-white & Orange/Red Switch",
        68,
        "Modern",
        "31.2L x 10.2W x 4.3H Centimetres",
        "Polycarbonate"
    ),
    new Keyboard(
        "Magic-Refiner",
        "MAGIC-REFINER",
        "Smartphone",
        "Bluetooth",
        "Mechanical",
        "Ergonomic",
        "Off-white & Orange/Red Switch",
        68,
        "Modern",
        "31.2L x 10.2W x 4.3H Centimetres",
        "Polycarbonate"
    ),
    new Keyboard(
        "Magic-Refiner",
        "MAGIC-REFINER",
        "Smartphone",
        "Bluetooth",
        "Mechanical",
        "Ergonomic",
        "Off-white & Orange/Red Switch",
        68,
        "Modern",
        "31.2L x 10.2W x 4.3H Centimetres",
        "Polycarbonate"
    ),
];

const container = document.querySelector('.keyboard_container');

stars.forEach(keyboard => {
    container.appendChild(keyboard.toHtml());    
});