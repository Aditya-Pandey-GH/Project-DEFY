# SATA / BrainBits AI – Learning Planner

An AI-powered learning planner that generates and manages a weekly study schedule using Gemini AI.

## Features

- **AI-Powered Schedule Generation**: Uses Gemini 2.5-flash to create personalized weekly study schedules
- **Multiple Learning Paths**: Choose from DSA-only or DSA + specialization tracks (Web Dev, Android Dev, AI/ML)
- **MCQ-Based Validation**: Prove you studied by passing AI-generated multiple-choice questions
- **AI Chatbot**: Modify your schedule using natural language commands
- **Dark Premium UI**: Beautiful glassmorphism design with smooth animations

## Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Google Gemini AI (gemini-2.5-flash)
- CORS enabled

### Frontend
- React + Vite
- Tailwind CSS
- Axios for API calls
- Component-based architecture with hooks

## Setup Instructions

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the Backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sata_planner
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
```

4. Make sure MongoDB is running on your system

5. Start the backend server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your Backend `.env` file

## Project Structure

```
ScheduleMaker/
├── Backend/
│   ├── controllers/
│   │   └── planController.js
│   ├── models/
│   │   └── Plan.js
│   ├── routes/
│   │   └── planRoutes.js
│   ├── utils/
│   │   └── geminiClient.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── client/
    ├── src/
    │   ├── api/
    │   │   └── api.js
    │   ├── components/
    │   │   ├── Chatbot.jsx
    │   │   ├── Header.jsx
    │   │   ├── MCQModal.jsx
    │   │   ├── StudyCard.jsx
    │   │   └── WeeklySchedule.jsx
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   └── PathSelection.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── vite.config.js
    ├── index.html
    └── package.json
```

## API Endpoints

- `POST /api/plan/create` - Create a new study plan
- `POST /api/plan/modify` - Modify an existing plan via chatbot
- `GET /api/plan/:id` - Fetch a plan by ID
- `POST /api/plan/mcqs` - Generate MCQs for a topic
- `POST /api/plan/complete` - Mark a study block as complete

## Usage

1. **Create a Schedule**:
   - Select your learning path
   - Choose weekly available hours (5-60)
   - Select preferred study days
   - Click "Generate Schedule"

2. **Study and Validate**:
   - Click "Prove" on any study block
   - Answer the AI-generated MCQs
   - Pass with 60% or higher to mark complete

3. **Modify Schedule**:
   - Open the AI chatbot (bottom-right corner)
   - Use natural language to request changes
   - Examples: "Reduce DSA on Wednesday", "Move Android to Friday"

## Notes

- All AI logic is in the backend
- Schedules are stored in MongoDB
- No hard-coded schedules or mock data
- Passing threshold for MCQs is 60%

## License

ISC
