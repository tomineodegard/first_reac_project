export default function ListItem(props) {
    function handleDelete(){
        props.deleteItem(props.id);
    }

    function handleComplete(){
        props.toggleComplete(props.id);
    }
    
    return (
        <li className={props.completed ? "completed" : " "}>
        {props.task}<button className="completeTask" onClick={handleComplete}>{props.completed ? "Undo" : "Complete"}</button>
        {props.task}<button className="deleteTask" onClick={handleDelete}>Delete task</button>
    </li>
);
}