export interface TaskItemProps {
    text: string;
    isCompleted: boolean;
    onComplete: () => void;
}


export function TaskItem({ isCompleted, onComplete, text }: TaskItemProps) {


    return (
        <li className={`bg-slate-900/20 border-2 border-slate-900 rounded-md p-4 flex justify-between items-center ${isCompleted ? 'line-through bg-green-600' : ''}`}>
            <span>{text}</span>
            <button onClick={onComplete} className="bg-red-600">{isCompleted ? 'Undo' : 'Complete'}</button>
        </li>
    )

}