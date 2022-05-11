export default function DisplayTheseTasksToggle(props) {

    return (
        <button onClick={() => {
            props.setShowCompleted((oldState) => !oldState);
          }}>{props.showCompleted ? "Show only completed tasks" : "Show all tasks"}
        </button>
  );
}