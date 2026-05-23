# 📦 Inventory Management System (MERN)

> Full-stack inventory management application built with MERN stack. Features real-time product management, live deployment, and responsive design.

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=flat-square&logo=mongodb&logoColor=white)
![Live Demo](https://img.shields.io/badge/Status-Live%20Deployed-green?style=flat-square)

**[🌐 Live Frontend](https://inventory-management-system-mern-2.onrender.com)** • **[🔌 Backend API](https://inventory-management-system-mern-1.onrender.com)**

</div>

---

## 📖 Project Overview

This is a **complete full-stack MERN application** demonstrating end-to-end development capabilities:
- ✅ React frontend with component architecture
- ✅ Express.js REST API backend
- ✅ MongoDB database integration
- ✅ Live deployment (works right now!)
- ✅ Responsive design for all devices

Perfect for learning or managing small business inventories.

---

## 🎯 Key Features

### **📝 Product Management**
- Add new products with name, price, and barcode
- View all products in organized tables
- Search products in real-time
- Update product information
- Delete products from inventory
- Unique barcode tracking

### **🎨 User Interface**
- Clean, intuitive design
- Responsive on mobile, tablet, desktop
- Fast loading and smooth interactions
- Real-time search functionality
- Visual feedback for user actions

### **⚙️ Backend API**
- RESTful API design
- Proper error handling
- Environment-based configuration
- CORS enabled for frontend integration
- Production-ready code

### **💾 Database**
- MongoDB cloud database
- Proper schema validation
- Indexed queries for performance
- Data persistence

---

## 🛠️ **Technology Stack**

### **Frontend**
| Technology | Purpose |
|-----------|---------|
| **React.js** | UI library for interactive interfaces |
| **JavaScript** | Logic and interactivity |
| **HTML5** | Page structure |
| **CSS3** | Styling and layout |
| **Bootstrap 5** | Responsive design components |
| **Axios** | HTTP client for API calls |
| **React Router** | Client-side navigation |

### **Backend**
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web server framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variables |

### **Deployment**
| Service | Purpose |
|---------|---------|
| **Render** | Frontend & Backend hosting |
| **MongoDB Atlas** | Cloud database |

---

## 📁 **Project Structure**

```
inventory-management-system-mern/
│
├── Frontend/
│   └── inventory_management_system/
│       ├── public/
│       │   ├── index.html
│       │   └── favicon.ico
│       │
│       ├── src/
│       │   ├── components/
│       │   │   ├── Navbar.js         # Navigation bar
│       │   │   ├── Home.js           # Home page
│       │   │   ├── Products.js       # Product listing
│       │   │   ├── InsertProduct.js  # Add product form
│       │   │   ├── UpdateProduct.js  # Edit product form
│       │   │   └── About.js          # About page
│       │   │
│       │   ├── styles/
│       │   │   └── App.css           # Global styles
│       │   │
│       │   ├── App.js                # Main component
│       │   └── index.js              # React entry point
│       │
│       ├── package.json
│       └── .gitignore
│
├── Backend/
│   ├── Models/
│   │   └── Products.js           # Product schema
│   │
│   ├── Routes/
│   │   └── router.js             # API routes
│   │
│   ├── Controllers/
│   │   └── (Handled in routes)
│   │
│   ├── config/
│   │   └── database.js           # MongoDB connection
│   │
│   ├── index.js                  # Main server file
│   ├── package.json
│   ├── .env.example              # Environment template
│   └── .gitignore
│
└── README.md
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js v14+ installed
- npm or yarn package manager
- MongoDB Atlas account (free tier available)
- Basic knowledge of JavaScript and React

### **Installation**

#### **Step 1: Clone the Repository**
```bash
git clone https://github.com/Sushanth226/inventory-management-system-mern.git
cd inventory-management-system-mern
```

#### **Step 2: Backend Setup**

Navigate to backend directory:
```bash
cd Backend
npm install
```

Create `.env` file:
```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/inventory_db?retryWrites=true&w=majority

# Server Configuration
PORT=3001
NODE_ENV=development
```

Start backend server:
```bash
npm start
# Server will run on http://localhost:3001
```

#### **Step 3: Frontend Setup**

In a new terminal, navigate to frontend:
```bash
cd Frontend/inventory_management_system
npm install
```

Create `.env` file (optional):
```env
REACT_APP_API_URL=http://localhost:3001
```

Start frontend development server:
```bash
npm start
# App will open on http://localhost:3000
```

#### **Step 4: Verify Everything Works**

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Try adding a product to test the full flow

---

## 📡 **API Endpoints**

### **Get All Products**
```http
GET /products
```

**Response:**
```json
{
  "products": [
    {
      "_id": "507f...",
      "ProductName": "Laptop",
      "ProductPrice": 50000,
      "ProductBarcode": 123456789,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### **Get Single Product**
```http
GET /product/:id
```

### **Add New Product**
```http
POST /insertproduct
Content-Type: application/json

{
  "ProductName": "Mouse",
  "ProductPrice": 500,
  "ProductBarcode": 987654321
}
```

### **Update Product**
```http
PUT /updateproduct/:id
Content-Type: application/json

{
  "ProductName": "Wireless Mouse",
  "ProductPrice": 600,
  "ProductBarcode": 987654321
}
```

### **Delete Product**
```http
DELETE /deleteproduct/:id
```

---

## 💾 **Database Schema**

### **Product Model**
```javascript
{
  ProductName: {
    type: String,
    required: true,      // Name is mandatory
    trim: true
  },
  ProductPrice: {
    type: Number,
    required: true,      // Price is mandatory
    min: 0
  },
  ProductBarcode: {
    type: Number,
    required: true,
    unique: true         // Each barcode must be unique
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

---

## 🌐 **How the Frontend-Backend Connection Works**

### **Frontend Request Flow**
```
User clicks "Add Product"
        ↓
React component collects form data
        ↓
Axios sends POST to /insertproduct
        ↓
Backend receives request
        ↓
Validates data
        ↓
Saves to MongoDB
        ↓
Returns success response
        ↓
Frontend updates UI with new product
```

### **Example: Adding a Product**

**Frontend Code (React Component):**
```javascript
const handleAddProduct = async (productData) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/insertproduct',
      productData
    );
    console.log('Product added:', response.data);
    // Refresh product list
    fetchProducts();
  } catch (error) {
    console.error('Error:', error);
  }
};
```

**Backend Code (Express API):**
```javascript
app.post('/insertproduct', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json({ success: true, product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

---

## 🔍 **Feature Details**

### **Real-Time Search**
Products are filtered as you type:
```javascript
const [searchTerm, setSearchTerm] = useState('');
const filtered = products.filter(product =>
  product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### **Responsive Design**
Bootstrap grid system ensures perfect display on all devices:
- 📱 Mobile: Single column layout
- 📱 Tablet: Two column layout
- 💻 Desktop: Three column layout

### **Form Validation**
Before sending to backend, frontend validates:
- ✅ All fields are filled
- ✅ Price is a positive number
- ✅ Barcode is numeric
- ✅ Product name is not empty

---

## 🚢 **Deployment Guide**

### **Deploy on Render** (Free hosting)

#### **Backend Deployment**

1. Push code to GitHub
2. Go to [Render.com](https://render.com)
3. Click "Create +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Root Directory:** `Backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - Add environment variable: `MONGODB_URI`
6. Click "Create Web Service"

#### **Frontend Deployment**

1. Go to [Render.com](https://render.com)
2. Click "Create +" → "Static Site"
3. Connect your repository
4. Configure:
   - **Root Directory:** `Frontend/inventory_management_system`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `build`
5. Click "Create Static Site"

Your app is now live! 🎉

---

## 📊 **Performance Tips**

### **Frontend Optimization**
- Use React.memo for expensive components
- Implement pagination for large product lists
- Lazy load images if added in future
- Use local storage for temporary data

### **Backend Optimization**
- Index frequently queried fields
- Use pagination for API responses
- Implement caching for repeated queries
- Monitor database performance

### **Database Optimization**
- Create indexes on ProductBarcode (unique lookup)
- Monitor connection pool
- Use MongoDB Atlas auto-scaling

---

## 🧪 **Testing Workflow**

### **Manual Testing**

1. **Add Product**
   - Click "Add Product"
   - Fill all fields
   - Click submit
   - Check if product appears in list

2. **Search Product**
   - Type in search box
   - Verify list filters in real-time
   - Clear search to show all

3. **Edit Product**
   - Click edit button
   - Modify details
   - Submit changes
   - Verify update in list

4. **Delete Product**
   - Click delete button
   - Confirm action
   - Product removed from list

5. **Test Responsiveness**
   - View on mobile (DevTools)
   - Verify layout adapts
   - Check touch interactions

---

## 🐛 **Troubleshooting**

### **Frontend Can't Connect to Backend**
```
Error: Cannot POST /insertproduct
Fix: Ensure backend is running on correct port
    Check REACT_APP_API_URL matches backend URL
    Verify CORS is enabled in backend
```

### **MongoDB Connection Failed**
```
Error: connect ECONNREFUSED
Fix: Check MONGODB_URI in .env
    Verify MongoDB Atlas IP whitelist includes your IP
    Ensure database credentials are correct
```

### **Port Already in Use**
```
Error: Port 3000/3001 is already in use
Fix: Kill process on that port or use different port
    macOS: lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill
    Windows: netstat -ano | findstr :3000
```

---

## 📚 **What I Learned**

✅ **MERN Stack Development**
- Building React components
- Creating REST APIs with Express
- MongoDB database design
- Frontend-backend integration

✅ **Full-Stack Concepts**
- HTTP requests and responses
- CRUD operations
- Database modeling
- API architecture

✅ **Deployment**
- Hosting applications online
- Environment configuration
- Production considerations

✅ **Best Practices**
- Code organization
- Error handling
- Responsive design
- Code comments

---

## 🔄 **Next Steps for Improvement**

- [ ] Add user authentication
- [ ] Implement product categories
- [ ] Add inventory alerts
- [ ] Create admin dashboard
- [ ] Add CSV export functionality
- [ ] Implement product images
- [ ] Add sales/purchase tracking
- [ ] Create analytics dashboard

---

## 📝 **Resources**

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas)
- [Mongoose Documentation](https://mongoosejs.com)
- [Render Deployment Docs](https://render.com/docs)

---

## 🤝 **Contributing**

Found a bug or have suggestions? I'm learning and open to feedback!

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

---

## 📄 **License**

MIT License - Feel free to use this project for learning!

---

<div align="center">

### ⭐ If you found this helpful, please star the repository!

**[View on GitHub](https://github.com/Sushanth226/inventory-management-system-mern)**

Made with ❤️ by Sushanth Yadav

</div>
