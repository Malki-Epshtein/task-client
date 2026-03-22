import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const ShowTaskDic = () => {
  let tzShowTaskDic = useSelector(x => x.userDBReducer.tzUser);
  let allTasks = useSelector((x) => x.taskDBReducer.taskDB);
 

 
  let userTasks = allTasks.filter(x => x.tzUser == tzShowTaskDic);


  let tileContent = ({ date, view }) => {
    if (view === 'month') {
     
      debugger
      const dateString = date.toLocaleDateString('en-CA');

    
      const dayTasks = userTasks.filter(t => t.dataTask === dateString);

      return (
        <div className="tasks-container">
          {dayTasks.map((t) => (
            <div 
              key={t.idTask} 
              style={{ 
                backgroundColor: t.tColort, 
                color: 'white',
                fontSize: '10px',
                marginBottom: '2px',
                borderRadius: '2px',
                padding: '1px'
              }}
            >
              {t.discreption} 
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Calendar tileContent={tileContent} locale="he-IL" />
    </div>
  );
};

export default ShowTaskDic;


