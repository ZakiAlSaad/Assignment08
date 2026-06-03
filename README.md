# TileGallery - Premium Tiles Collection

A modern, responsive web application for showcasing and browsing a curated collection of premium tiles. Built with Next.js, TypeScript, Tailwind CSS, and DaisyUI.

## 🎯 Project Overview

TileGallery is a full-stack tile gallery application where users can:
- Browse and search through a collection of premium tiles
- View detailed information about each tile
- Create an account and manage their profile
- Update their personal information

## 🚀 Live URL

[Add your deployed URL here after deployment to Vercel/Render]

## ✨ Key Features

- **Responsive Design**: Fully responsive on mobile, tablet, and desktop devices
- **Modern UI**: Built with Tailwind CSS and DaisyUI for a beautiful user interface
- **Search Functionality**: Search tiles by title with real-time filtering
- **Authentication**: User login and registration with session management
- **Profile Management**: Users can view and update their profile information
- **Animated Components**: Smooth animations using Animate.css
- **Fast Performance**: Optimized Next.js application with SSR/SSG

## 📦 Tech Stack

### Frontend
- **Framework**: Next.js 16.2.7 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + DaisyUI
- **UI Components**: DaisyUI
- **Animations**: Animate.css
- **Notifications**: React-Toastify
- **Carousel**: Swiper JS

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Authentication**: Custom session-based (Ready for BetterAuth integration)
- **Database**: MongoDB (Environment-ready)

## 📁 Project Structure

```
├── app/
│   ├── (auth)/               # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── (protected)/          # Protected routes
│   │   ├── my-profile/
│   │   └── update-profile/
│   ├── all-tiles/            # Tiles gallery page
│   ├── tile/[id]/            # Tile details page
│   ├── api/                  # API routes
│   │   ├── auth/             # Authentication endpoints
│   │   └── tiles/            # Tiles endpoints
│   ├── components/           # Reusable components
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── lib/                      # Utility functions and data
│   ├── auth.ts               # Authentication setup
│   ├── tiles-data.json       # Sample tile data
│   └── use-client.ts         # Custom hooks
├── public/                   # Static assets
│   └── images/
│       └── tiles/
├── .env.local                # Environment variables
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- MongoDB (optional, for full backend setup)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Assignment08
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env.local file with:
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_uri
   BETTER_AUTH_SECRET=your_secret_key
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

## 📖 Pages & Routes

### Public Routes
- `/` - Home page with featured tiles
- `/all-tiles` - Browse all tiles with search functionality
- `/login` - User login
- `/register` - User registration

### Protected Routes
- `/tile/[id]` - Tile details page
- `/my-profile` - User profile page
- `/update-profile` - Update profile information

## 🎨 Design Highlights

- **Color Scheme**: Purple & Blue gradient theme
- **Typography**: Clean, modern sans-serif fonts
- **Icons**: Emoji-based intuitive icons
- **Animations**: Fade-in animations on page load
- **Responsive**: Mobile-first approach with breakpoints

## 🔐 Authentication

The application currently uses session-based authentication with localStorage. 

**To integrate BetterAuth with MongoDB:**

1. Install BetterAuth packages:
   ```bash
   npm install better-auth
   ```

2. Update `lib/auth.ts` with your MongoDB connection
3. Configure Google OAuth credentials in `.env.local`
4. Update API routes to use BetterAuth handlers

## 📊 Sample Data

The application includes 8 sample tiles with the following properties:
- ID, Title, Description
- Image path, Category
- Creator, Style, Tags
- Price, Currency
- Dimensions, Material
- In Stock status

Sample data location: `lib/tiles-data.json`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
vercel deploy
```

### Deploy to Render

1. Create account on Render
2. Create new Web Service
3. Connect GitHub repository
4. Add environment variables
5. Deploy!

## 📝 Git Commits

The project includes meaningful commits documenting the development process:
- Initial project setup
- Component structure creation
- API routes implementation
- Authentication pages
- Styling and responsive design
- Testing and optimization

## 🎯 Next Steps

- [ ] Integrate BetterAuth with MongoDB
- [ ] Add shopping cart functionality
- [ ] Implement user favorites/wishlist
- [ ] Add email verification
- [ ] Implement admin dashboard
- [ ] Add payment integration
- [ ] Performance optimization
- [ ] SEO improvements

## 🤝 Contributing

Feel free to fork, modify, and improve this project for your needs.

## 📄 License

This project is created for educational purposes.

---

**Made with ❤️ by Zaki Al Saad**
