# Makeup Artist Booking Platform (Mini Web App)

A **responsive mini web app** built with **Next.js + TypeScript** that simulates a **makeup artist booking platform**.

---

## 🎯 Project Overview

The platform allows users to:

- Explore **makeup categories** and subcategories.
- Browse **artist listings** in each category.
- Book appointments with artists via a **booking form**.
- View a **confirmation page** after booking.
- Track their bookings on a **My Bookings** page (stored in local state).

---

## 📌 Features

1. **Landing Page**
   - Hero section with creative headline and CTA.
   - Makeup categories presented using cards, tabs, or carousels.
   - Clickable categories leading to artist listings.
   - Custom footer with platform info and links.

2. **Artist Listing Page**
   - Displays all artists in the selected category.
   - Artist card includes:
     - Profile picture
     - Name
     - Price
     - Rating (stars)
     - “Book” button linking to the booking form

3. **Booking Page**
   - Auto-filled selected artist and category.
   - Booking form fields:
     - Name
     - Email / Phone
     - Date & Time picker
   - Form validation and submission handling.
   - Confirmation page showing booking details.

4. **My Bookings Page**
   - Displays all previous bookings.

5. **Responsive Design**
   - Mobile-first layout.
   - Tailwind CSS styling with modern UI components.
   - Animated components using Framer Motion.

---

## 🛠 Tech Stack

- **Next.js** – React framework for server-side rendering and routing
- **TypeScript** – Type-safe frontend development
- **Tailwind CSS** – Styling and responsive layouts
- **Framer Motion** – Smooth animations
- **React Hooks** – State management (useState, useEffect)

---

---

## 🚀 Setup Instructions (Run Locally)

```bash

1. **Clone the repository**

git clone https://github.com/shreyashap/beauty-booking.git


2. **Clone the repository**

npm install
# or
yarn install

3. **Run the development server**

npm run dev
# or
yarn dev

```

##  🎨 Design Choices

Color Palette: Shades of black, pink (#ff3479), and white for a luxurious, modern makeup vibe.

Typography: Bold headings, readable body text for clarity.

UI Components: Rounded buttons, cards, and shadow effects for an elegant look.

Animations: Subtle motion for hero elements, transitions for booking confirmation.

Responsiveness: Mobile-first layout with adaptive grids and flexible spacing.


