export const dateFormat = (timestamp) => {
  return (
    timestamp.getDate() +
    "/" +
    timestamp.getMonth() +
    "/" +
    (timestamp.getYear() % 100) +
    " " +
    timestamp.getHours() +
    ":" +
    (timestamp.getMinutes() < 10
      ? "0" + timestamp.getMinutes()
      : timestamp.getMinutes())
  );
};

export const tasksDto = (tasks) => {
  tasks.forEach((task) => {
    task.timestamp = new Date(task.timestamp);
  });
};
