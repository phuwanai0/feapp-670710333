
import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ภูวนัย เปรมจันทร์', nickname: 'เอ็ม',
    major: 'IT', favorites: ['กระเป๋า', 'แมว'] },

    { id: 1, name: 'สมชาย ใจร้าย', nickname: 'ฝัน',
    major: 'CS', favorites: ['เรียน', 'หมา'] },

    { id: 1, name: 'สมหมาย ใจดีดี', nickname: 'กัน',
    major: 'CS', favorites: ['กิน', 'นก'] }
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;