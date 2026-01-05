# 📦 Inventory Management System (IMS)

A full-stack **Inventory Management System** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application helps businesses track and manage their product inventory with a simple, intuitive interface.

## 🌐 Live Demo

- **Frontend**: [https://inventory-management-system-mern-2.onrender.com](https://inventory-management-system-mern-2.onrender.com)
- **Backend API**: [https://inventory-management-system-mern-1.onrender.com](https://inventory-management-system-mern-1.onrender.com)

## ✨ Features

- **📝 Product Management**: Add, view, update, and delete products
- **🔍 Real-time Search**: Search products by name, price, or barcode
- **💾 Database Integration**: MongoDB Atlas cloud database for data persistence
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean and intuitive interface built with Bootstrap
- **🔄 CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **📊 Product Tracking**: Track product names, prices, and unique barcodes

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI library for building interactive user interfaces
- **React Router** - Client-side routing
- **Bootstrap 5** - CSS framework for responsive design
- **Axios/Fetch API** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

## 📁 Project Structure

```
inventory-management-system-mern/
├── Frontend/
│   └── inventory_management_system/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Home.js
│       │   │   ├── Navbar.js
│       │   │   ├── Products.js
│       │   │   ├── InsertProduct.js
│       │   │   ├── UpdateProduct.js
│       │   │   └── About.js
│       │   ├── App.js
│       │   └── index.js
│       └── package.json
├── Backend/
│   ├── Models/
│   │   └── Products.js
│   ├── Routes/
│   │   └── router.js
│   ├── db.js
│   ├── index.js
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB installation)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sushanth226/inventory-management-system-mern.git
   cd inventory-management-system-mern
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```

   Create a `.env` file in the Backend directory:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/IMS?retryWrites=true&w=majority
   PORT=3001
   ```

   Start the backend server:
   ```bash
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd Frontend/inventory_management_system
   npm install
   ```

   Start the frontend development server:
   ```bash
   npm start
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| POST | `/insertproduct` | Add a new product |
| GET | `/product/:id` | Get a specific product |
| PUT | `/updateproduct/:id` | Update a product |
| DELETE | `/deleteproduct/:id` | Delete a product |

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3001
```

### Frontend (Optional)
```env
REACT_APP_API_URL=http://localhost:3001
```

## 📦 Database Schema

**Product Model:**
```javascript
{
  ProductName: String (required),
  ProductPrice: Number (required),
  ProductBarcode: Number (required, unique),
  createdAt: Date,
  updatedAt: Date
}
```

## 🌟 Key Features Explained

### Product Management
- Add new products with name, price, and barcode
- View all products in a searchable table
- Update existing product information
- Delete products from inventory

### Validation
- Required field validation
- Unique barcode constraint
- Input format validation
- Error handling and user feedback

### User Experience
- Loading states during operations
- Success/error notifications
- Responsive navigation
- Clean, intuitive interface

## 🚢 Deployment

This application is deployed on **Render**:
- Frontend: Static Site
- Backend: Web Service
- Database: MongoDB Atlas

### Deployment Steps

1. **Backend Deployment** (Render Web Service)
   - Connect GitHub repository
   - Set root directory to `Backend`
   - Add environment variables
   - Deploy

2. **Frontend Deployment** (Render Static Site)
   - Connect GitHub repository
   - Set root directory to `Frontend/inventory_management_system`
   - Set build command: `npm install && npm run build`
   - Set publish directory: `Frontend/inventory_management_system/build`
   - Deploy



## 👨‍💻 Author

**Sushanth**
- GitHub: [@Sushanth226](https://github.com/Sushanth226)

## 🙏 Acknowledgments

- MongoDB Atlas for cloud database hosting
- Render for deployment platform
- React.js community for excellent documentation
- Bootstrap for responsive design components

## 📧 Contact

For any questions or suggestions, please feel free to reach out!

---

⭐ **Star this repository if you found it helpful!**
