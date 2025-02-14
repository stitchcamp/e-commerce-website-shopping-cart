// Product data with expanded categories and variants
const products = [
    // Clothing
    {
        id: 1,
        name: 'Classic T-Shirt',
        price: 103, // Converted to PHP
        image: 'images/classic.png',
        description: 'Premium cotton True Classic t-shirt in white',
        category: 'clothing',
        variants: {
            colors: ['White', 'Black', 'Gray', 'Navy'],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        }
    },
    {
        id: 2,
        name: 'Slim Fit Denim Jeans',
        price: 210, // Converted to PHP
        image: 'images/Denim.png',
        description: 'Comfortable slim fit jeans in classic blue wash',
        category: 'clothing',
        variants: {
            colors: ['Blue', 'Black', 'Ligh Blue'],
            sizes: ['28', '30', '32', '34', '36']
        }
    },
    {
        id: 3,
        name: 'Korean Women dress Short SleeveSlim Color',
        price: 157, // Converted to PHP
        image: 'images/Dress.jpg',
        description: 'Premium cotton True Classic t-shirt in olive',
        category: 'clothing',
        variants: {
            colors: ['White', 'Black', 'Pink', 'Blue'],
            sizes: ['XS', 'S', 'M', 'L']
        }
    },
    {
        id: 4,
        name: 'Womens Off Shoulder Tops Y2K T Shirt Slim Fit Long Sleeves Spring Fall Blouse Going Out Nightout Shirt White',
        price: 149, // Converted to PHP
        image: 'images/Tshirt.jpeg',
        description: 'Trendy,fitted, and stylish for any spring or fall outing',
        category: 'clothing',
        variants: {
            colors: ['White', 'Black', 'Purple', 'Pink'],
            sizes: ['XS', 'S', 'M','L','XL']
        }
    },
    {
        id: 5,
        name: 'Lorean Style Puff Sleeve Shirt French Short Sleeve Blouse Women',
        price: 345, // Converted to PHP
        image: 'images/Puff_shirt.jpg',
        description: 'Premium cotton True Classic t-shirt in whitesimple commuter/Korean version',
        category: 'clothing',
        variants: {
            colors: ['White', 'Black', 'Gray', 'Red'],
            sizes: ['XS', 'S', 'M']
        }
    },

    // Shoes
    {
        id: 4,
        name: 'Classic Sneakers For Men',
        price: 258, // Converted to PHP
        image: 'images/Classic_shoes.jpg',
        description: 'Minimalist sneakers perfect for any occasion',
        category: 'shoes',
        variants: {
            colors: ['White', 'Black', 'Gray', 'Blue'],
            sizes: ['40', '41', '43', '45', '48', '50']
        }
    },
    {
        id: 5,
        name: ' Running shoes for women sneakers with box paperbag',
        price: 1363, // Converted to PHP
        image: 'images/Shoes.jpg',
        description: 'Lightweight,Cushioned,and breathing for ultimate comfort',
        category: 'shoes',
        variants: {
            colors: ['White', 'Black', 'Pink'],
            sizes: ['28', '29', '30', '32', '34']
        }
    },
    {
        id: 6,
        name: 'Fashionable Flat Sandals for Women',
        price: 258, // Converted to PHP
        image: 'images/Sandals.png',
        description: 'Stylish,soft,and perfect for all-day wear',
        category: 'shoes',
        variants: {
            colors: ['White', 'Black', 'Gray'],
            sizes: ['27', '28', '30', '32',]
        }
    },
    {
        id: 7,
        name: 'Crystal Queen White Lace Flower Pumps women Elegant Wedding Shoes Bride High Heels',
        price: 637, // Converted to PHP
        image: 'images/Wedding_Sandals.jpg',
        description: 'Elegant high heels for brides, featuring delicate lace and floral details, perfect for weddings and special occasions.',
        category: 'shoes',
        variants: {
            colors: ['White', 'Black',],
            sizes: ['26', '27', '28', '29', '30', '31']
        }
    },
    // Accessories
    {
        id: 7,
        name: 'Classic Leather Belt',
        price: 166, // Converted to PHP
        image: 'images/Classic-belts.png',
        description: 'Genuine leather belt with classic silver buckle',
        category: 'accessories',
        variants: {
            colors: ['Brown', 'Black', 'Tan'],
            sizes: ['S', 'M', 'L', 'XL']
        }
    },
    {
        id: 8,
        name: 'Aviator Sunglasses',
        price: 193, // Converted to PHP
        image: 'images/Glasses.jpg',
        description: 'Classic aviator sunglasses with UV protection',
        category: 'accessories',
        variants: {
            colors: ['Gold', 'Silver', 'Black'],
            sizes: ['One Size']
        }
    },
    {
        id: 9,
        name: 'Zircon Gold Earrings',
        price: 50, // Converted to PHP
        image: 'images/Earing.jpg',
        description: 'Immerse yourself in luxury with these gold-plated brass adornments, seamlessly blending elegance and sophistication.',
        category: 'accessories',
        variants: {
            colors: ['Gold', 'Silver', 'Rose Gold'],
            sizes: ['One Size']
        }
    },
    
];

// Shopping cart array
let cart = [];

// Initialize the page
function initializePage() {
    displayProductsByCategory();
    updateCart();
    setupEventListeners();
}

// Display products organized by category
function displayProductsByCategory() {
    const productsContainer = document.getElementById('products');
    
    // Create category sections
    productsContainer.innerHTML = `
        <div class="category-section">
            <h2 class="category-heading">CLOTHING</h2>
            <div class="products-grid" id="clothing-products"></div>
        </div>
        <div class="category-section">
            <h2 class="category-heading">SHOES</h2>
            <div class="products-grid" id="shoes-products"></div>
        </div>
        <div class="category-section">
            <h2 class="category-heading">ACCESSORIES</h2>
            <div class="products-grid" id="accessories-products"></div>
        </div>
    `;

    // Filter and display products by category
    const clothingProducts = products.filter(p => p.category === 'clothing');
    const shoesProducts = products.filter(p => p.category === 'shoes');
    const accessoriesProducts = products.filter(p => p.category === 'accessories');

    // Display products in their respective sections
    displayProductsInSection('clothing-products', clothingProducts);
    displayProductsInSection('shoes-products', shoesProducts);
    displayProductsInSection('accessories-products', accessoriesProducts);
}

// Helper function to display products in a section
function displayProductsInSection(containerId, products) {
    const container = document.getElementById(containerId);
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">₱${product.price.toFixed(2)}</p>
                
                <div class="product-variants">
                    <select class="size-select" id="size-${product.id}">
                        <option value="">Select Size</option>
                        ${product.variants.sizes.map(size => 
                            `<option value="${size}">${size}</option>`
                        ).join('')}
                    </select>
                    
                    <select class="color-select" id="color-${product.id}">
                        <option value="">Select Color</option>
                        ${product.variants.colors.map(color => 
                            `<option value="${color}">${color}</option>`
                        ).join('')}
                    </select>
                </div>
                
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    const selectedSize = document.getElementById(`size-${productId}`).value;
    const selectedColor = document.getElementById(`color-${productId}`).value;
    
    if (!selectedSize || !selectedColor) {
        showNotification('Please select both size and color!');
        return;
    }
    
    const cartItemKey = `${productId}-${selectedSize}-${selectedColor}`;
    const existingItem = cart.find(item => 
        item.id === productId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ 
            ...product, 
            selectedSize, 
            selectedColor, 
            quantity: 1,
            cartItemKey
        });
    }

    updateCart();
    showNotification(`Added ${product.name} to cart!`);
}

// Remove item from cart
function removeFromCart(cartItemKey) {
    cart = cart.filter(item => item.cartItemKey !== cartItemKey);
    updateCart();
}

// Update cart display
// Update cart display
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p class="variant-details">Size: ${item.selectedSize} | Color: ${item.selectedColor}</p>
                    <p>₱${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.cartItemKey}')">
                    Remove
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = `${total.toFixed(2)}`;
}
// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout...');
        } else {
            alert('Your cart is empty!');
        }
    });
}

// Initialize the page when the window loads
window.onload = initializePage;