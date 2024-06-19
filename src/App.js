import { FlashCardArray } from 'react-flashcards';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './App.css';
import Header from './components/layouts/Header';

const App = () => {
  const flashcards = [
    {
        id: 1,
        front: <h1>How does that work for you?</h1>,
        back: <p>Как тебе это подходит?</p>
        // Other properties...
    },
    {
        id: 2,
        front: <h1>Hitchhike</h1>,
        back: <p>Поехать автостопом</p>
        // Other properties...
    },
    {
        id: 3,
        front: <h1>You'd better not take rides from strangers</h1>,
        back: <p>Тебе лучше нее ездить с незнакомцами</p>
        // Other properties...
    },
    {
        id: 4,
        front: <h1>Just a heads up</h1>,
        back: <p>Просто предипреждаю</p>
        // Other properties...
    },
    {
        id: 5,
        front: <h1>I'm most grateful</h1>,
        back: <p>Я очень благодарен</p>
        // Other properties...
    },
    {
        id: 6,
        front: <h1>You've been a great help</h1>,
        back: <p>Ты очень помог</p>
        // Other properties...
    },
    {
        id: 7,
        front: <h1>I owe you one</h1>,
        back: <p>Я твой должник</p>
        // Other properties...
    },
    {
        id: 8,
        front: <h1>Don't mention it</h1>,
        back: <p>Пожалуйста</p>
        // Other properties...
    },
    {
        id: 9,
        front: <h1>Anytime</h1>,
        back: <p>Всегда рад помочь</p>
        // Other properties...
    },
    {
        id: 10,
        front: <h1>Turn down the music, will you?</h1>,
        back: <p>Сделай потише музыку, ладно?</p>
        // Other properties...
    }
    // Add more flashcards as needed
  ];

  const data = [
    { name: 'Jan', value1: 30, value2: 40, value3: 50 },
    { name: 'Feb', value1: 20, value2: 30, value3: 40 },
    { name: 'Mar', value1: 27, value2: 20, value3: 35 },
    { name: 'Apr', value1: 35, value2: 27, value3: 30 },
    { name: 'May', value1: 40, value2: 35, value3: 50 },
    { name: 'Jun', value1: 45, value2: 40, value3: 55 },
    { name: 'Jul', value1: 50, value2: 45, value3: 60 },
    { name: 'Aug', value1: 55, value2: 50, value3: 65 },
    { name: 'Sep', value1: 60, value2: 55, value3: 70 },
    { name: 'Oct', value1: 65, value2: 60, value3: 75 },
    { name: 'Nov', value1: 70, value2: 65, value3: 80 },
    { name: 'Dec', value1: 75, value2: 70, value3: 85 },
  ];

  const data1 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div>
      <Header />

      <div className="flashcard-container">
        {/* <FlashCardArray
          cards={flashcards}
          controls={true}
          showCount={true}
        /> */}
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="top" align="center" />
            <Line type="monotone" dataKey="value1" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
            <Line type="monotone" dataKey="value3" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
