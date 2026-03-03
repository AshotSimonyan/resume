# Portfolio Clone (React + Vite)

This project recreates the design and section structure of:
`https://ashish-porfolio.vercel.app/`

## Stack

- React
- Vite

## Main files

- `src/App.jsx`: page sections and UI structure
- `src/data/cvData.js`: all editable CV content
- `src/index.css`: exact stylesheet extracted from the source deployment
- `public/`: source-matching assets (images/icons/background/resume)

## Edit with your CV

Update `src/data/cvData.js`:

- hero text and role
- social links
- about content
- projects
- skills
- contact email and resume URL
- social image icons from `public/` (example: `/linkedin-image.png`)

To change your LinkedIn image, replace:

- [linkedin-image.png](/Users/ashotsimonyan/Documents/Projects/portfolio/public/linkedin-image.png)

Generate an illustration-style hero image from that photo:

```bash
npm run make:illustration
```

This writes:

- [linkedin-illustration.png](/Users/ashotsimonyan/Documents/Projects/portfolio/public/linkedin-illustration.png)

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL (usually `http://localhost:5173`).
