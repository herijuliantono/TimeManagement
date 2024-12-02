actor TaskCanister {
  stable var tasks: [Task] = [];

  type Task = {
    id: Nat;
    title: Text;
    description: Text;
    deadline: Text;
    category: Text;
    completed: Bool;
  };

  public func addTask(task: Task) : async Text {
    tasks := tasks # [task];
    "Task added successfully."
  };

  public func getTasks() : async [Task] {
    tasks
  };

  public func getTask(id: Nat) : async ?Task {
    switch (List.find(tasks, func(t) { t.id == id })) {
      case (?task) => task;
      case null => null;
    }
  };

  public func updateTask(id: Nat, task: Task) : async Text {
    switch (List.find(tasks, func(t) { t.id == id })) {
      case (?_) => 
        tasks := List.map(tasks, func(t) {
          if (t.id == id) task else t
        });
        "Task updated successfully."
      case null => "Task not found."
    }
  };
};
