# QuickEMS — Client Frontend

The frontend interface for **QuickEMS**, built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**.

## 🛠 Features

- **Role-Based Portals**: Tailored interfaces for both Admin and Employee roles.
- **Modern Glassmorphic UI**: High-contrast, accessibility-tested, beautiful Tailwind CSS tokens.
- **Dynamic Check-in & Work Duration**: Real-time attendance logging and status visualization.
- **Interactive Leave Requests**: Calendar-validated leave applications and approvals.
- **Printable Payslips**: Formatted payslips with ready-to-print stylesheet support.
- **Full Responsive Design**: Seamless experience across mobile, tablet, and desktop viewports.

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Or using the start script
npm start

# Build for production
npm run build

# Run linter
npm run lint
```

## ⚙️ Environment Configuration

Create a `.env` file in the root of `client/`:

```env
VITE_BASE_URL="http://localhost:4000"
```
