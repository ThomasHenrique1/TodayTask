/* eslint-disable react/prop-types */
import TaskItem from "../Taskitem/TaskItem";

const TaskList = ({ tasks, onMarkAsDone, onDelete }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onMarkAsDone={onMarkAsDone}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;