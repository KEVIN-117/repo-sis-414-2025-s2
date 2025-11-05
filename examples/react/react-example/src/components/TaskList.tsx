import type { TaskItemProps } from './TaskItem'
import { TaskItem } from './TaskItem'

interface TaskListProps {
    tasks: Array<TaskItemProps>;
    onTaskComplete: (index: number) => void;
}

export function TaskList({ tasks, onTaskComplete }: TaskListProps) {
    return (
        <ul className="space-y-4">
            {tasks.map((task, index) => (
                <TaskItem key={index} text={task.text} isCompleted={task.isCompleted} onComplete={() => onTaskComplete(index)} />
            ))}
        </ul>
    )
}