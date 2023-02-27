

export class getTodoList{
    static readonly type = '[Users] get'  
}

export class onAddTodoList{
    static readonly type = '[User add]'
    constructor(public data: any){}
}


export class onDeleteTodo{
    static readonly type = '[User delete]'
    constructor(public id: any){}
}